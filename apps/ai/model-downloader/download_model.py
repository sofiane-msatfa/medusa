import os
from transformers import AutoModelForSequenceClassification, AutoTokenizer

model_name = "nlptown/bert-base-multilingual-uncased-sentiment"
model_dir = '/models/bert-base-uncased-sentiment'

if not os.path.exists(model_dir):
    print(f"Téléchargement du modèle et du tokenizer {model_name}...")
    model = AutoModelForSequenceClassification.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)

    model.save_pretrained(model_dir)
    tokenizer.save_pretrained(model_dir)
    print(f"Le modèle et le tokenizer {model_name} ont été sauvegardés dans {model_dir}")
else:
    print(f"Le modèle et le tokenizer {model_name} existent déjà dans {model_dir}")