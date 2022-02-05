import React, { useState } from 'react';
import './ChatScreen.css'
import Avatar from '@mui/material/Avatar';

const ChatScreen = () => {
    const [input, setInput] = useState();
    const [messages, setMessages] = useState([
        {
            name: "Mark",
            image: "https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Fleo.jpg?alt=media&token=9c7970cb-43db-442c-9238-a0976280b2e7",
            message: 'Yo whats up !'
        },
        {
            name: "Mark",
            image: "https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Fleo.jpg?alt=media&token=9c7970cb-43db-442c-9238-a0976280b2e7",
            message: 'Hows it going?'
        },
        {
            message: 'Hi how are you mark ?'
        }
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput('');
    }
    return <div className='chatScreen'>
        <p className='chatScreen__timestamp'> YOU MATCHED WITH MARK ON 20/02/2022</p>
        {messages.map(message => (
            message.name ? (
                <div key={message.message} className='chatScreen__message'>
                    <Avatar className="chatScreen__image"
                        alt={message.name}
                        src={message.image} />
                    <p className='chatScreen__text'>
                        {message.message}
                    </p>
                </div>
            ) : (
                <div key={message.message} className='chatScreen__message'>
                    <p className='chatScreen__textUser'>
                        {message.message}
                    </p>
                </div>
            )
        )
        )}
        <form className='chatScreen__input'>
            <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='chatScreen__inputField'
                type="text"
                placeholder='Type a message' />
            <button
                className='chatScreen__inputButton'
                onClick={handleSend}
                type="submit">
                Send</button>
        </form>
    </div>;
};

export default ChatScreen;
