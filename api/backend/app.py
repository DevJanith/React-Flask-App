from random import randrange

import flask as flask
from flask import jsonify

app = flask.Flask(__name__) 

@app.route('/api/chart_data')
def getChartData():
    array = list(map(lambda x: {'x': x, 'y': randrange(20)}, range(10)))
    return jsonify(array)