import React, { useState, useEffect } from 'react';
import { set } from 'react-hook-form';
import '../css/Chatcss.css';
import MessageModal from './ModalPerson';
import ryanImage from '../images/ryan.jpg';
import rafaelLeão from '../images/rafaelL.jpg';
import julieImage from '../images/julie.jpg';
import Rochinha from '../images/rochinha.jpg';
import Ronaldo from '../images/Ronaldo.jpg';

function ChatPage() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    [
      { sender: 'IHC', text: "Group have been created" },
      { sender: 'Alberto', text: 'Como está a correr o projeto?' },
      { sender: 'João Dias', text: 'Para já bem. Feito por hoje, amanhã há mais ', profile: '/JoãoDias', photo: ryanImage },
      { sender: 'Alberto', text: 'Ok, ainda bem.' },
    ],
    [
      { sender: 'CD', text: "Group have been created" },
      { sender: 'Luís', text: 'Vamos chumbar assim' },
      { sender: 'João Dias', text: 'Tá mais que visto', profile: '/JoãoDias', photo: ryanImage },
      { sender: 'Zé', text: 'Nada está perdido, ainda há esperança.' },
    ],
    [
      { sender: 'Futebolada', text: "Group have been created" },
      { sender: 'Rochinha', text: '17:30 no campo para jogar malta.', photo: Rochinha },
      { sender: 'João Dias', text: 'Ok, lá estarei.', profile: '/JoãoDias', photo: ryanImage },
      { sender: 'Ronaldo', text: 'Vou chegar atrasado, não me esperem.', photo: Ronaldo },
      { sender: 'Rafael Leão', text: 'Ok, sem problema.', profile: '/RafaelLeão', photo: rafaelLeão },

    ],
    [
      { sender: 'Festa de Aniversário', text: "Group have been created" },
      { sender: 'Eduardo', text: 'Vai haver festa de aniversário no dia 15 de Junho.' },
      { sender: 'João Dias', text: 'Só vou se houver bolo eheh', profile: '/JoãoDias', photo: ryanImage },
      { sender: 'Eduardo', text: 'Claro que vai haver bolo, não te preocupes.' },
      { sender: 'Marta', text: 'Ok, lá estarei.', photo: julieImage },
      { sender: 'Eduardo', text: 'Vai ser no meu quintal, por isso não se preocupem com o espaço.' },
    ],

    [
      { sender: 'Ronaldo', text: 'Olá, tudo bem?', photo: Ronaldo },
      { sender: 'João Dias', text: 'Olá, tudo e contigo?', profile: '/JoãoDias', photo: ryanImage },
      { sender: 'Ronaldo', text: 'Vou te adicionar á futebolada', photo: Ronaldo},
      { sender: 'João Dias', text: 'ok chefe', profile: '/JoãoDias', photo: ryanImage },
    ],
  ]);
  const [selectedChat, setSelectedChat] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setSelectedChat(0); // Set the first chat as selected when entering the page
  }, []);

  const handleMessageChange = (event) => {
    setMessage(event.target.value);

  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      const newMessage = {
        sender: 'João Dias',
        profile: '/JoãoDias',
        photo: ryanImage,
        text: message.trim(),
      };
      const updatedMessages = [...messages];
      updatedMessages[selectedChat] = [...updatedMessages[selectedChat], newMessage];
      setMessages(updatedMessages);
      setMessage('');
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); // Prevents adding a new line in the input field
      handleSendMessage();
    }
  }

  const handleChatSelect = (index) => {
    setSelectedChat(index);
  };

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredMessages = messages[selectedChat].filter(
    (msg) =>
      msg.sender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      msg.text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSender, setSelectedSender] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const handleSenderHover = (sender, photo, profile, event) => {
    if (sender !== 'IHC' && sender !== 'CD' && sender !== 'Futebolada' && sender !== 'Festa de Aniversário') {
      setSelectedSender(sender);
      setSelectedProfile(profile);
      setSelectedPhoto(photo);

      setIsModalOpen(true);


      const rect = event.currentTarget.getBoundingClientRect();
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
      const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft;

      const top = rect.top + scrollTop - 100;
      const left = rect.left + scrollLeft + 175;



      setModalPosition({ top, left });
    }


  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSender(null);
  };



  const handleViewProfile = () => {
    if (selectedProfile) {
      // Redirect to the profile URL
      window.location.href = selectedProfile;
    } else {
      console.log('No profile URL available for:', selectedSender);
    }
  };


  const [showModal, setShowModal] = useState(false);

    // Function to handle the register button click
    const handleRegisterClickModle = () => {
        setShowModal(true);

        setTimeout(() => {
            setShowModal(false);
            window.location.href = "/calendar_groups"; // Replace with your target page URL
        }, 1500);
    };




  return (
    <>

      <div id="pagechat">
        <a href="/home">
          <button type="button" id="gobackbutton2" class="btn btn-outline-secondary backbut">Go back {'<'}-</button>
        </a>
        <div className="chat-container">
          <div className="chat-selector">
            <input
              type="text"
              placeholder="Search chats..."
              value={searchTerm}
              onChange={handleSearchTermChange}
              style={{ width: '70%', height: '3rem', marginBottom: '3rem' }}
            /><p id="headerdots2">...</p>
            <ul>
              {messages.map((chat, index) => (
                <li
                  key={index}
                  onClick={() => handleChatSelect(index)}
                  className={selectedChat === index ? 'selected' : ''}
                >
                  <span id="textlichat" >{chat[0].sender}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="chat-content" onClick={handleCloseModal}>
            {filteredMessages.length > 0 ? (
              <>
                <div className="chat-header">
                  <h2 id="textheaderchat">{messages[selectedChat][0].sender}</h2>
                  <p id="headerdots">...</p>
                </div>
                <div className="chat-messages">
                  {filteredMessages.map((msg, index) => (
                    <div className="message" key={index}>
                      <div className={`message-sender ${msg.sender === 'You' ? 'self' : ''}`} style={{ textAlign: 'right' }}
                        onMouseEnter={(e) => handleSenderHover(msg.sender, msg.photo, msg.profile, e)}
                        onClick={(e) => handleSenderHover(msg.sender, msg.photo, msg.profile, e)}>
                        {msg.sender}
                      </div>
                      <div className="message-text">{msg.text}</div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="no-chat-selected">No chat selected</div>
            )}
            <div className="chat-footer">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={handleMessageChange}
                onKeyDown={handleKeyDown}
                id="inputchat"
              />
                <button id="buttonchat" onClick={handleRegisterClickModle}>Calendar</button>

              <button onClick={handleSendMessage} id="buttonchat2">Send</button>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <MessageModal isOpen={isModalOpen} onClose={handleCloseModal} sender={selectedSender} position={modalPosition} handleViewProfile={handleViewProfile} photo={selectedPhoto} />
      )}

      {/* Modal */}
      {showModal && (
        <div id="modal1">
          <div id="modal-content">
            <h2>Syncronizing Calendars...</h2>
          </div>
        </div>
      )}
    </>

  );
}

export default ChatPage;