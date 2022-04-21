import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' />
        <Route path='/products' />
        <Route path='/contact' />
        <Route path='/about' />
      </Routes>
    </>
  );
}

export default App;
