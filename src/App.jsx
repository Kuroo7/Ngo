import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import AboutUs from './pages/AboutUs';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MissionnNvission from './pages/MissionnNvission';

function App() {
  return (
    <div className="app-container flex flex-col min-h-screen">
      <BrowserRouter>
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/missionandvision" element={<MissionnNvission/>} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
