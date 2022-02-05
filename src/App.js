import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import ChatScreen from './ChatScreen'

function Chat() {
  return (
    <>
      <main>
        <Header backButton="/"/>
        <Chats></Chats>
      </main>
    </>
  );
}
function ChatConversation() {
  return (
    <>
      <main>
        <Header backButton="/chats"/>
        <ChatScreen></ChatScreen>
      </main>
    </>
  );
}
function Home() {
  return (
    <>
      <main>
        <Header/>
        <TinderCards />
        <SwipeButtons />
      </main>
    </>
  );
}
function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/chats" element={<Chat />}/> 
        <Route path="/chat/:person" element={<ChatConversation />}> 

        </Route>
      </Routes>

      

      {/* chats Screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
