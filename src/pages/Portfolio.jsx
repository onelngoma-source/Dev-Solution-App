import React from 'react';

const ProjectCard = ({ number, category, title, description }) => (
    <div className="relative group overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="p-8 md:p-12 relative z-10">
            <span className="text-neon font-mono text-sm">{number} // {category}</span>
            <h3 className="text-3xl font-bold mt-2 mb-4 group-hover:text-neon transition-colors">{title}</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed max-w-md">
                {description}
            </p>
            <button className="text-white border-b border-neon pb-1 text-sm uppercase tracking-widest hover:text-neon transition-colors">
               Voir le projet &rarr;
            </button>
        </div>
        {/* Effet de lueur au survol */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-neon/30 transition-all duration-500"></div>
    </div>
);

const Portfolio = () => {
  return (
    <div className="py-20 px-8 md:px-20 bg-darkbg">
        <h2 className="text-4xl font-bold mb-16 border-l-4 border-neon pl-6">
            REALISATIONS<span className="text-gray-600">_LOG</span>
        </h2>

        <div className="grid gap-10">
            {/* PROJET 1 : MBANIE */}
            <ProjectCard 
                number="01"
                category="Gestion RH & Paie"
                title="MBANIE"
                description="Rh & Paie Manager. Votre application de gestion complète qui met fin à vos problèmes concernant la gestion de vos établissements."
            />
            
            {/* PROJET 2 : PHARMA */}
            <div className="grid md:grid-cols-2 gap-10">
                <ProjectCard 
                    number="02"
                    category="Gestion Pharmacie"
                    title="PharmaManager"
                    description="Plateforme web pour officines : gestion de stock, alertes péremption et tableau de bord des ventes en temps réel."
                />
                
                 {/* PROJET 3 : KUBU */}
                <ProjectCard 
                    number="03"
                    category="Gestion Transport"
                    title="KUBU"
                    description="Application de transport et logistique permettant le suivi en temps réel des flottes et la gestion des courses."
                />
            </div>
        </div>
    </div>
  );
};

export default Portfolio;