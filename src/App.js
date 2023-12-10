import './App.css';
import ChangeName from './components/ChangeName';
import Increament from './components/Increament';
import UseEffect from './components/UseEffect';

function App() {
  return (
    <div className="App">
      <h1 className='m-5'>Hello world</h1>
      <Increament />
      <ChangeName />
      <UseEffect />
    </div>
  );
}

export default App;
