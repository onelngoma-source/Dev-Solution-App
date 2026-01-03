import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaGithub, FaTiktok, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black/40 border-t border-white/5 pt-16 pb-8 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          
          {/* COLONNE 1 : LOGO & INFOS */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                <div className="w-8 h-8 bg-neon rounded-md flex items-center justify-center text-black font-black text-xs shadow-[0_0_15px_rgba(0,255,136,0.4)]">DS_</div>
                <span>Dev<span className="text-neon">Solutions_</span></span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed">
              Architectes de votre transformation digitale. Nous codons le futur de votre entreprise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all"><FaFacebookF /></a>
              <a href="https://github.com/firstged" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all"><FaGithub /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-neon hover:text-black transition-all"><FaTiktok /></a>
            </div>
          </div>

          {/* COLONNE 2 : NAVIGATION */}
          <div>
            <h4 className="text-neon font-mono text-xs font-bold uppercase tracking-widest mb-6">// NAVIGATION</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li><Link to="/" className="hover:text-neon transition-colors">&gt; ACCUEIL</Link></li>
              <li><Link to="/about" className="hover:text-neon transition-colors">&gt; A_PROPOS</Link></li>
              <li><Link to="/services" className="hover:text-neon transition-colors">&gt; SERVICES</Link></li>
              <li><Link to="/store" className="hover:text-neon transition-colors">&gt; STORE</Link></li>
              <li><Link to="/contact" className="hover:text-neon transition-colors">&gt; CONTACT</Link></li>
            </ul>
          </div>

          {/* COLONNE 3 : EXPERTISES */}
          <div>
            <h4 className="text-neon font-mono text-xs font-bold uppercase tracking-widest mb-6">// EXPERTISES</h4>
            <ul className="space-y-3 text-sm text-gray-400 font-mono">
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon rounded-full"></span> MAINTENANCE_HW</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon rounded-full"></span> IA_SOLUTIONS</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon rounded-full"></span> APP_DEV</li>
              <li className="flex items-center gap-2"><span className="w-1 h-1 bg-neon rounded-full"></span> CYBER_SEC</li>
            </ul>
          </div>

          {/* COLONNE 4 : SIGNAL_INPUT */}
          <div>
            <h4 className="text-neon font-mono text-xs font-bold uppercase tracking-widest mb-6">// SIGNAL_INPUT</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="mt-1 text-neon" />
                <span>Libreville, Gabon</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer">
                <FaPhone className="text-neon" />
                <span>+241 74 81 51 93</span>
              </li>
              <li className="flex items-center gap-3 hover:text-white transition-colors cursor-pointer break-all">
                <FaEnvelope className="text-neon" />
                <span>devssolutions.tech@gmail.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* COPYRIGHT SIGNÉ ONELMELVY */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 font-mono">
          <p>© 2026 DEVS-SOLUTIONS. SYSTEM_ALL_RIGHTS_RESERVED.</p>
          <p>Design & Code by <span className="text-neon font-bold">OnelMelvy</span> de Devs-Solutions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;