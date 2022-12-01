import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from './components/navigation/Navigation';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import Opening from './pages/Opening';
import Galery from './pages/Galery';


function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/menu' element={<Menu />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/opening' element={<Opening />} />
          <Route path='/galery' element={<Galery />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
