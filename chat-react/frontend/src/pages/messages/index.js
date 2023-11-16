// import React, { useState, useEffect } from 'react';
// import {Profile, Searchbar, Messages, Textbox, Header} from '../../components';
// import {ellipse_dark} from '../../assets';
// import useReceivedMessages from '../../hooks/useReceivedMessages';
// import axios from 'axios';

// import './messagepage.css';

// function MessagePage() {
//   const [sentMessages, setSentMessages] = useState([]);
//   // const receivedMessages = useReceivedMessages();
//   const [receivedMessages, setReceivedMessages] = useState([]);
//   const [allMessages, setAllMessages] = useState([]);

//   const handleSendMessage = (message) => {
//     setSentMessages([...sentMessages, { text: message, type: 'sent' }]);
//   };


//   useEffect(() => {
//     // Realiza una solicitud al servidor para obtener los mensajes recibidos
//     axios.get('http://localhost:5000/api/get-received-messages')
//       .then((response) => {
//         setReceivedMessages(response.data);
//       })
//       .catch((error) => {
//         console.error('Error al obtener los mensajes recibidos', error);
//       });
//   });

//   return (
//     <div className='message-page'>
//       <div className='side-bar'>
//       <Profile user={{ name: 'Ricardo', status: 'conectado', avatar: ellipse_dark }} />
//       <Searchbar />
//       <Profile user={{ name: 'Luz', status: 'chaitos...', avatar: ellipse_dark }} />
//       <Profile user={{ name: 'Pipe', status: 'Bueno debo irme', avatar: ellipse_dark }} />
//       <Profile user={{ name: 'Cristian', status: 'Entendido, nos vemos', avatar: ellipse_dark }} />
//       <Profile user={{ name: 'Juan', status: '¿Seguro?', avatar: ellipse_dark }} />
//       <Profile user={{ name: 'Erika', status: 'No te creo', avatar: ellipse_dark }} />
//       <Profile user={{ name: 'Daniel', status: 'Y entonces vamos', avatar: ellipse_dark }} />
//       </div>
//       <div className='chat-container'>
//         <Header user={{ name: 'Luz', status: 'chaitos...', avatar: ellipse_dark }}/>
//         <Messages messages={[...sentMessages, ...receivedMessages]}/>
//         <Textbox onSendMessage={handleSendMessage}/>
//       </div>
//     </div>
//   );
// }

// export default MessagePage;

import React, { useState, useEffect } from 'react';
import { Profile, Searchbar, Messages, Textbox, Header, ProfileCard } from '../../components';
import { ellipse_dark } from '../../assets';
import axios from 'axios';

import './messagepage.css';

function MessagePage() {
  const [allMessages, setAllMessages] = useState([]);
  const [showSidePanel, setShowSidepanel] = useState(false);

  // const handleSendMessage = (message) => {
  //   // Código para enviar el mensaje al servidor
  //   axios.post('http://localhost:5000/api/send-message', { message })
  //     .then((response) => {
  //       // Actualiza los mensajes después de enviar el mensaje
  //       setAllMessages([...allMessages, { text: message, type: 'sent' }]);
  //     })
  //     .catch((error) => {
  //       console.error('Error al enviar el mensaje', error);
  //     });
  // };

  const handleSendMessage = (message) => {
    setAllMessages([...allMessages, { text: message, type: 'sent' }]);
    };

  const handledAvatarClick = () => {
    setShowSidepanel(!showSidePanel);
  }

  useEffect(() => {
    // Realiza una solicitud al servidor para obtener todos los mensajes
    axios.get('http://localhost:5000/api/get-all-messages')
      .then((response) => {
        setAllMessages(response.data);
      })
      .catch((error) => {
        console.error('Error al obtener los mensajes', error);
      });
  }, [allMessages]);  // Realiza la solicitud solo una vez al cargar la página

  return (
    <div className='message-page'>
      <div className='side-side-bar' style={{display: showSidePanel ? 'flex' : 'none'}}>
      <ProfileCard user={{ name: '', status: '', avatar: ellipse_dark, handledClick: handledAvatarClick}} />
      </div>
      <div className='side-bar'>
        <Profile user={{ name: 'Ricardo', status: 'conectado', avatar: ellipse_dark, handledClick: handledAvatarClick}} />
        <Searchbar />
        <Profile user={{ name: 'Erika', status: 'conectado', avatar: ellipse_dark, handledClick: handledAvatarClick}} />
        <Profile user={{ name: 'Marcela', status: '¿Cómo vas?', avatar: ellipse_dark, handledClick: handledAvatarClick}} />
        <Profile user={{ name: 'Daniel', status: '¿Señor?', avatar: ellipse_dark, handledClick: handledAvatarClick}} />
      </div>
      <div className={`chat-container ${showSidePanel ? 'reduced' : ''}`}>
        <Header user={{ name: 'Luz', status: 'chaitos...', avatar: ellipse_dark }} />
        <Messages messages={allMessages} />
        <Textbox onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
}

export default MessagePage;



