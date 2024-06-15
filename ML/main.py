import tensorflow as tf
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
from sklearn.model_selection import train_test_split
import numpy as np
import json
from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk.tokenize import word_tokenize
import nltk
import pickle
from flask import Flask, request, jsonify
import requests
print("henlo");
nltk.download('punkt')
nltk.download('stopwords')

app = Flask(__name__)

stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

def preprocess_text(text):
    words = word_tokenize(text)
    words = [stemmer.stem(word) for word in words if word.lower() not in stop_words and word.isalnum()]
    return ' '.join(words)

with open('tokenizer.pkl', 'rb') as handle:
    tokenizer = pickle.load(handle)

model = load_model('model.h5')

with open('label_dict.pkl', 'rb') as handle:
    label_dict = pickle.load(handle)

max_length = 100  
print("henlo 2")
@app.route('/getPostData', methods=['GET'])

def get_post_data():
    data = request.get_json()
    rows = data['data']['rows']
    print(rows);
    predictions = []

    for row in rows:
        post_id = row['post_id']
        text = row['post']

        preprocessed_text = preprocess_text(text)
        sequence = tokenizer.texts_to_sequences([preprocessed_text])
        padded_sequence = pad_sequences(sequence, maxlen=max_length, padding='post')

        prediction = model.predict(padded_sequence)
        predicted_label = np.argmax(prediction[0])  

        predicted_category = list(label_dict.keys())[predicted_label]

        predictions.append({
            'expertise': predicted_category,
            'post_id': post_id
        })

    response = requests.post('http://127.0.0.1:9000/processMLData', json=predictions)
    print(response)
    return jsonify(predictions)

if __name__ == '__main__':
    app.run(port=9000)
