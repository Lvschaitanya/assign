// import { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Home from './components/Home';
import { Router, Routes, Route } from 'react-router-dom';
import DetailedAnime from './components/DetailedAnime';


function App() {
  // const [text,setText] = useState('')
  return (

        <div className='App'>
          <Home />
        </div>

      





  );
}

export default App;
