import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Spline from '@splinetool/react-spline'; 
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Store from './pages/Store';
import Contact from './pages/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      {/* --- FOND 3D ANIMÉ --- */}
      {/* J'ai ajouté "animate-[spin_60s_linear_infinite]" pour que tout le fond tourne doucement */}
      <div className="fixed inset-[-50%] z-0 pointer-events-none opacity-60 animate-[spin_60s_linear_infinite]">
         <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
      </div>
      
      {/* Calque sombre fixe par dessus pour garder le texte lisible */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-black/70"></div>

      {/* --- LE SITE --- */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/store" element={<Store />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;