import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import des icônes menu

const NavLink = ({ to, children, onClick }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link 
            to={to} 
            onClick={onClick}
            className={`text-sm font-medium tracking-widest uppercase transition-all hover:text-neon 
            ${isActive ? 'text-neon drop-shadow-[0_0_5px_rgba(0,255,136,0.5)]' : 'text-gray-300'}`}
        >
            {children}
        </Link>
    );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // État pour ouvrir/fermer le menu

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
        <nav className="fixed top-0 left-0 w-full z-50 py-5 px-6 md:px-10 flex justify-between items-center backdrop-blur-xl bg-black/60 border-b border-white/5">
          {/* LOGO */}
          <Link to="/" className="text-xl md:text-2xl font-bold tracking-tighter flex items-center gap-2 relative z-50">
            <div className="w-8 h-8 bg-neon rounded-md flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(0,255,136,0.4)]">DS_</div>
            <span>Dev<span className="text-neon">Solutions_</span></span>
          </Link>

          {/* MENU DESKTOP (Caché sur mobile) */}
          <div className="hidden md:flex gap-8 bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
            <NavLink to="/">// Accueil</NavLink>
            <NavLink to="/about">// A Propos</NavLink>
            <NavLink to="/services">// Services</NavLink>
            <NavLink to="/store">// Store</NavLink>
            <NavLink to="/contact">// Contact</NavLink>
          </div>

          {/* BOUTON ACTION DESKTOP */}
          <div className="hidden md:block">
            <Link to="/contact">
                <button className="bg-neon/10 text-neon border border-neon/50 font-bold py-2 px-6 rounded-full hover:bg-neon hover:text-black transition-all duration-300 shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                    Projet &rarr;
                </button>
            </Link>
          </div>

          {/* --- BOUTON BURGER MOBILE (Visible uniquement sur mobile) --- */}
          <button 
            onClick={toggleMenu}
            className="md:hidden text-white text-2xl z-50 focus:outline-none"
          >
            {isOpen ? <FaTimes className="text-neon" /> : <FaBars />}
          </button>
        </nav>

        {/* --- MENU MOBILE OVERLAY (S'affiche quand isOpen est true) --- */}
        <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 flex flex-col items-center justify-center gap-8 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
            <NavLink to="/" onClick={toggleMenu}>// Accueil</NavLink>
            <NavLink to="/about" onClick={toggleMenu}>// A Propos</NavLink>
            <NavLink to="/services" onClick={toggleMenu}>// Services</NavLink>
            <NavLink to="/store" onClick={toggleMenu}>// Store</NavLink>
            <NavLink to="/contact" onClick={toggleMenu}>// Contact</NavLink>

            <Link to="/contact" onClick={toggleMenu} className="mt-8">
                <button className="bg-neon text-black font-bold py-4 px-10 rounded-full shadow-[0_0_20px_rgba(0,255,136,0.5)]">
                    Lancer un Projet 🚀
                </button>
            </Link>
        </div>
    </>
  );
};

export default Navbar;