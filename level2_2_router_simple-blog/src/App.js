import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/blog' element={<Blog />}></Route>

          <Route path='/details/:id' element={<Details />}></Route>

        </Routes>
      </Router>


    </div>
  );
}

export default App;
