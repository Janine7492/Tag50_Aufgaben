import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import './App.css';
import Details from "./pages/Details";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Super Carlist</h1>
          <nav>
            <Link to="/home">Home</Link>
          </nav>
        </header>

        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/details/:car' element={<Details />}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
