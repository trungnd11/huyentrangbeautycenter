import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Router>
      <NavBar />
      {/* <Route path='/' />
      <Route path='/products' />
      <Route path='/contact' />
      <Route path='/about' /> */}
    </Router>
  );
}

export default App;
