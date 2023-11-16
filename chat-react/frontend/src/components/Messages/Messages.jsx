import React from 'react';
import './Messages.css'

function ChatMessages({messages}) {
  return (
    <div className='chat-messages'>
        {messages.map((message, index) => (
          <div key={index} className={`bubble ${message.type === 'sent' ? 'sent' : 'received'}`}>
            <div className="message">
              {message.text}
            </div>
          </div>
        ))}
      
    </div>
  );
}
export default ChatMessages;

// import React from 'react';
// import './Messages.css';

// function ChatMessages({ messages }) {
//   return (
//     <div className='chat-messages'>
//       {messages.map((message, index) => (
//         <ChatBubble key={index} message={message} />
//       ))}
//     </div>
//   );
// }

// function ChatBubble({ message }) {
//   const bubbleClasses = message.type === 'sent' ? 'bubble sent' : 'bubble received';

//   // Establecer el estilo para cambiar la altura de la burbuja según el contenido
//   const bubbleStyle = {
//     maxHeight: '120px', // Altura máxima deseada
//   };

//   return (
//     <div className={bubbleClasses} style={bubbleStyle}>
//       <div className="message">
//         {message.text}
//       </div>
//     </div>
//   );
// }

// export default ChatMessages;