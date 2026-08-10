import './App.css';
import { Header } from './components/Header/Header';
import { Input } from './components/Input/Input';
import { List } from './components/List/List';
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);
  const handleSubmit = (value) => {setValues([...values, value])}
  return (
    <div className='App'>
      <Header/>
      <Input onChangeValue={setValue} onSubmit={() => handleSubmit(value)} value={value}/>
      <List list={values}/>
    </div>
  );
}

export default App;
