import './App.css';
import Button from './components/Button'
import { useState, useEffect } from 'react';

// when updating to database, increment() becomes async w/ await from db data
function App() {
  const [integer, setInteger] = useState(0) // init to 0

  // handles "side-effects"
  // useEffect(() => {
  //   const getIntegers = async () => {
  //     // fetch from db
  //     const integerFromServer = await fetchInteger()
  //     setInteger(integerFromServer)
  //   }
  //   getIntegers()
  // }, [integer]) // dependency array

  const fetchInteger = async () => {

    // const res = await fetch('http://localhost:5000/integers')
    // const data = await res.json()
    // console.log(data)
    return 10
  }

  return (
    <div className="container">

      <header className='center heading'>
        Great Day
      </header>

      <div className='center integer'>
        {integer}
      </div>

      <Button color='green'
      text='I had a great day :)'
      onClick={fetchInteger}

       />
    </div>
  );
}

export default App;
