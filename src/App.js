import './App.css';
import Integer from './components/Integer';
import Button from './components/Button'

function App() {
  return (
    <div className="container">
      <header>
        Great Day
      </header>
      {/* alternative to closing <>*/} 
      <Integer text='50'/> 
      <Button color='green'
      text='I had a great day :)'
       /> {/* onClick={function name} */}
    </div>
  );
}

export default App;
