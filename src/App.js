import './App.css';
import { CustomList } from './components/CustomList/CustomList';
import { CustomForm } from './components/CustomForm/CustomForm';
import { Header } from './components/Header/Header';

function App() {

  return (
    <div className='App'>

      <Header />
      <CustomForm />
      <CustomList />

    </div>
  );
}

export default App;
