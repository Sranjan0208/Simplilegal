from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import replicate

os.environ["REPLICATE_API_TOKEN"] ="r8_W3WU72Ju3eiKoRsxKfuOSk6Ex0e9HcH0yviIS"

app = Flask(__name__)
CORS(app)

@app.route('/api/get_llama_response', methods=['POST'])
def get_llama_response():
    try:
        data = request.json
        print(data)
        prompt = data['promptString']
        print("Prompt" + prompt)

        

        # Generate LLM response
        output = replicate.run('a16z-infra/llama13b-v2-chat:df7690f1994d94e96ad9d568eac121aecf50684a0b0963b25a41cc40061269e5',input={"prompt": prompt, "temperature": 0.1, "top_p": 0.9, "max_length": 1000, "repetition_penalty": 1})

        response = ""
        for item in output:
            response += item

        return jsonify({'success': True, 'response': response})

    except Exception as e:
        return jsonify({'success': False, 'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
