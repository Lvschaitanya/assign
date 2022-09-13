// import { useState } from 'react';
import { GlobalProvider } from './context/GlobalState';
import './App.css';
import Home from './components/Home';

function App() {
  // const [text,setText] = useState('')
  return (
    <GlobalProvider>
      <div className="App">
        {/* <input type='text' value={text} onChange={(e)=>setText(e.target.value)}/> */}
        <Home />
      </div>
    </GlobalProvider>
  );
}

export default App;
