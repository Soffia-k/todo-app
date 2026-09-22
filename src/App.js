import './App.css';
import { CustomList } from './components/CustomList/CustomList';
import { Form } from './components/Form/Form';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className='App'>

      <Header />
      <Form />
      <CustomList />

    </div>
  );
}

export default App;
