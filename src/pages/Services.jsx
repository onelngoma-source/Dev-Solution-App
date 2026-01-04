import React, { useState } from 'react';
import { GlassCard } from '../components/UI';
import { FaCode, FaPaintBrush, FaMicrochip, FaRobot, FaReact, FaLaravel, FaPython, FaAws, FaDocker, FaCheck, FaFigma, FaArrowRight } from 'react-icons/fa';
import { SiFlutter, SiAdobe, SiTensorflow, SiPytorch } from 'react-icons/si';
import Reveal from '../components/Reveal';

const Services = () => {
  const [activeTab, setActiveTab] = useState('dev');

  const content = {
    dev: {
      id: 'dev',
      label: "DEVELOPPEMENT",
      icon: <FaCode />,
      title: "CODING_FACTORY",
      desc: "Nous concevons des écosystèmes logiciels complets. Que vous ayez besoin d'une présence web ou d'une application métier complexe, nous codons avec les standards les plus stricts.",
      features: [
        "Sites Web (Vitrine, E-commerce, Portail)",
        "Applications Web (SaaS, Intranet)",
        "Mobile (Android & iOS Natif/Hybride)",
        "Desktop Software (Windows/Mac/Linux)"
      ],
      stack: [
        { name: "React/Vue", icon: <FaReact className="text-blue-400"/> },
        { name: "Laravel/PHP", icon: <FaLaravel className="text-red-500"/> },
        { name: "Flutter", icon: <SiFlutter className="text-blue-300"/> },
        { name: "Python", icon: <FaPython className="text-yellow-400"/> }
      ]
    },
    design: {
      id: 'design',
      label: "DESIGN_CREATIF",
      icon: <FaPaintBrush />,
      title: "PIXEL_PERFECT",
      desc: "L'interface est le premier contact. Nous créons des designs UI/UX, des chartes graphiques et des prototypes interactifs qui valident l'expérience utilisateur avant le code.",
      features: [
        "Identité Visuelle & Branding",
        "Maquettage UI/UX (Figma / Adobe XD)",
        "Prototypage Interactif & User Flow",
        "Design System & Assets graphiques"
      ],
      stack: [
        { name: "Figma", icon: <FaFigma className="text-purple-400"/> },
        { name: "Adobe CC", icon: <SiAdobe className="text-red-500"/> },
        { name: "Motion", icon: <FaPaintBrush className="text-pink-400"/> },
        { name: "CSS/Tailwind", icon: <FaCode className="text-blue-400"/> }
      ]
    },
    infra: {
      id: 'infra',
      label: "MAINTENANCE_IT",
      icon: <FaMicrochip />,
      title: "INFRA & RESEAU",
      desc: "Votre matériel est lent ? Vos systèmes plantent ? Ne jetez pas, optimisez. Upgrade hardware (RAM, SSD) et maintenance software redonnent vie à votre parc.",
      features: [
        "Upgrade Hardware (RAM, SSD, CPU)",
        "Désinfection Virale & Sécurité",
        "Installation OS & Logiciels Métiers",
        "Configuration Réseau & Serveurs"
      ],
      stack: [
        { name: "AWS Cloud", icon: <FaAws className="text-orange-400"/> },
        { name: "Docker", icon: <FaDocker className="text-blue-500"/> },
        { name: "Hardware", icon: <FaMicrochip className="text-green-400"/> },
        { name: "Sécurité", icon: <FaCheck className="text-neon"/> }
      ]
    },
    ia: {
      id: 'ia',
      label: "SOLUTIONS_IA",
      icon: <FaRobot />,
      title: "INTELLIGENCE ARTIFICIELLE",
      desc: "Intégrez des Chatbots intelligents pour votre service client ou automatisez vos tâches répétitives avec nos scripts sur-mesure.",
      features: [
        "Chatbots NLP (Service Client 24/7)",
        "Scraping & Analyse de données",
        "Automatisation de processus (RPA)",
        "Scripts Python sur-mesure"
      ],
      stack: [
        { name: "TensorFlow", icon: <SiTensorflow className="text-orange-400"/> },
        { name: "PyTorch", icon: <SiPytorch className="text-red-400"/> },
        { name: "Python", icon: <FaPython className="text-yellow-400"/> },
        { name: "OpenAI API", icon: <FaRobot className="text-green-400"/> }
      ]
    }
  };

  return (
    <div className="w-full bg-transparent overflow-hidden relative pt-32 pb-20 perspective-1000">
        
        {/* --- STYLES ANIMATIONS (CSS MANUEL POUR ÉVITER LES BUGS REACT) --- */}
        <style>{`
            /* Flottement continu */
            @keyframes float {
                0%, 100% { transform: translateY(0px); }
                50% { transform: translateY(-15px); }
            }
            .animate-float { animation: float 6s ease-in-out infinite; }
            
            /* L'EFFET "CONSTRUCTION" (Apparition vers le haut) */
            @keyframes buildUp {
                0% { opacity: 0; transform: translateY(50px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            .animate-build {
                animation: buildUp 0.6s cubic-bezier(0.17, 0.55, 0.55, 1) forwards;
            }

            .perspective-1000 { perspective: 1000px; }
            .preserve-3d { transform-style: preserve-3d; }
        `}</style>

        {/* DÉCORATIONS (Bulles) */}
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] animate-pulse -z-10 pointer-events-none"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-neon/10 rounded-full blur-[60px] animate-bounce duration-[5000ms] -z-10 pointer-events-none"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-neon/20 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>

        {/* HEADER */}
        <div className="container mx-auto px-6 md:px-20 text-center mb-16 relative z-10">
            <Reveal>
                <div className="inline-block px-3 py-1 mb-4 border border-white/10 rounded-full bg-white/5 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                    // SYSTEM_CAPABILITIES
                </div>
            </Reveal>
            <Reveal delay={200}>
                <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-2xl">
                    Architecture Digitale <br/>
                    <span className="text-neon drop-shadow-[0_0_15px_rgba(0,255,136,0.4)]">& Maintenance</span>
                </h1>
            </Reveal>
            <Reveal delay={400}>
                <p className="text-gray-400 max-w-xl mx-auto text-sm">
                    Du code pur à la réparation hardware : nous maîtrisons toute la chaîne de valeur.
                </p>
            </Reveal>
        </div>

        {/* NAVIGATION */}
        <div className="container mx-auto px-6 md:px-20 mb-20 relative z-10">
            <Reveal delay={500}>
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 border-b border-white/10 pb-8">
                    {Object.values(content).map((tab) => (
                        <button 
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300
                            ${activeTab === tab.id 
                                ? 'bg-neon text-black shadow-[0_0_20px_rgba(0,255,136,0.4)] scale-105' 
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                        >
                            {tab.icon} {tab.label}
                        </button>
                    ))}
                </div>
            </Reveal>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="container mx-auto px-6 md:px-20 grid md:grid-cols-2 gap-16 items-center min-h-[500px] relative z-10">
            
            {/* GAUCHE : TEXTE (Animation CSS forcée avec key) */}
            <div key={`${activeTab}-text`} className="animate-build">
                <h2 className="text-4xl font-black text-white mb-6 uppercase tracking-tight font-mono">
                    {content[activeTab].title}
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-neon pl-4">
                    {content[activeTab].desc}
                </p>
                
                <div className="space-y-4">
                    {content[activeTab].features.map((item, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <div className="w-5 h-5 rounded-full bg-neon/10 flex items-center justify-center text-neon text-xs border border-neon/20 group-hover:bg-neon group-hover:text-black transition-colors">
                                <FaCheck />
                            </div>
                            <span className="text-gray-300 text-sm font-mono group-hover:text-white transition-colors">{item}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* DROITE : CARTE STACK */}
            {/* key={activeTab} force React à recréer la div, ce qui déclenche l'animation "animate-build" À CHAQUE FOIS */}
            <div key={`${activeTab}-card`} className="relative w-full group perspective-1000 animate-build">
                
                {/* Conteneur flottant */}
                <div className="animate-float">
                    {/* Glow */}
                    <div className="absolute -inset-2 bg-gradient-to-r from-neon/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    
                    {/* Carte */}
                    <GlassCard className="relative p-10 border border-white/20 bg-black/60 backdrop-blur-xl transform transition-transform duration-500 group-hover:rotate-y-[-5deg] group-hover:rotate-x-[5deg]">
                        <h3 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em] mb-8 text-center border-b border-white/10 pb-4">
                            NOTRE STACK TECHNIQUE
                        </h3>
                        
                        <div className="grid grid-cols-2 gap-6">
                            {content[activeTab].stack.map((tech, idx) => (
                                <div key={idx} className="flex flex-col items-center justify-center p-6 bg-white/5 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-neon/30 hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    <div className="text-4xl mb-3 filter drop-shadow-lg">
                                        {tech.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">{tech.name}</span>
                                </div>
                            ))}
                        </div>
                    </GlassCard>
                </div>
            </div>

        </div>

        {/* CTA */}
        <div className="container mx-auto px-6 md:px-20 mt-32 text-center relative z-10">
             <Reveal>
                <h3 className="text-2xl font-bold text-white font-mono mb-8">Un projet en tête ?</h3>
                <button className="bg-[#5c7c8a]/30 hover:bg-neon hover:text-black text-white border border-white/20 font-bold py-4 px-12 rounded-lg transition-all uppercase tracking-widest shadow-lg flex items-center gap-2 mx-auto group hover:shadow-[0_0_30px_rgba(0,255,136,0.4)]">
                    DEMANDER UN DEVIS <FaArrowRight className="group-hover:translate-x-1 transition-transform"/>
                </button>
             </Reveal>
        </div>

    </div>
  );
};

export default Services;