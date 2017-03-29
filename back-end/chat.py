from flask import Flask
from flask_socketio import SocketIO, send

app = Flask(__name__)
app.config['SECRET_KEY'] = 'sitb2004!'
socketio = SocketIO(app)

@socketio.on('message')
def handleMessage(name, msg):
    other_name = name
    send((other_name, msg), broadcast=True)

if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0')
