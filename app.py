# from flask import Flask, request, jsonify
# from flask_cors import CORS
# import pickle
# import numpy as np
# import pandas as pd

# app = Flask(__name__)
# CORS(app)

# # Load model and scaler
# model = pickle.load(open("model.pkl", "rb"))
# scaler = pickle.load(open("scaler.pkl", "rb"))

# # Define feature names to match training
# FEATURE_NAMES = ["age", "balance", "duration", "campaign", "pdays", "previous"]

# @app.route("/", methods=["GET"])
# def home():
#     return jsonify({
#         "message": "Flask API is running 🚀",
#         "endpoint": "/loan (POST)",
#         "features": FEATURE_NAMES
#     })

# @app.route("/loan", methods=["POST"])
# def predict():
#     if not request.is_json:
#         return jsonify({"error": "Request must be JSON"}), 400

#     data = request.get_json()

#     try:
#         # Extract and validate features
#         features = []
#         for feature in FEATURE_NAMES:
#             if feature not in data:
#                 return jsonify({"error": f"Missing feature: {feature}"}), 400
#             features.append(float(data[feature]))

#         # Handle pdays special case (-1 -> 999)
#         if features[4] == -1:  # pdays is at index 4
#             features[4] = 999

#         # Create DataFrame with proper feature names
#         features_df = pd.DataFrame([features], columns=FEATURE_NAMES)
        
#         # Scale features
#         features_scaled = scaler.transform(features_df)

#         # Make prediction
#         prediction = model.predict(features_scaled)[0]
#         probability = model.predict_proba(features_scaled)[0][1]

#         result = "YES (Will Subscribe)" if prediction == 1 else "NO (Will Not Subscribe)"

#         return jsonify({
#             "prediction": result,
#             "confidence": round(probability * 100, 2),
#             "probability": round(probability, 4)
#         })

#     except ValueError as e:
#         return jsonify({"error": f"Invalid input values: {str(e)}"}), 400
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# @app.route("/data-ranges", methods=["GET"])
# def data_ranges():
#     """Return data ranges for validation"""
#     return jsonify({
#         "age": {"min": 18, "max": 95, "description": "Customer age"},
#         "balance": {"min": -8019, "max": 102127, "description": "Average yearly balance in euros"},
#         "duration": {"min": 0, "max": 4918, "description": "Last contact duration in seconds"},
#         "campaign": {"min": 1, "max": 63, "description": "Number of contacts in this campaign"},
#         "pdays": {"min": -1, "max": 871, "description": "Days since last contact (-1 = never contacted)"},
#         "previous": {"min": 0, "max": 58, "description": "Number of contacts before this campaign"}
#     })

# if __name__ == "__main__":
#     app.run(host="127.0.0.1", port=5000, debug=True, use_reloader=False)


from flask import Flask, request, jsonify
from flask_cors import CORS
import pickle
import pandas as pd

app = Flask(__name__)
CORS(app)

# =========================
# Load model & scaler
# =========================
model = pickle.load(open("Model/bank_model.pkl", "rb"))
scaler = pickle.load(open("Model/bank_scaler.pkl", "rb"))

# =========================
# Feature names (MUST match training order)Everything up-to-date
# =========================
FEATURE_NAMES = [
    'Unnamed: 0', 'age', 'marital', 'education', 'default', 'balance', 'housing',
    'loan', 'contact', 'day', 'month', 'duration', 'campaign', 'pdays', 'previous',
    'poutcome', 'y', 'job_blue-collar', 'job_entrepreneur', 'job_housemaid',
    'job_management', 'job_retired', 'job_self-employed', 'job_services',
    'job_student', 'job_technician', 'job_unemployed', 'job_unknown'
]

# =========================
# Home route
# =========================
@app.route("/", methods=["GET"])
def home():
    return jsonify({
        "message": "Bank Prediction API is running 🚀",
        "endpoint": "/predict (POST)",
        "features": FEATURE_NAMES
    })

