import './App.css';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { List } from './components/List/List';
import { useState } from "react";

// const task = {
//   id: 1,
//   taskName: 'feed a cat',
//   status: 'new'
// }

function App() {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const handleSubmit = (value, e) => {
    e.preventDefault();
    setValues(prev => [...prev, { id: Date.now(), taskName: value, status: 'new' }]);
  }
  return (
    <div className='App'>
      <Header />
      <form onSubmit={(e) => {handleSubmit(value, e)}}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <button type="submit">Add</button>
        <button type="button" onClick={() => setValue('')}>Clear</button>
      </form>
      <ol>
        {values.map((item) => <li key={item.id}>{item.taskName}</li>)}
      </ol>
    </div>
  );
}

export default App;
