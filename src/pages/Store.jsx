import React from 'react';
import { GlassCard } from '../components/UI';
import { FaAndroid, FaShieldAlt, FaBolt, FaBell, FaQrcode, FaDownload, FaCheckCircle, FaStar } from 'react-icons/fa';

const Store = () => {
  // Définition des écrans avec de meilleures images de mockups
  const screens = [
    // Home Feed : Interface e-commerce claire
    { title: "HOME_FEED", img: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?auto=format&fit=crop&w=500&q=80" },
    // Chat : Interface de messagerie
    { title: "SECURE_CHAT", img: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&w=500&q=80" },
    // Profil : Interface utilisateur
    { title: "USER_PROFILE", img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80" },
    // Add Product : Interface de formulaire/vente
    { title: "ADD_PRODUCT", img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=500&q=80" }
  ];

  return (
    <div className="w-full bg-transparent overflow-hidden relative pt-32 pb-20">
        
        {/* --- FIX LUMIÈRE : STANDARDISE SUR LE NEON INTENSE --- */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

        {/* --- 1. HERO SECTION --- */}
        <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* GAUCHE : TEXTE */}
                <div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 border border-neon/30 rounded-full bg-neon/10 text-neon text-[10px] font-bold uppercase tracking-widest shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                        <span className="w-2 h-2 rounded-full bg-neon animate-pulse"></span> DISPONIBLE V1.0.0
                    </div>
                    
                    <h1 className="text-6xl font-black mb-4 text-white">
                        Ve.<span className="text-neon drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">Line</span>
                    </h1>
                    <p className="text-gray-400 mb-8 text-sm leading-relaxed max-w-md border-l-2 border-neon pl-4">
                        La première marketplace 100% gabonaise qui connecte acheteurs et vendeurs en temps réel. Sécurisée, rapide et intuitive.
                    </p>
                    
                    <div className="flex gap-4 mb-10">
                        <button className="flex items-center gap-3 bg-neon text-black font-bold py-4 px-8 rounded-xl hover:shadow-[0_0_20px_rgba(0,255,136,0.6)] hover:-translate-y-1 transition-all duration-300">
                            <FaAndroid size={24} /> 
                            <div className="text-left leading-none">
                                <span className="block text-[9px] opacity-70 uppercase">Télécharger pour</span>
                                <span className="text-sm">ANDROID APK</span>
                            </div>
                        </button>
                        <button className="flex items-center gap-3 bg-black/40 border border-white/10 text-white font-bold py-4 px-8 rounded-xl hover:bg-white/10 transition-all backdrop-blur-md">
                            <FaQrcode size={20} /> Scanner pour installer
                        </button>
                    </div>
                    
                    <div className="flex gap-10 border-t border-white/10 pt-6">
                        <div>
                            <div className="text-2xl font-black text-white">1k+</div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Téléchargements</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-neon flex items-center gap-1">4.8 <FaStar className="text-sm"/></div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Note</div>
                        </div>
                        <div>
                            <div className="text-2xl font-black text-white">25MB</div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-widest font-bold">Taille</div>
                        </div>
                    </div>
                </div>
                
                {/* DROITE : TÉLÉPHONE PRINCIPAL (Meilleure image) */}
                <div className="relative flex justify-center perspective-1000">
                     {/* Cercle décoratif derrière */}
                     <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] border border-neon/20 rounded-full animate-[spin_15s_linear_infinite]"></div>
                     
                     <div className="relative z-10 w-[280px] h-[580px] bg-black rounded-[45px] border-4 border-gray-800 shadow-2xl overflow-hidden">
                        {/* Notch */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                        {/* Screen Image (Interface riche) */}
                        <img 
                            src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=600&q=80" 
                            alt="Ve.Line App Homepage" 
                            className="w-full h-full object-cover opacity-95"
                        />
                     </div>

                     {/* Badge Flottant "Sécurité" */}
                     <GlassCard className="absolute bottom-20 -left-10 p-4 flex items-center gap-3 animate-bounce shadow-xl bg-black/60 backdrop-blur-xl border-neon/30">
                        <div className="w-8 h-8 rounded-full bg-neon flex items-center justify-center text-black"><FaShieldAlt /></div>
                        <div>
                            <div className="text-[10px] text-gray-400 uppercase">Sécurité</div>
                            <div className="text-sm font-bold text-white">Vérifiée</div>
                        </div>
                     </GlassCard>
                </div>
            </div>
        </div>

        {/* --- 2. INTERFACE PREVIEW (Les 4 écrans avec nouvelles images) --- */}
        <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
            <div className="flex items-center justify-between mb-10 border-b border-white/10 pb-4">
                <h3 className="text-xl font-black font-mono text-white flex items-center gap-2">
                    INTERFACE_PREVIEW <span className="text-neon text-xs animate-pulse">●●●</span>
                </h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {screens.map((screen, idx) => (
                    <div key={idx} className="group cursor-pointer">
                        <div className="aspect-[9/19] bg-[#1a1a1a] rounded-2xl border border-white/10 overflow-hidden relative transition-all duration-300 group-hover:border-neon/50 group-hover:-translate-y-2 shadow-lg">
                            <img src={screen.img} alt={screen.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" />
                            {/* Overlay au survol */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                                <span className="text-neon text-xs font-bold uppercase tracking-widest border border-neon px-2 py-1 rounded">View Details</span>
                            </div>
                        </div>
                        <p className="text-center text-[10px] mt-4 text-gray-500 font-mono uppercase tracking-widest group-hover:text-white transition-colors">
                            {screen.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>

        {/* --- 3. CAPACITÉS SYSTÈME (Features) --- */}
        <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
            <div className="text-center mb-16">
                <span className="text-neon text-[10px] font-bold uppercase tracking-widest border border-neon/20 px-2 py-1 rounded">// FEATURES</span>
                <h2 className="text-3xl font-bold text-white mt-4">Capacités <span className="text-neon">Système</span></h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                {/* Carte 1 */}
                <div className="bg-[#0a0a0a]/80 p-8 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-blue-500/40 transition-colors group backdrop-blur-md">
                    <div className="p-3 bg-blue-500/10 text-blue-500 rounded-xl group-hover:scale-110 transition-transform"><FaBolt size={20} /></div>
                    <div>
                        <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white mb-1">Architecture Flutter Native</h3>
                            <span className="text-[9px] bg-white/5 px-1 rounded text-gray-500">PERFORMANCE</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">Développée avec la dernière version de Flutter pour une fluidité de 60fps sur tous les appareils Android.</p>
                    </div>
                </div>

                {/* Carte 2 */}
                <div className="bg-[#0a0a0a]/80 p-8 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-neon/40 transition-colors group backdrop-blur-md">
                    <div className="p-3 bg-neon/10 text-neon rounded-xl group-hover:scale-110 transition-transform"><FaShieldAlt size={20} /></div>
                    <div>
                         <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white mb-1">Auth Sécurisée</h3>
                            <span className="text-[9px] bg-white/5 px-1 rounded text-gray-500">SECURE</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">Vérification email & 2FA pour protéger vos comptes. Vos données sont chiffrées de bout en bout.</p>
                    </div>
                </div>

                {/* Carte 3 */}
                <div className="bg-[#0a0a0a]/80 p-8 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-purple-500/40 transition-colors group backdrop-blur-md">
                    <div className="p-3 bg-purple-500/10 text-purple-500 rounded-xl group-hover:scale-110 transition-transform"><FaBell size={20} /></div>
                    <div>
                         <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white mb-1">Push Notifs</h3>
                            <span className="text-[9px] bg-white/5 px-1 rounded text-gray-500">REAL-TIME</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">Alertes en temps réel (messages, commandes, promos) via Firebase Cloud Messaging.</p>
                    </div>
                </div>

                {/* Carte 4 */}
                <div className="bg-[#0a0a0a]/80 p-8 rounded-2xl border border-white/10 flex items-start gap-5 hover:border-orange-500/40 transition-colors group backdrop-blur-md">
                    <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl group-hover:scale-110 transition-transform"><FaDownload size={20} /></div>
                    <div>
                         <div className="flex justify-between items-start">
                            <h3 className="font-bold text-white mb-1">Gestion Média Avancée</h3>
                            <span className="text-[9px] bg-white/5 px-1 rounded text-gray-500">CLOUD</span>
                        </div>
                        <p className="text-gray-500 text-xs leading-relaxed">Compression intelligente des images et upload rapide pour des annonces qui chargent instantanément.</p>
                    </div>
                </div>
            </div>
        </div>

        {/* --- 4. INSTALLATION IMMEDIATE (Le gros bloc blanc en bas) --- */}
        <div className="container mx-auto px-6 md:px-20 relative z-10">
            <div className="bg-white rounded-[30px] p-10 md:p-12 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
                
                {/* Texture pointillée légère sur le blanc */}
                <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '10px 10px'}}></div>

                <div className="relative z-10 md:w-1/2">
                    <h3 className="text-black text-3xl font-black font-mono uppercase mb-4 tracking-tighter">INSTALLATION_IMMEDIATE</h3>
                    <p className="text-gray-600 text-sm mb-8 leading-relaxed">
                        Scannez le code pour installer l'APK directement sur votre mobile Android, ou téléchargez le fichier manuellement.
                    </p>
                    <button className="bg-neon hover:bg-black text-black hover:text-white font-bold py-4 px-10 rounded-full text-sm transition-all shadow-lg flex items-center gap-2">
                        <FaDownload /> TÉLÉCHARGER .APK
                    </button>
                </div>

                <div className="mt-8 md:mt-0 relative z-10">
                    <div className="bg-white p-6 border-4 border-black rounded-2xl shadow-[10px_10px_0px_rgba(0,0,0,0.1)] group hover:scale-105 transition-transform">
                         <FaQrcode size={150} className="text-black"/>
                         <div className="text-center text-[10px] font-bold mt-4 font-mono tracking-widest group-hover:text-neon transition-colors">SCAN_ME</div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  );
};

export default Store;