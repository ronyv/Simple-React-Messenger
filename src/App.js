import { useState } from 'react';
import './App.css';
import Content from './components/content/content';
import Sidebar from './components/sidebar/sidebar';
import { CONTACTS, LOGGEDIN_CONTACT } from './constants';

function App() {

  const [selectedContact, setSelectedContact] = useState(CONTACTS[0])
  const [chatData, setChatData] = useState({})

  const changeContact = (newContact) => {
    console.log('changeContact: ', newContact)
    setSelectedContact(newContact)
  }

  const addChat = (contact, message) => {
    let chatDataCopy = {...chatData}
    console.log('chatDataCopy:start ', chatDataCopy)
    let updatedMsgList = chatDataCopy?.[contact.id] ?? []
    updatedMsgList.push({
      from: LOGGEDIN_CONTACT.id,
      message: message,
      timestamp: new Date()
    })
    chatDataCopy = {
      ...chatDataCopy,
      [contact.id]: updatedMsgList
    }

    console.log('chatDataCopy:end ', chatDataCopy)

    setChatData(chatDataCopy)
  }

  return (
    <div className="container">
      <Sidebar 
        contact={selectedContact} 
        onContactChange={newContact => changeContact(newContact)}
      />
      <Content 
        contact={selectedContact} 
        chatList={chatData[selectedContact.id]} 
        onAddChat={(contact, message) => addChat(contact, message)}
      />
    </div>
  );
}

export default App;
