from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, World!'
# import time
# print("hehe")
# while True:
#     time.sleep(1)
    