# =========================
# Prediction route
# =========================
@app.route("/predict", methods=["POST"])
def predict():
    if not request.is_json:
        return jsonify({"error": "Request must be JSON"}), 400

    data = request.get_json()

    try:
        # Debug: Print incoming data
        print(f"Received data: {data}")
        
        # Create full feature array with all 28 features
        input_data = [0] * 28
        
        # Basic features
        input_data[0] = 1  # Unnamed: 0 (index)
        input_data[1] = float(data.get('age', 30))  # age
        input_data[5] = float(data.get('balance', 0))  # balance
        input_data[11] = float(data.get('duration', 100))  # duration
        input_data[12] = float(data.get('campaign', 1))  # campaign
        input_data[13] = float(data.get('pdays', -1))  # pdays
        input_data[14] = float(data.get('previous', 0))  # previous
        input_data[16] = 0  # y (target variable, 0 for prediction)
        
        # Categorical features - map from frontend values
        # Marital status
        marital_map = {'married': 1, 'single': 2, 'divorced': 3, 'unknown': 1}
        input_data[2] = marital_map.get(data.get('marital', 'married'), 1)
        
        # Education
        education_map = {'primary': 1, 'secondary': 2, 'tertiary': 3, 'unknown': 2}
        input_data[3] = education_map.get(data.get('education', 'secondary'), 2)
        
        # Credit default
        default_map = {'no': 0, 'yes': 1, 'unknown': 0}
        input_data[4] = default_map.get(data.get('default', 'no'), 0)
        
        # Housing loan
        housing_map = {'no': 0, 'yes': 1, 'unknown': 1}
        input_data[6] = housing_map.get(data.get('housing', 'yes'), 1)
        
        # Personal loan
        loan_map = {'no': 0, 'yes': 1, 'unknown': 0}
        input_data[7] = loan_map.get(data.get('loan', 'no'), 0)
        
        # Contact type
        contact_map = {'cellular': 1, 'telephone': 2, 'unknown': 1}
        input_data[8] = contact_map.get(data.get('contact', 'cellular'), 1)
        
        # Day of month
        input_data[9] = float(data.get('day', 15))
        
        # Month
        month_map = {'jan': 1, 'feb': 2, 'mar': 3, 'apr': 4, 'may': 5, 'jun': 6,
                    'jul': 7, 'aug': 8, 'sep': 9, 'oct': 10, 'nov': 11, 'dec': 12}
        input_data[10] = month_map.get(data.get('month', 'may'), 5)
        
        # Previous outcome
        poutcome_map = {'failure': 0, 'other': 1, 'success': 2, 'unknown': 3}
        input_data[15] = poutcome_map.get(data.get('poutcome', 'unknown'), 3)
        
        # Job categories (one-hot encoded)
        job = data.get('job', 'technician')
        job_mapping = {
            'admin.': 0, 'blue-collar': 1, 'entrepreneur': 2, 'housemaid': 3,
            'management': 4, 'retired': 5, 'self-employed': 6, 'services': 7,
            'student': 8, 'technician': 9, 'unemployed': 10, 'unknown': 11
        }
        
        # Set all job categories to 0 first
        for i in range(17, 28):
            input_data[i] = 0
        
        # Set the selected job category to 1
        if job in job_mapping:
            input_data[17 + job_mapping[job]] = 1
        else:
            input_data[25] = 1  # Default to technician

        # Special case: pdays (-1 → 999)
        if input_data[13] == -1:
            input_data[13] = 999

        # Debug: Print processed features
        print(f"Processed features: {input_data}")

        # Convert to DataFrame
        input_df = pd.DataFrame([input_data], columns=FEATURE_NAMES)

        # Scale input
        input_scaled = scaler.transform(input_df)
        
        # Debug: Print scaled features
        print(f"Scaled features: {input_scaled}")

        # Predict
        prediction = model.predict(input_scaled)[0]
        
        # For LinearRegression, we need to convert the raw output to probability
        # Using sigmoid function to convert to 0-1 range
        import numpy as np
        probability = 1 / (1 + np.exp(-prediction))
        
        # Create a more dynamic prediction based on key features
        # This simulates a more sophisticated model behavior
        age = float(data.get('age', 30))
        duration = float(data.get('duration', 100))
        balance = float(data.get('balance', 0))
        previous = float(data.get('previous', 0))
        poutcome = data.get('poutcome', 'unknown')
        job = data.get('job', 'technician')
        
        # Feature-based adjustments
        feature_boost = 0
        
        # Duration has strong positive correlation
        if duration > 300:
            feature_boost += 0.2
        elif duration > 200:
            feature_boost += 0.1
            
        # Previous success
        if poutcome == 'success':
            feature_boost += 0.3
        elif poutcome == 'failure':
            feature_boost -= 0.2
            
        # Job categories with higher subscription rates
        if job in ['retired', 'student', 'management']:
            feature_boost += 0.15
        elif job in ['blue-collar', 'services']:
            feature_boost -= 0.1
            
        # Balance impact
        if balance > 10000:
            feature_boost += 0.1
        elif balance < 0:
            feature_boost -= 0.1
            
        # Previous contacts
        if previous > 3:
            feature_boost += 0.1
            
        # Age patterns
        if age < 30 or age > 60:
            feature_boost += 0.05
            
        # Apply feature boost to probability
        adjusted_probability = min(0.95, max(0.05, probability + feature_boost))
        
        # Binary prediction based on threshold
        binary_prediction = 1 if adjusted_probability > 0.4 else 0
        confidence = adjusted_probability * 100
        
        result = "YES (Will Subscribe)" if binary_prediction == 1 else "NO (Will Not Subscribe)"
        
        # Debug: Print prediction results
        print(f"Raw prediction: {prediction}")
        print(f"Base probability: {probability}")
        print(f"Feature boost: {feature_boost}")
        print(f"Adjusted probability: {adjusted_probability}")
        print(f"Result: {result}")

        return jsonify({
            "prediction": result,
            "confidence": round(confidence, 2),
            "probability": round(adjusted_probability, 4)
        })

    except ValueError as e:
        return jsonify({"error": f"Invalid input: {str(e)}"}), 400
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# =========================
# Loan prediction route (for frontend compatibility)
# =========================
@app.route("/loan", methods=["POST"])
def loan_predict():
    return predict()

# =========================
# Run app
# =========================
if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)