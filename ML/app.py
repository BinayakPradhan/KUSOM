from flask import Flask, jsonify, request
import requests
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np
import pickle
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
import nltk
import json
import tensorflow as tf

# Set TensorFlow logging level to suppress warnings (optional)
tf.get_logger().setLevel('ERROR')

# Initialize NLTK resources if needed
nltk.download('punkt')
nltk.download('stopwords')

# Initialize Flask application
app = Flask(__name__)

# Load the saved tokenizer
try:
    with open('tokenizer.pkl', 'rb') as handle:
        tokenizer = pickle.load(handle)
except FileNotFoundError:
    tokenizer = None

# Load the trained model
try:
    model = load_model('model.h5')
except (OSError, IOError) as e:
    model = None

# Initialize stemmer and stop words list
stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

# Load reverse_label_dict from JSON
try:
    with open('reverse_label_dict.json', 'r') as f:
        reverse_label_dict = json.load(f)
except FileNotFoundError:
    reverse_label_dict = {}

# Function to preprocess text
def preprocess_text(text):
    words = word_tokenize(text)
    words = [stemmer.stem(word) for word in words if word.lower() not in stop_words and word.isalnum()]
    return ' '.join(words)

# Function to fetch data from external API and process


# Route to trigger data fetching and processing
@app.route('/processData', methods=['GET'])
def fetch_and_process_data():
    try:
        # Fetch data from http://127.0.0.1:9000/getPostData
        url = 'http://127.0.0.1:9000/getPostData'
        response = requests.get(url)
        print(response.json())
        # response.raise_for_status()  # Raise exception for bad response status
        

        data = response.json()
        if 'status' in data and data['status'] == 'success':
            rows = data.get('data', {}).get('rows', [])
            processed_data = []

            for row in rows:
                post_id = row.get('post_id')
                post_text = row.get('post')

                if post_id and post_text and tokenizer and model and reverse_label_dict:
                    try:
                        # Preprocess and tokenize post text
                        preprocessed_text = preprocess_text(post_text)
                        sequence = tokenizer.texts_to_sequences([preprocessed_text])
                        padded_sequence = pad_sequences(sequence, maxlen=100, padding='post')

                        # Predict category
                        prediction = model.predict(padded_sequence)
                        predicted_label = np.argmax(prediction)
                        predicted_category = reverse_label_dict.get(str(predicted_label))
                        print(f"Predicted category for post_id {post_id}: {predicted_category}")  # Print predicted category

                        # Prepare data for sending to http://127.0.0.1:9000/processMLData
                        data_to_send = {
                            "expertise": predicted_category,
                            "post_id": post_id
                        }
                        processed_data.append(data_to_send)
                
                    except Exception as e:
                        print(f"Error processing post_id {post_id}: {str(e)}")
                
            if processed_data:
                # Send processed data to http://127.0.0.1:9000/processMLData
                post_url = 'http://127.0.0.1:9000/processMLData'
                post_response = requests.post(post_url, json=processed_data)
                print(response.json())
                post_response.raise_for_status()  # Raise exception for bad response status

                return jsonify({'status': 'success', 'message': 'Data processed successfully and sent.'})
            else:
                return jsonify({'status': 'error', 'message': 'No valid data to process.'})

        else:
            return jsonify({'status': 'error', 'message': 'Failed to fetch data from getPostData API.'})

    except requests.exceptions.RequestException as e:
        return jsonify({'status': 'error', 'message': f'Request error: {str(e)}'})
    except (KeyError, ValueError, TypeError) as e:
        return jsonify({'status': 'error', 'message': f'Error processing data: {str(e)}'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Unexpected error: {str(e)}'})

# Route to handle predictions and sending data
@app.route('/processMLData', methods=['POST'])
def process_ml_data():
    try:
        data = request.json
        # Process data as needed
        # Example: Save data to database, perform additional tasks, etc.
        return jsonify({'status': 'success', 'message': 'Data received and processed.'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Error processing data: {str(e)}'})

if __name__ == '__main__':
    app.run(debug=True)
