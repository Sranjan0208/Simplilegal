from flask import Flask, request, jsonify
from huggingface_hub import login
from transformers import AutoTokenizer, pipeline
import torch

login("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")

app = Flask(__name__)

model = "meta-llama/Llama-2-7b-chat-hf"
tokenizer = AutoTokenizer.from_pretrained(model, use_auth_token=True)
llama_pipeline = pipeline(
    "text-generation",
    model=model,
    torch_dtype=torch.float16,
    device_map="auto",
)

@app.route('/api/get_llama_response', methods=['POST'])
def get_llama_response():
    try:
        data = request.json
        prompt = data['prompt']
        sequences = llama_pipeline(
            prompt,
            do_sample=True,
            top_k=10,
            num_return_sequences=1,
            eos_token_id=tokenizer.eos_token_id,
            max_length=1000,
        )
        response = sequences[0]['generated_text']
        return jsonify({'success': True, 'response': response})
    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
