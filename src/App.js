import './App.css';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from './pages/Home';
import Females from './pages/Females';
import About from "./pages/About"
import Contact from './pages/Contact';
import Puppies from './pages/Puppies';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/females" element={<Females />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/puppies" element={<Puppies />} />

        </Routes>
        <Footer />
      </Router>
    <h1>hdfhjgfjk</h1>
    </div>
  );
}

export default App;
