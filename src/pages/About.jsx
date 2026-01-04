import React from 'react';
import { GlassCard } from '../components/UI';
import { FaLightbulb, FaRocket, FaHandshake, FaSearch, FaPalette, FaCode, FaFlask, FaChartLine } from 'react-icons/fa';
import Reveal from '../components/Reveal'; // AJOUT IMPORTANT

const About = () => {
  return (
    // AJOUT: "perspective-1000" pour la 3D
    <div className="w-full bg-transparent overflow-hidden relative pt-32 pb-20 perspective-1000">
        
        {/* --- AJOUT : STYLE D'ANIMATION (Sans toucher au CSS global) --- */}
        <style>{`
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
            .perspective-1000 { perspective: 1000px; }
            .preserve-3d { transform-style: preserve-3d; }
        `}</style>

        {/* --- AJOUT : PARTICULES VIVANTES (BACKGROUND) --- */}
        <div className="absolute top-40 left-10 w-40 h-40 bg-neon/10 rounded-full blur-[60px] animate-pulse -z-10 pointer-events-none"></div>
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-pulse duration-[8000ms] -z-10 pointer-events-none"></div>

        {/* FIX LUMIÈRE : LE MÊME HALO NÉON QUE SUR L'ACCUEIL */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

        {/* 1. HERO SECTION */}
        <div className="container mx-auto px-6 md:px-20 text-center mb-32 relative z-10">
             <Reveal>
                <div className="inline-block px-3 py-1 mb-6 border border-white/10 rounded-full bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    // NOTRE MISSION
                </div>
             </Reveal>
             <Reveal delay={200}>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                    L'Art de transformer <br/>
                    vos Idées en <span className="text-neon drop-shadow-[0_0_15px_rgba(0,255,136,0.5)]">Solutions.</span>
                </h1>
             </Reveal>
             <Reveal delay={400}>
                <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                    Née de la passion d'un groupe d'étudiants, Dev-Solutions est devenue la référence pour ceux qui refusent le compromis entre design et performance.
                </p>
             </Reveal>
        </div>

        {/* 2. HISTOIRE : De l'Université au Cloud */}
        <div className="container mx-auto px-6 md:px-20 mb-32">
            <GlassCard className="grid md:grid-cols-2 gap-12 items-center p-8 md:p-12 relative overflow-hidden group border border-white/10 bg-black/40 backdrop-blur-xl hover:border-neon/30 transition-all duration-500">
                {/* Texte Gauche */}
                <div className="relative z-10">
                    <Reveal>
                        <h2 className="text-3xl font-bold text-white mb-6">De l'Université au Cloud.</h2>
                        <div className="space-y-4 text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-neon pl-6">
                            <p>
                                Tout a commencé dans un labo informatique exigu. Pas de budget, juste du café et du code. 
                                Nous voulions prouver qu'on pouvait créer des architectures complexes ici, à Libreville.
                            </p>
                            <p>
                                Aujourd'hui, nous sommes une structure d'ingénieurs full-stack, designers et data scientists 
                                qui propulsent les entreprises locales vers le standard international.
                            </p>
                        </div>
                    </Reveal>
                    {/* Stats */}
                    <Reveal delay={200}>
                        <div className="flex gap-12 pt-4">
                            <div>
                                <div className="text-3xl font-bold text-neon mb-1 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">100%</div>
                                <div className="text-[10px] uppercase tracking-widest text-gray-500">Passionnés</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-neon mb-1 drop-shadow-[0_0_8px_rgba(0,255,136,0.5)]">24/7</div>
                                <div className="text-[10px] uppercase tracking-widest text-gray-500">Disponibles</div>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Image Droite (Code Screen) - AJOUT: animate-float ET perspective */}
                <div className="relative h-full min-h-[300px] group perspective-1000">
                    <div className="absolute inset-0 bg-neon/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* LE CONTENU QUE JE N'AI PAS TOUCHÉ, JUSTE AJOUTÉ LES CLASSES D'ANIMATION */}
                    <div className="rounded-xl overflow-hidden border border-white/10 bg-[#050505] shadow-2xl h-full animate-float transform transition-transform duration-700 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
                        {/* Simulation d'écran de code */}
                        <div className="absolute top-0 left-0 w-full h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                        </div>
                        <div className="p-6 pt-12 font-mono text-xs text-green-400 opacity-90 leading-loose">
                            <p><span className="text-purple-400">class</span> <span className="text-yellow-400">DevSolution</span> <span className="text-purple-400">extends</span> <span className="text-blue-400">Future</span> {'{'}</p>
                            <p className="pl-4"><span className="text-purple-400">constructor</span>() {'{'}</p>
                            <p className="pl-8">this.passion = <span className="text-pink-400">true</span>;</p>
                            <p className="pl-8">this.limit = <span className="text-pink-400">null</span>;</p>
                            <p className="pl-4">{'}'}</p>
                            <p className="pl-4"><span className="text-blue-400">build</span>() {'{'}</p>
                            <p className="pl-8"><span className="text-purple-400">return</span> <span className="text-orange-400">"Excellence"</span>;</p>
                            <p className="pl-4">{'}'}</p>
                            <p>{'}'}</p>
                        </div>
                        {/* Reflet sur l'écran */}
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/5 to-transparent pointer-events-none"></div>
                    </div>
                </div>
            </GlassCard>
        </div>

        {/* 3. CORE PROTOCOLS */}
        <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
            <Reveal className="text-center mb-16">
                <h2 className="text-2xl font-bold text-white uppercase tracking-widest flex items-center justify-center gap-3">
                    <span className="text-neon">//</span> CORE PROTOCOLS
                </h2>
                <p className="text-gray-500 text-xs mt-2 font-mono">Les piliers qui soutiennent notre code.</p>
            </Reveal>
            
            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { icon: <FaLightbulb/>, title: "Innovation", text: "Toujours à la pointe de la tech." },
                    { icon: <FaRocket/>, title: "Excellence", text: "Nous visons la perfection." },
                    { icon: <FaHandshake/>, title: "Engagement", text: "Votre succès est le nôtre." },
                    { icon: <FaSearch/>, title: "Transparence", text: "Communication claire." }
                ].map((item, i) => (
                    <Reveal key={i} delay={i * 100}>
                        <GlassCard className="hover:-translate-y-2 transition-all duration-300 hover:bg-white/5 group border border-white/5 h-full">
                            <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center text-neon text-xl mb-4 border border-white/10 group-hover:bg-neon group-hover:text-black transition-colors shadow-[0_0_10px_rgba(0,255,136,0.2)]">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-white mb-2 uppercase text-xs tracking-wider">{item.title}</h3>
                            <p className="text-gray-500 text-xs leading-relaxed">{item.text}</p>
                        </GlassCard>
                    </Reveal>
                ))}
            </div>
        </div>

        {/* 4. ÉQUIPES (COULEURS EXACTES + HOVER 3D AJOUTÉ) */}
        <div className="container mx-auto px-6 md:px-20 mb-32 relative z-10">
            <Reveal className="text-center mb-16">
                <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-1 rounded text-gray-400 uppercase">Organisation</span>
                <h2 className="text-3xl font-bold text-white mt-4">4 Équipes, <span className="text-neon">Une Vision</span></h2>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8 perspective-1000">
                {/* 1. PIXELS LABS (ROSE) */}
                <Reveal delay={100}>
                    <div className="bg-[#0a0a0a]/80 border border-pink-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-pink-500/60 transition-all duration-500 backdrop-blur-md transform hover:scale-[1.02] hover:rotate-1">
                        <div className="absolute -right-6 -top-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-45 duration-700"><FaPalette size={100} className="text-pink-500"/></div>
                        <h3 className="text-xl font-black text-white mb-2 uppercase italic">Pixels Labs</h3>
                        <span className="inline-block bg-pink-500/10 text-pink-500 text-[9px] font-bold px-2 py-1 rounded mb-4 border border-pink-500/20">DESIGN UI/UX</span>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                            L'unité en charge de l'esthétique. Ils transforment des wireframes complexes en interfaces magnifiques.
                        </p>
                    </div>
                </Reveal>

                {/* 2. CODE OPS (BLEU) */}
                <Reveal delay={200}>
                    <div className="bg-[#0a0a0a]/80 border border-blue-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-blue-500/60 transition-all duration-500 backdrop-blur-md transform hover:scale-[1.02] hover:rotate-1">
                        <div className="absolute -right-6 -top-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-45 duration-700"><FaCode size={100} className="text-blue-500"/></div>
                        <h3 className="text-xl font-black text-white mb-2 uppercase italic">Code Ops</h3>
                        <span className="inline-block bg-blue-500/10 text-blue-500 text-[9px] font-bold px-2 py-1 rounded mb-4 border border-blue-500/20">DEV FULLSTACK</span>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                            Le noyau dur. Développement Web, Mobile et intégration d'API. Ils parlent React, Python et Docker couramment.
                        </p>
                    </div>
                </Reveal>

                {/* 3. R&D LAB (VERT) */}
                <Reveal delay={300}>
                    <div className="bg-[#0a0a0a]/80 border border-neon/20 p-8 rounded-2xl relative overflow-hidden group hover:border-neon/60 transition-all duration-500 backdrop-blur-md transform hover:scale-[1.02] hover:rotate-1">
                        <div className="absolute -right-6 -top-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-45 duration-700"><FaFlask size={100} className="text-neon"/></div>
                        <h3 className="text-xl font-black text-white mb-2 uppercase italic">R&D Lab</h3>
                        <span className="inline-block bg-neon/10 text-neon text-[9px] font-bold px-2 py-1 rounded mb-4 border border-neon/20">INNOVATION</span>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                            Notre laboratoire secret. C'est ici qu'on teste l'I.A., la Blockchain et les technos de demain.
                        </p>
                    </div>
                </Reveal>

                {/* 4. CASH FLOW (ORANGE) */}
                <Reveal delay={400}>
                    <div className="bg-[#0a0a0a]/80 border border-orange-500/20 p-8 rounded-2xl relative overflow-hidden group hover:border-orange-500/60 transition-all duration-500 backdrop-blur-md transform hover:scale-[1.02] hover:rotate-1">
                        <div className="absolute -right-6 -top-6 p-4 opacity-10 group-hover:opacity-20 transition-opacity rotate-12 group-hover:rotate-45 duration-700"><FaChartLine size={100} className="text-orange-500"/></div>
                        <h3 className="text-xl font-black text-white mb-2 uppercase italic">Cash Flow</h3>
                        <span className="inline-block bg-orange-500/10 text-orange-500 text-[9px] font-bold px-2 py-1 rounded mb-4 border border-orange-500/20">STRATÉGIE</span>
                        <p className="text-gray-400 text-xs leading-relaxed max-w-xs">
                            Gestion de projet et planification. Ils s'assurent que votre projet est livré à temps et dans le budget.
                        </p>
                    </div>
                </Reveal>
            </div>
        </div>

        {/* 5. PROCESSUS (Timeline) */}
        <div className="container mx-auto px-6 md:px-20 relative z-10">
            <Reveal className="text-center mb-20">
                <h2 className="text-3xl font-bold text-white">Notre <span className="text-neon">Processus</span></h2>
                <p className="text-gray-500 text-xs mt-2 font-mono">Une méthodologie linéaire pour des résultats exponentiels.</p>
            </Reveal>

            <div className="relative">
                {/* Ligne connectrice */}
                <div className="absolute top-6 left-0 w-full h-px bg-white/10 hidden md:block"></div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                    {[
                        { step: "01", title: "DÉCOUVERTE", desc: "Audit & Analyse" },
                        { step: "02", title: "CONCEPTION", desc: "Design & Proto" },
                        { step: "03", title: "BUILD", desc: "Code & Tests" },
                        { step: "04", title: "DEPLOY", desc: "Mise en ligne" },
                    ].map((item, index) => (
                        <Reveal key={index} delay={index * 150} className="flex flex-col items-center text-center group">
                            <div className="w-12 h-12 rounded-full bg-[#050505] border border-white/20 group-hover:border-neon group-hover:text-neon group-hover:shadow-[0_0_15px_rgba(0,255,136,0.5)] flex items-center justify-center text-sm font-bold transition-all duration-300 mb-6 relative z-10 group-hover:scale-110">
                                {item.step}
                            </div>
                            <h3 className="text-xs font-bold text-white mb-1 uppercase tracking-widest group-hover:text-neon transition-colors">{item.title}</h3>
                            <p className="text-[9px] text-gray-500 uppercase tracking-wide">{item.desc}</p>
                        </Reveal>
                    ))}
                </div>
            </div>
        </div>

    </div>
  );
};

export default About;