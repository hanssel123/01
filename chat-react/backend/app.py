# from flask import Flask, request, jsonify
# from flask_cors import CORS

# app = Flask(__name__)
# CORS(app)
# # Lista para almacenar mensajes
# messages = []
# received_messages = []

# # Ruta para enviar mensajes
# @app.route('/api/send-message', methods=['POST'])
# def send_message():
#     data = request.get_json()
#     message = data.get('message', '')
#     if message:
#         messages.append(message)
#         return jsonify({'message': 'Mensaje enviado exitosamente'}), 201
#     else:
#         return jsonify({'error': 'El mensaje no puede estar vacío'}), 400

# @app.route('/api/receive-message', methods=['POST'])
# def receive_message():
#     data = request.get_json()
#     message = data.get('message', '')
#     if message:
#         # Agrega el mensaje al arreglo de mensajes recibidos
#         received_messages.append({'text': message, 'type': 'received'})
#         return jsonify({'message': 'Mensaje recibo recibido exitosamente'}), 201
#     else:
#         return jsonify({'error': 'El mensaje no puede estar vacío'}), 400

# @app.route('/api/get-received-messages', methods=['GET'])
# def get_received_messages():
#     return jsonify(received_messages)

# # Ruta para obtener mensajes
# @app.route('/api/get-messages', methods=['GET'])
# def get_messages():
#     return jsonify(messages)

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Lista para almacenar todos los mensajes (enviados y recibidos)
all_messages = []

# Ruta para enviar mensajes (incluyendo los enviados y recibos)
@app.route('/api/send-message', methods=['POST'])
def send_message():
    data = request.get_json()
    message = data.get('message', '')
    if message:
        # Agrega el mensaje al arreglo de todos los mensajes
        all_messages.append({'text': message, 'type': 'sent'})
        return jsonify({'message': 'Mensaje enviado exitosamente'}), 201
    else:
        return jsonify({'error': 'El mensaje no puede estar vacío'}), 400

@app.route('/api/receive-message', methods=['POST'])
def receive_message():
    data = request.get_json()
    message = data.get('message', '')
    if message:
        # Agrega el mensaje al arreglo de todos los mensajes
        all_messages.append({'text': message, 'type': 'received'})
        return jsonify({'message': 'Mensaje recibo recibido exitosamente'}), 201
    else:
        return jsonify({'error': 'El mensaje no puede estar vacío'}), 400

@app.route('/api/get-all-messages', methods=['GET'])
def get_all_messages():
    # Ordena los mensajes por orden cronológico utilizando la marca de tiempo
    sorted_messages = sorted(all_messages, key=lambda x: x.get('timestamp', 0))
    return jsonify(sorted_messages)

if __name__ == '__main__':
    app.run(debug=True)

