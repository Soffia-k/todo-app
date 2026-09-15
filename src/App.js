import './App.css';
import { CustomList } from './components/CustomList/CustomList';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';
// import { useState } from "react";
import { useValue } from './stores/valuesStore';

function App() {
  const { values, setValues } = useValue();
  // const [value, setValue] = useState('');
  // const [values, setValues] = useState([]);
  console.log(useValue.getState());

  return (
    <div className='App'>

      <Header />
      <Form />
      <CustomList values={values} setValues={setValues}/>

    </div>
  );
}

export default App;
