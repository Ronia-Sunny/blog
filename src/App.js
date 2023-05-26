import logo from './logo.svg';
import './App.css';
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Add from './components/Add';
import Home from './components/Home';



function App() {
  return (
    <div className="App">
      <Navbar/><br/><br/>
      <Routes>
        <Route path='/Home' element={<Home/>}/>
        <Route path='/Add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
