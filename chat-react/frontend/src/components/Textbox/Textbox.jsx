import React, { useState } from 'react';
import axios from 'axios';
import './Textbox.css';
import { flecha } from '../../assets';

function ChatInput( {onSendMessage} ) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (message.trim() !== '') {
        try {
          await axios.post('http://localhost:5000/api/send-message',{message});
          onSendMessage(message);
          setMessage('');
        } catch (error) {
          console.error('Error al enviar el mensaje', error)
        }
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-input-container">
      <input
        className='chat-textbox'
        type="text"
        placeholder="Escribe tu mensaje..."
        value={message}
        onChange={handleMessageChange}
      />
      <button className="enter-button" onClick={handleSendMessage}>
        <img src={flecha} alt=" "/>
      </button>
    </div>
  );
}

export default ChatInput;
