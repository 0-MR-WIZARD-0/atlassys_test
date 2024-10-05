import './App.scss';
import Header from './components/Header';
import Aside from './components/Aside';
import Form from './components/Form';

function App() {
  return (
    <div className='app'>
      <Header/>
      <Aside/>
      <Form/>
    </div>
  );
}

export default App;
