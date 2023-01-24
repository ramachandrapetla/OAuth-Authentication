import './App.css';
import axios from 'axios'
import {useState} from 'react'

function App() {
  const [value, setValue] = useState('')
  
  const handleClick = async () => {
    const d = await axios.get('http://localhost:5001/');
    setValue(d.data)
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={handleClick}>Click Me</button>
        <h1>{value}</h1>
      </header>
    </div>
  );
}

export default App;
