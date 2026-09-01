import './App.css';
import { CustomList } from './components/List/List';

import { Header } from './components/Header/Header';
import { useState } from "react";
import { Button, Input } from 'antd';

function App() {
  const [value, setValue] = useState('');
  const [values, setValues] = useState([]);


  const handleSubmit = (value, e) => {
    e.preventDefault();
    if (value !== '' && value !== ' ') {
      setValues(prev => [...prev, { id: Date.now(), taskName: value, status: 'new', dateFinished: '' }]);
    }
    setValue('');
  }

  return (
    <div className='App'>

      <Header />

      <form onSubmit={(e) => { handleSubmit(value, e) }}>

        <Input className='width30' placeholder="What are you up to?" onChange={(e) => setValue(e.target.value)} value={value} />

        <Button style={{ marginLeft: '10px' }} type="primary" htmlType="submit">Submit</Button>
        <Button style={{ marginLeft: '10px' }} type="text" onClick={() => setValue('')}>Clear</Button>

      </form>

      <CustomList values={values.filter((value) => value.status === 'new')} setValues={setValues} />
      <CustomList values={values.filter((value) => value.status === 'done')} setValues={setValues} />

    </div>
  );
}

export default App;
