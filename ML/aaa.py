import requests
import numpy as np
import pickle
from tensorflow.keras.preprocessing.sequence import pad_sequences
from tensorflow.keras.models import load_model
from nltk.tokenize import word_tokenize
from nltk.stem import PorterStemmer
from nltk.corpus import stopwords
import nltk

# Initialize NLTK resources if needed
nltk.download('punkt')
nltk.download('stopwords')

# Initialize stemmer and stop words list (again for prediction)
stemmer = PorterStemmer()
stop_words = set(stopwords.words('english'))

# Load the saved tokenizer
with open('tokenizer.pkl', 'rb') as handle:
    tokenizer = pickle.load(handle)

# Load the model
model = load_model('model.h5')

# Function to preprocess text (same as before)
def preprocess_text(text):
    words = word_tokenize(text)
    words = [stemmer.stem(word) for word in words if word.lower() not in stop_words and word.isalnum()]
    return ' '.join(words)

# Function to send predictions to the API endpoint
def send_predictions():
    # Sample texts for prediction
    sample_texts = ["Creation of wooden bedside tables and nightstands.",
                    "Repairing and maintaining plumbing for large estates.",
                    "Connecting wires in the office",
                    "I want to paint the walls",
                    "I want to paint the furniture",
                    "I want paint a toilet tap"
                    ]

    # Preprocess and tokenize sample texts
    sample_texts_preprocessed = [preprocess_text(text) for text in sample_texts]
    sample_sequences = tokenizer.texts_to_sequences(sample_texts_preprocessed)
    sample_padded = pad_sequences(sample_sequences, maxlen=100, padding='post')

    # Predict probabilities for each class
    predictions = model.predict(sample_padded)

    # Get predicted class labels
    predicted_labels = np.argmax(predictions, axis=1)

    # Prepare data to send
    processed_data = []
    for text, predicted_label in zip(sample_texts, predicted_labels):
        processed_data.append({
            "expertise": str(predicted_label),  # Assuming reverse_label_dict maps numeric labels to strings
            "post_id": text  # You can use any unique identifier here
        })

    # Send processed data to the API endpoint
    post_url = 'http://127.0.0.1:9000/processMLData'
    post_response = requests.post(post_url, json=processed_data)
    post_response.raise_for_status()  # Raise exception for bad response status

    print("Predictions sent successfully.")

# Entry point to execute prediction and sending
if __name__ == '__main__':
    send_predictions()
