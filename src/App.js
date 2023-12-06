import './App.css';
import Integer from './components/Integer';
import Button from './components/Button'
import { useState } from 'react';

// when updating to database, increment() becomes async w/ await from db data
function App() {
  const [value, setValue] = useState(0)
  const increment = () => {
    console.log("hi")
    setValue(value + 1)
  }
  return (
    <div className="container">
      <header className='center heading'>
        Great Day
      </header>
      {/* alternative to closing <>*/} 
      <Integer value={value}/> 
      <Button color='green'
      text='I had a great day :)'
      onClick={increment}
       />
    </div>
  );
}

export default App;
