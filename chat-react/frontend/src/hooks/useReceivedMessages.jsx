import { useEffect, useState } from "react";
import axios from 'axios';

function useReceivedMessages(){
    const [receivedMessages, setReceivedMessages] = useState([]);

    useEffect(() =>{
        axios.post('http://localhost:5000/api/receive-message')
            .then((response) => {
                setReceivedMessages(response.data);
            })
            .catch((error) => {
                console.error('Error al obtener los mensajes recibidos', error);
            })
    });

    return receivedMessages;
}

export default useReceivedMessages;