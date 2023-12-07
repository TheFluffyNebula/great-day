import './App.css';
import Integer from './components/Integer';
import Button from './components/Button'
import { useState, useEffect } from 'react';

// when updating to database, increment() becomes async w/ await from db data
function App() {
  const [integers, setIntegers] = useState([])

  // handles "side-effects"
  useEffect(() => {
    const getIntegers = async () => {
      const integersFromServer = await fetchIntegers()
      setIntegers(integersFromServer)
    }
    getIntegers()
  }, []) // dependency array

  // Just copying the tutorial code at this point ;-;
  const fetchIntegers = async () => {
    const res = await fetch('http://localhost:5000/integers')
    const data = await res.json()
    return data
  }

  const fetchInteger = async(id) => {
    const res = await fetch(`http://localhost:5000/integers/${id}`)
    const data = await res.json()
    return data
  }

  const updateInteger = async (id) => {
    // console.log("btn clicked")
    const integerToUpdate = await fetchInteger(id)
    const updInteger = { ...integerToUpdate, 
      value: integerToUpdate.value + 1 }

    const res = await fetch(`http://localhost:5000/integers${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updInteger)
    })

    const data = await res.json()

    setIntegers(
      integers.map((Integer) => 
      Integer.id === id ? { ...Integer, 
        value: data.value } : Integer
      )
    )
  }
  return (
    <div className="container">
      <header className='center heading'>
        Great Day
      </header>
      {/* alternative to closing <>*/} 
      {integers.map((integer) => (
      <Integer key={integer.id} value={integer.value} />
      ))}
      <Button color='green'
      text='I had a great day :)'
      onClick={updateInteger}
       />
    </div>
  );
}

export default App;
