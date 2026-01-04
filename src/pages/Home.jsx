


import React from 'react';
import { Link } from 'react-router-dom';
import { GlassCard } from '../components/UI';
import { FaLaptopCode, FaServer, FaBrain, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import Reveal from '../components/Reveal'; // <--- L'ingrédient magique pour la "vie"

const Home = () => {
  return (
    // FIX 1: "bg-transparent" pour voir la 3D qui est dans App.jsx
    <div className="w-full bg-transparent overflow-hidden relative text-white">
        
      {/* EFFET DE LUMIÈRE AMBIANTE (Le "Reflet Néon" global) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

      {/* --- 1. HERO SECTION --- */}
      <div className="min-h-screen flex items-center justify-center px-6 md:px-20 pt-20 relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center z-10">
            
            {/* GAUCHE : TEXTE */}
            <div className="relative">
                {/* Petit halo derrière le texte */}
                <div className="absolute -left-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] pointer-events-none"></div>
                
                <Reveal>
                    <div className="inline-block px-3 py-1 mb-6 border border-neon/50 rounded-full bg-neon/10 text-neon text-[10px] font-bold tracking-widest uppercase shadow-[0_0_15px_rgba(0,255,136,0.3)]">
                        ● VERSION 2.0.0
                    </div>
                </Reveal>

                <Reveal delay={200}>
                    <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-white drop-shadow-xl">
                      Nous <br/>développons <br/>
                      votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-blue-400 drop-shadow-[0_0_10px_rgba(0,255,136,0.5)]">Infrastructure.</span>
                    </h1>
                </Reveal>

                <Reveal delay={400}>
                    <p className="text-gray-300 text-lg mb-8 leading-relaxed max-w-lg border-l-4 border-neon pl-6 bg-black/20 backdrop-blur-sm p-4 rounded-r-xl">
                      Dev-Solutions est la centrale pour la diversité du code. 
                      Nous façonnons, développons sur mesure et maintenons votre écosystème digital.
                    </p>
                </Reveal>

                <Reveal delay={600} className="flex gap-4">
                    <Link to="/contact">
                        <button className="bg-neon text-black font-bold py-4 px-8 rounded-lg transition-all shadow-[0_0_30px_rgba(0,255,136,0.4)] hover:scale-105 hover:bg-white flex items-center gap-2">
                           Lancer un projet 🚀
                        </button>
                    </Link>
                    <Link to="/about">
                        <button className="text-white border border-white/20 bg-black/30 backdrop-blur-md hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all">
                           Savoir plus
                        </button>
                    </Link>
                </Reveal>
            </div>

            {/* DROITE : IMAGE CODE (Avec reflet brillant) */}
            <div className="relative group perspective-1000">
                <Reveal delay={500}>
                    {/* Lueur intense derrière la carte */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-neon via-blue-500 to-purple-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000"></div>
                    
                    <GlassCard className="relative p-6 md:p-8 font-mono text-xs md:text-sm text-gray-300 leading-relaxed border border-white/20 bg-black/60 shadow-2xl transform transition-transform duration-500 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
                        {/* Header de la fenêtre */}
                        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)]"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
                            </div>
                            <div className="text-[10px] text-gray-500">main.tsx</div>
                        </div>

                        {/* Code */}
                        <div className="space-y-1">
                            <p><span className="text-purple-400">const</span> <span className="text-yellow-300">DevSolution</span> = <span className="text-purple-400">async</span> () ={'>'} {'{'}</p>
                            <p className="pl-4"><span className="text-purple-400">await</span> <span className="text-blue-400">buildInfrastructure</span>({'{'}</p>
                            <p className="pl-8">web: <span className="text-green-400">'React / Next.js'</span>,</p>
                            <p className="pl-8">mobile: <span className="text-green-400">'Flutter Native'</span>,</p>
                            <p className="pl-8">security: <span className="text-green-400">'Auth 2FA'</span></p>
                            <p className="pl-4">{'}'});</p>
                            <p className="pl-4 text-gray-500">// Ready to deploy 🚀</p>
                            <p className="pl-4"><span className="text-purple-400">return</span> <span className="text-neon animate-pulse">"Success"</span>;</p>
                            <p>{'}'}</p>
                        </div>
                        
                        {/* Badge flottant "Compilée" */}
                        <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-neon/50 text-white p-3 rounded-xl shadow-[0_0_20px_rgba(0,255,136,0.2)] text-xs flex items-center gap-2 backdrop-blur-xl">
                            <FaCheckCircle className="text-neon"/> 
                            <span>Build Passing</span>
                        </div>
                    </GlassCard>
                </Reveal>
            </div>
        </div>
      </div>

      {/* --- 2. SECTION EXPERTISE (Cartes brillantes) --- */}
      <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
          <Reveal className="text-center mb-16 relative">
              {/* Lueur derrière le titre */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] -z-10"></div>
              
              <span className="text-neon text-[10px] font-bold uppercase tracking-widest border border-neon/20 px-3 py-1 rounded-full">// NOS COMPÉTENCES</span>
              <h2 className="text-4xl font-bold mt-4 text-white">UNE EXPERTISE <span className="text-neon drop-shadow-[0_0_10px_rgba(0,255,136,0.8)]">360°</span></h2>
              <p className="text-gray-400 mt-4">Nous sommes l'interlocuteur unique pour votre écosystème digital.</p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
              {/* Carte 1 */}
              <Reveal delay={100}>
                  <GlassCard className="h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] hover:border-blue-500/50">
                      <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 text-2xl mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)]"><FaLaptopCode/></div>
                      <h3 className="text-xl font-bold mb-3 font-mono">Dev Web & Mobile</h3>
                      <p className="text-gray-400 text-sm mb-4">Sites vitrines, SaaS et applications mobiles natives.</p>
                  </GlassCard>
              </Reveal>

              {/* Carte 2 (Mise en avant Neon) */}
              <Reveal delay={200}>
                  <GlassCard className="h-full group hover:-translate-y-2 transition-all duration-300 border-neon/30 bg-neon/5 hover:shadow-[0_0_30px_rgba(0,255,136,0.2)] hover:border-neon">
                      <div className="w-14 h-14 bg-neon/10 rounded-xl flex items-center justify-center text-neon text-2xl mb-6 group-hover:bg-neon group-hover:text-black transition-colors shadow-[0_0_15px_rgba(0,255,136,0.3)]"><FaServer/></div>
                      <h3 className="text-xl font-bold mb-3 font-mono text-white">Infra & Maintenance</h3>
                      <p className="text-gray-300 text-sm mb-4">Gestion de parc, DevOps et maintenance préventive.</p>
                  </GlassCard>
              </Reveal>

              {/* Carte 3 */}
              <Reveal delay={300}>
                  <GlassCard className="h-full group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] hover:border-purple-500/50">
                      <div className="w-14 h-14 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 text-2xl mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors shadow-[0_0_15px_rgba(168,85,247,0.3)]"><FaBrain/></div>
                      <h3 className="text-xl font-bold mb-3 font-mono">Solutions I.A.</h3>
                      <p className="text-gray-400 text-sm mb-4">Chatbots, NLP et analyse de données intelligente.</p>
                  </GlassCard>
              </Reveal>
          </div>
      </div>

      {/* --- 3. SECTION STATS --- */}
      <Reveal delay={200} className="container mx-auto px-6 md:px-20 mb-32">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-white/10 py-10 bg-black/40 backdrop-blur-md relative overflow-hidden">
              {/* Reflet qui passe sur les stats */}
              <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-[-20deg] animate-[shimmer_3s_infinite]"></div>
              
              <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">99%</div>
                  <div className="text-[10px] uppercase tracking-widest text-neon">Satisfaction</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">10+</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Projets</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1 text-neon">24/7</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Support</div>
              </div>
              <div className="text-center">
                  <div className="text-4xl font-black text-white mb-1">4</div>
                  <div className="text-[10px] uppercase tracking-widest text-gray-500">Équipes</div>
              </div>
          </div>
      </Reveal>

      {/* --- 4. REALISATIONS (Avec effet Glitch au survol) --- */}
      <div className="container mx-auto px-6 md:px-20 mb-32">
          <Reveal className="mb-12 border-l-4 border-neon pl-6">
              <h2 className="text-4xl font-black uppercase text-white tracking-tight">REALISATIONS_LOG</h2>
              <span className="text-neon font-mono text-xs">// SELECTED WORKS / 2024-2025</span>
          </Reveal>

          <div className="grid gap-16">
              {/* PROJET 1 : MBANIE */}
              <Reveal delay={200}>
                  <GlassCard className="grid md:grid-cols-2 gap-8 items-center group hover:border-neon/50 transition-all duration-500 hover:bg-white/5">
                      <div className="rounded-xl overflow-hidden border border-white/10 relative h-64 md:h-80">
                          <div className="absolute inset-0 bg-neon/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 mix-blend-overlay"></div>
                          <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Mbanie" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                      </div>
                      <div>
                          <div className="text-neon font-mono text-xs mb-2 flex items-center gap-2">01 // GESTION_RH <span className="w-10 h-[1px] bg-neon"></span></div>
                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-neon transition-colors">MBANIE</h3>
                          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                              Application complète de gestion RH. Paie, pointage, et gestion des congés automatisée pour les grandes structures.
                          </p>
                          <Link to="/store">
                              <button className="flex items-center gap-2 text-white text-xs font-bold uppercase hover:text-neon transition-colors group">
                                  Voir le case study <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                              </button>
                          </Link>
                      </div>
                  </GlassCard>
              </Reveal>

              {/* PROJET 2 : PHARMA */}
              <Reveal delay={400}>
                  <GlassCard className="grid md:grid-cols-2 gap-8 items-center group hover:border-orange-500/50 transition-all duration-500 hover:bg-white/5">
                      <div className="order-2 md:order-1">
                          <div className="text-orange-500 font-mono text-xs mb-2 flex items-center gap-2">02 // SANTE <span className="w-10 h-[1px] bg-orange-500"></span></div>
                          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-orange-500 transition-colors">PharmaManager</h3>
                          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                              Gestion d'officine en temps réel. Suivi des stocks, alertes péremption et connexion directe avec les fournisseurs.
                          </p>
                          <Link to="/store">
                              <button className="flex items-center gap-2 text-white text-xs font-bold uppercase hover:text-orange-500 transition-colors group">
                                  Voir le case study <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                              </button>
                          </Link>
                      </div>
                      <div className="order-1 md:order-2 rounded-xl overflow-hidden border border-white/10 relative h-64 md:h-80">
                          <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80" alt="Pharma" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"/>
                      </div>
                  </GlassCard>
              </Reveal>
          </div>
      </div>

    </div>
  );
};

export default Home;