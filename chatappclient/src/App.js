import logo from './logo.svg';
import './App.css';
import { useState, useEffect, useRef } from 'react'
import { IoIosSend } from "react-icons/io";
function App() {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);
  useEffect(() => {
    const ws = new WebSocket("https://anonymouschatapp-1.onrender.com");
    setSocket(ws);
    ws.onmessage = (event) => {
      const newMessage = event.data;
      setMessages((prevMessages) => [...prevMessages, 
        { text: newMessage, sender: 'server' }]);
      console.log(messages);
    };
    return () => ws.close();
  }, [])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  function sendMessage() {
    if (socket && input) {
      console.log(socket.readyState);
      socket.send(input);
      setMessages((prevMessages)=>[...prevMessages,{text:input,
        sender:"sent"
      }])
      setInput('');
    }
  }
  return (
    <div className='app'>
      <div
        className='messages-container'
      >
        {messages.map((message, index) => (
          <p 
          className={message.sender === 'sent' ? 'sent' : 'received'} 
          key={index}>{message.text}</p>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className='textBar'>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                sendMessage();
              }
            }}
        />
        <button onClick={() => { sendMessage() }}><IoIosSend /></button>
      </div>

    </div>
  );
}

export default App;