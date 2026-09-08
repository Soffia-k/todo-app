import './App.css';
import { CustomList } from './components/CustomList/CustomList';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
import { useState } from "react";

function App() {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);

  return (
    <div className='App'>

      <Header />
      <Form value={value} setValue={setValue} setValues={setValues}/>
      <CustomList values={values} setValues={setValues}/>

    </div>
  );
}

export default App;
