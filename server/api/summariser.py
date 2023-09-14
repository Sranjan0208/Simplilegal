from flask import Flask, request, jsonify
from transformers import pipeline

app = Flask(__name__)

# Create a summarization pipeline
summarizer = pipeline("summarization")

# Route to get a summary for a given input from the database
@app.route('/get_summary', methods=['POST'])
def get_summary():
    # Retrieve data from the database based on user input (you'll need to implement this)
    input_data = request.form['input_data']

    # Generate a summary using the Hugging Face summarizer
    summary = summarizer(input_data, max_length=150, min_length=30, do_sample=False)

    return jsonify({'summary': summary[0]['summary_text']})

if __name__ == '__main__':
    app.run()