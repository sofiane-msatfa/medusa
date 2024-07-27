from flask import Flask, request, jsonify
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = Flask(__name__)

model_name='/models/bert-base-uncased-sentiment'
tokenizer = AutoTokenizer.from_pretrained(model_name, local_files_only=True)
model = AutoModelForSequenceClassification.from_pretrained(model_name, local_files_only=True)

@app.route('/predict', methods=['POST'])
def predict():
    print("received message")
    message = request.get_json(force=True)

    if 'text' not in message:
        return jsonify({ 'error': 'Invalid input' }), 400
    
    input_text = message['text']
    inputs = tokenizer(input_text, return_tensors="pt")

    with torch.no_grad():
        outputs = model(**inputs)

    labels = ["Très négatif", "Négatif", "Neutre", "Positif", "Très positif"]

    predictions = torch.softmax(outputs.logits, dim=1).tolist()[0]
    max_index = predictions.index(max(predictions))
    sentiment = labels[max_index]
    confidence = predictions[max_index] * 100

    return jsonify({ 
        'sentiment': sentiment,
        'confidence': f"{confidence:.2f}%"
    })

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=4000)