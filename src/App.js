import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from "./pages/About";
import Experience from "./pages/Experience";
import Blog from "./pages/Blog";


function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<About />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/blog" element={<Blog />} />
            </Routes>
        </Router>
    );
}

export default App