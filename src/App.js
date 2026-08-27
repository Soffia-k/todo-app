import './App.css';
import { Header } from './components/Header/Header';
// import { Input } from './components/Input/Input';
// import { List } from './components/List/List';
import { useState } from "react";

import { Button } from 'antd';

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
    if (value !== '' && value !== ' ') {
      setValues(prev => [...prev, { id: Date.now(), taskName: value, status: 'new' }]);
    }
    setValue('');
  }
  return (
    <div className='App'>
      <Header />
      <form onSubmit={(e) => { handleSubmit(value, e) }}>
        <input onChange={(e) => setValue(e.target.value)} value={value} />
        <Button type="primary" htmlType="submit">Submit</Button>
        <Button onClick={() => setValue('')}>Clear</Button>
      </form>
      <ol>
        {values.map((item) =>
          <li className="listItem" key={item.id}>{item.taskName}
            <button onClick={() => {
              values.forEach((item) => console.log(item));
              setValues(
                values.filter((value) => value.id !== item.id)
              );
            }}>Delete</button>
          </li>
        )}
      </ol>
    </div>
  );
}

export default App;
