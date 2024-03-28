import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from flask import Flask, jsonify, request
import matplotlib.pyplot as plt

app = Flask(__name__)


data = pd.read_csv('Sample.csv')
X = data['Matches_Won'].values.reshape(-1, 1)
y = data['Runs_Scored']

model = LinearRegression()
model.fit(X, y)

print('in ML code')

@app.route('/get-value', methods=['POST'])
def predict_runs():
    try:
        matches_won = int(request.json['matches_won'])

        #print(matches_won)
        
        predicted_runs = model.predict(np.array([[matches_won]]))

        
        return jsonify({'predicted_runs': int(predicted_runs[0])})

    except Exception as e:
        
        return jsonify({'error': str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)


# plt.scatter(X, y, color='black', label= 'Actual Data')
# plt.plot(X, model.predict(X), color='red', label='linear regressions', marker='+')
# plt.xlabel('Matches')
# plt.ylabel('Runs')
# plt.title("Prediction of Virat kohli's runs per matches")
# plt.legend()
# plt.show()

