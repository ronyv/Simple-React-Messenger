import { useEffect, useRef, useState } from 'react';
import './content.css';
import ChatCard from '../chatcard/chatcard';

function Content({contact, onAddChat, chatList = []}) {

    const [message, setMessage] = useState("");
    const chatContentRef = useRef(null);


    const scrollToBottom = () => {
        const chatContent = chatContentRef.current;
        if (chatContent) {
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    };

    const sendMessage = () => {
        onAddChat(contact, message);
        setMessage("");
        setTimeout(() => {
            scrollToBottom();
        }, 100);
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && message?.trim().length > 0) {
            sendMessage();
          }
    }

    useEffect(() => {
        console.log('Content : useEffect...')
        setMessage("");
        scrollToBottom();
    }, [contact.id])

    
  return (
    <div className="content">
    <div className="chatHeader">
        <h2>{contact.name}</h2>
    </div>
    <div ref={chatContentRef} className="messageListContainer">
        {
            chatList.map(chat => <ChatCard key={chat.timestamp} data={chat} />)
        }
    </div>
    <div className="inputContainer">
        <input 
            type='text' 
            placeholder='type here...' 
            value={message} 
            onChange={event => setMessage(event.currentTarget.value)} 
            onKeyDown={handleKeyPress}
        />
        <button 
            disabled={message?.trim().length === 0}
            onClick={() => sendMessage()}>
        Send
        </button>
    </div>
    </div>
  );
}

export default Content;
