import React from 'react';
import Chat from './Chat';
import "./Chats.css"
const Chats = () => {
  return <div className='chats'>
      <Chat
        name="Mark"
        message="Yo whats up !"
        timestamp="40 seconds ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Fleo.jpg?alt=media&token=9c7970cb-43db-442c-9238-a0976280b2e7"
      />
      <Chat
        name="Sandra"
        message="Hi, How are you ?"
        timestamp="1 minute ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Fsandrabulk.jpg?alt=media&token=b79f7861-22e3-4a69-9081-d4bb5a068ee9"
      />
      <Chat
        name="Tom"
        message="Hi"
        timestamp="30 minutes ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Ftomhardy.jpeg?alt=media&token=1b7e17cf-6472-4635-9b29-e96a688273b4"
      />
      <Chat
        name="Sarah"
        message="What's new?"
        timestamp="40 minutes ago"
        profilePic="https://firebasestorage.googleapis.com/v0/b/tinder-clone-45651.appspot.com/o/chats%2Fellen.jpeg?alt=media&token=7b48902d-036f-43c9-8545-91fd80af0c3e"
      />
  </div>;
};

export default Chats;
