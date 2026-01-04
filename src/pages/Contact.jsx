import React from 'react';
import { GlassCard } from '../components/UI';
import { FaPhoneAlt, FaEnvelope, FaWhatsapp, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("📡 Signal envoyé au QG !");
  };

  return (
    <div className="pt-32 pb-20 px-6 md:px-20 w-full bg-transparent overflow-hidden relative min-h-screen perspective-1000">
      
      {/* --- ANIMATIONS CSS ROBUSTES (Indispensables pour que ça ne disparaisse pas) --- */}
      <style>{`
          /* Apparition vers le haut (Build Up) */
          @keyframes buildUp {
              0% { opacity: 0; transform: translateY(20px); }
              100% { opacity: 1; transform: translateY(0); }
          }
          .animate-build-1 { animation: buildUp 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) forwards; animation-delay: 0.1s; opacity: 0; }
          .animate-build-2 { animation: buildUp 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) forwards; animation-delay: 0.3s; opacity: 0; }
          .animate-build-3 { animation: buildUp 0.8s cubic-bezier(0.17, 0.55, 0.55, 1) forwards; animation-delay: 0.5s; opacity: 0; }

          /* Flottement léger */
          @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
          }
          .animate-float { animation: float 6s ease-in-out infinite; }
          
          .perspective-1000 { perspective: 1000px; }
      `}</style>

      {/* --- DÉCORATIONS (Background) --- */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-neon/10 rounded-full blur-[60px] animate-pulse -z-10 pointer-events-none"></div>
      <div className="absolute bottom-20 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse duration-[7000ms] -z-10 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

      {/* HEADER */}
      <div className="container mx-auto mb-16 text-center relative z-10 animate-build-1">
         <div className="inline-block px-3 py-1 mb-6 border border-neon/30 rounded-full bg-neon/5 text-neon text-[10px] font-bold font-mono tracking-widest uppercase shadow-[0_0_10px_rgba(0,255,136,0.2)]">
            // SIGNAL_INPUT
         </div>
         <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-2xl">
            Démarrons quelque chose d'<span className="text-neon drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">Unique.</span>
         </h1>
         <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Un projet ? Une idée folle ? Ou juste envie de parler tech ? 
            Nos protocoles de communication sont actifs.
         </p>
      </div>

      <div className="container mx-auto grid lg:grid-cols-12 gap-10 relative z-10">
        
        {/* COLONNE GAUCHE : INFOS & MAP (Réparée) */}
        {/* J'ai mis 'animate-build-2' ici pour forcer l'apparition */}
        <div className="lg:col-span-4 space-y-8 animate-build-2">
            
            {/* 1. CARTE CONTACTS DIRECTS */}
            <div className="animate-float"> {/* Flottement CSS appliqué directement */}
                <GlassCard className="space-y-8 border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon/30 transition-colors mb-8 group hover:shadow-[0_0_30px_rgba(0,255,136,0.1)]">
                    <h3 className="text-sm font-bold flex items-center gap-3 text-white uppercase tracking-widest border-b border-white/10 pb-4">
                        <span className="text-neon animate-pulse">●</span> CANAUX_DIRECTS
                    </h3>

                    {/* Téléphone */}
                    <div className="flex items-start gap-4 group/item cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 text-white group-hover/item:bg-neon group-hover/item:text-black transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                            <FaPhoneAlt />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono mb-1">Appel Direct (24/7)</div>
                            <div className="text-lg font-bold text-white group-hover/item:text-neon transition-colors font-mono">+241 74 81 51 93</div>
                        </div>
                    </div>

                    {/* Email */}
                    <div className="flex items-start gap-4 group/item cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 text-white group-hover/item:bg-neon group-hover/item:text-black transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                            <FaEnvelope />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono mb-1">Email Officiel</div>
                            <div className="text-sm font-bold text-white group-hover/item:text-neon transition-colors font-mono break-all">devssolutions.tech@gmail.com</div>
                        </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="flex items-start gap-4 group/item cursor-pointer">
                        <div className="p-3 rounded-xl bg-white/5 text-white group-hover/item:bg-neon group-hover/item:text-black transition-all shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                            <FaWhatsapp />
                        </div>
                        <div>
                            <div className="text-[9px] text-gray-500 uppercase tracking-wider font-mono mb-1">WhatsApp Business</div>
                            <div className="text-lg font-bold text-white group-hover/item:text-neon transition-colors font-mono">Démarrer le chat</div>
                        </div>
                    </div>
                </GlassCard>
            </div>

            {/* 2. CYBER MAP */}
            <div className="rounded-3xl border border-neon/20 bg-black/50 backdrop-blur-md h-72 relative overflow-hidden group shadow-[0_0_20px_rgba(0,255,136,0.1)] hover:border-neon/50 transition-colors">
                {/* Grille de fond Néon */}
                <div className="absolute inset-0 opacity-30" 
                        style={{backgroundImage: 'radial-gradient(rgba(0, 255, 136, 0.4) 1px, transparent 1px)', backgroundSize: '30px 30px'}}>
                </div>
                
                {/* Scan Radar Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon/10 to-transparent h-[30%] w-full animate-[scan_4s_linear_infinite] border-b border-neon/20"></div>

                {/* Point QG Central */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-20">
                    <div className="relative">
                        <div className="w-4 h-4 bg-red-500 rounded-full shadow-[0_0_25px_rgba(239,68,68,1)] z-10 relative"></div>
                        <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 border border-red-500/30 rounded-full animate-pulse delay-75"></div>
                    </div>
                    <div className="mt-6 px-4 py-2 bg-black/90 border border-red-500/50 rounded-lg text-[10px] text-red-400 font-bold font-mono backdrop-blur-xl flex items-center gap-2 shadow-lg">
                        <FaMapMarkerAlt /> HQ_LOCATED :: LIBREVILLE
                    </div>
                </div>

                {/* Status Bar en bas */}
                <div className="absolute bottom-0 left-0 w-full p-4 bg-black/60 backdrop-blur-sm flex justify-between items-center text-[9px] font-mono border-t border-white/5">
                    <div className="flex items-center gap-2 text-neon">
                        <span className="w-2 h-2 bg-neon rounded-full animate-pulse"></span>
                        SYSTEM_ONLINE
                    </div>
                    <div className="text-gray-500">LAT: 0.3901 / LON: 9.4544</div>
                </div>
            </div>
        </div>

        {/* COLONNE DROITE : FORMULAIRE TERMINAL */}
        <div className="lg:col-span-8 animate-build-3">
            <GlassCard className="h-full relative overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl p-8 md:p-12 hover:border-neon/30 transition-colors">
                {/* Décoration d'angle Néon */}
                <div className="absolute top-0 right-0 p-6 opacity-50">
                    <div className="w-24 h-24 border-t-2 border-r-2 border-neon rounded-tr-[40px] drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]"></div>
                </div>

                <h3 className="text-2xl font-black mb-10 font-mono text-white flex items-center gap-3">
                    <span className="text-neon">{'>'}</span> INITIALISATION DU SIGNAL
                </h3>

                <form onSubmit={handleSubmit} className="space-y-8">
                    
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* INPUT NOM */}
                        <div className="group relative">
                            <label className="block text-[10px] text-gray-500 font-bold font-mono mb-3 group-focus-within:text-neon transition-colors uppercase tracking-widest">IDENTIFIANT / NOM *</label>
                            <input 
                                type="text" 
                                placeholder="Entrez votre nom..." 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-black/60 focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all font-mono text-sm relative z-10 backdrop-blur-md"
                            />
                            <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-neon group-focus-within:w-full group-focus-within:left-0 transition-all duration-500"></div>
                        </div>
                        {/* INPUT EMAIL */}
                        <div className="group relative">
                            <label className="block text-[10px] text-gray-500 font-bold font-mono mb-3 group-focus-within:text-neon transition-colors uppercase tracking-widest">FRÉQUENCE / EMAIL *</label>
                            <input 
                                type="email" 
                                placeholder="votre@email.com" 
                                className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-black/60 focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all font-mono text-sm relative z-10 backdrop-blur-md"
                            />
                                <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-neon group-focus-within:w-full group-focus-within:left-0 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* SELECT TYPE DE MISSION */}
                    <div className="group relative">
                        <label className="block text-[10px] text-gray-500 font-bold font-mono mb-3 group-focus-within:text-neon transition-colors uppercase tracking-widest">TYPE DE MISSION</label>
                        <select className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-gray-300 focus:outline-none focus:border-neon focus:bg-black/60 focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all font-mono text-sm appearance-none backdrop-blur-md cursor-pointer">
                            <option className="bg-black">Développement Web / Mobile</option>
                            <option className="bg-black">Maintenance & Infra</option>
                            <option className="bg-black">Solution I.A.</option>
                            <option className="bg-black">Autre / Partenariat</option>
                        </select>
                        <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-neon group-focus-within:w-full group-focus-within:left-0 transition-all duration-500"></div>
                    </div>

                    {/* TEXTAREA MESSAGE */}
                    <div className="group relative">
                        <label className="block text-[10px] text-gray-500 font-bold font-mono mb-3 group-focus-within:text-neon transition-colors uppercase tracking-widest">DONNÉES DU MESSAGE *</label>
                        <textarea 
                            rows="5"
                            placeholder="Décrivez votre projet ici..." 
                            className="w-full bg-white/5 border border-white/10 rounded-xl p-5 text-white placeholder-gray-600 focus:outline-none focus:border-neon focus:bg-black/60 focus:shadow-[0_0_20px_rgba(0,255,136,0.2)] transition-all font-mono text-sm resize-none backdrop-blur-md"
                        ></textarea>
                        <div className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-neon group-focus-within:w-full group-focus-within:left-0 transition-all duration-500"></div>
                    </div>

                    {/* BOUTON ENVOYER NÉON */}
                    <div className="pt-6">
                        <button className="w-full bg-neon hover:bg-white text-black font-bold py-5 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(0,255,136,0.3)] hover:shadow-[0_0_40px_rgba(0,255,136,0.6)] hover:scale-[1.02] group border border-neon">
                            <span className="font-mono tracking-[0.2em] uppercase">ENVOYER LE SIGNAL</span>
                            <FaPaperPlane className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                        </button>
                    </div>

                </form>
            </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default Contact;