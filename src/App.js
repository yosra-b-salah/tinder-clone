import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { Routes, Route, Link } from "react-router-dom";


function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" /> 
        <Route path="about"> 
        </Route>
      </Routes>

      {/* TinderCards */}
      <TinderCards />
      {/* SwipeButtons */}
      <SwipeButtons />

      {/* chats Screen */}
      {/* Individual chat screen */}
    </div>
  );
}

export default App;
