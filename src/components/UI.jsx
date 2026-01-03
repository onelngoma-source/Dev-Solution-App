import React from 'react';

// 1. LA CARTE EN VERRE STANDARD (Pour remplacer tous les blocs blancs)
export const GlassCard = ({ children, className = "" }) => (
    <div className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 hover:border-neon/30 transition-all duration-500 ${className}`}>
        {children}
    </div>
);

// 2. LE TITRE DE SECTION AVEC LE STYLE NÉON
export const SectionTitle = ({ subtitle, title, align = "center" }) => (
    <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
        {subtitle && (
            <span className="text-neon tracking-[0.2em] text-xs font-bold uppercase mb-4 block font-mono">
                // {subtitle}
            </span>
        )}
        <h2 className="text-4xl md:text-5xl font-bold">
            {title.split(" ").map((word, index) => (
                // Astuce : si un mot commence par un astérisque *, on le met en néon
                word.startsWith("*") ? <span key={index} className="text-neon">{word.substring(1)} </span> : `${word} `
            ))}
        </h2>
    </div>
);

// 3. UN COMPTEUR DE STATS NÉON
export const StatCounter = ({ number, label }) => (
    <div className="text-center">
        <div className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neon to-neon/50 mb-2">{number}</div>
        <div className="text-gray-400 text-xs uppercase tracking-widest font-mono">{label}</div>
    </div>
);