import { contactItems } from '@/lib/items';
import { type ElementType } from 'react';
import type { SimpleIcon } from 'simple-icons';

const SocialConnect = () => {
  return (
    <div className="lg:min-h-screen bg-background flex flex-col items-center justify-center font-sans w-full">
      <div className="w-full max-w-3xl mx-auto text-center mb-16">
        <h1 className="text-6xl md:text-7xl font-bold mb-6">
          <span className="text-cr-color">
            Contatta
          </span>
          <span className="text-primary"> per la tua prima consulenza</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Vuoi avere maggiori informazioni su prezzi e manodopera? Puoi contattarci qui con questi tre metodi
        </p>
      </div>
      
      <div className="relative w-full max-w-2xl">
        {/* 3D Glowing Container */}
        <div 
          className={`rounded-3xl bg-linear-to-br from-gray-800/80 to-gray-900/90 border border-gray-700/50 shadow-2xl backdrop-blur-3xl overflow-hidden p-8 transition-all duration-500 hover:scale-105`}
          style={{
            boxShadow:  '0 0 50px rgba(139, 92, 246, 0.6), 0 0 80px rgba(124, 58, 237, 0.4)'
          }}
        >
          <div className="flex flex-wrap justify-center gap-8">

            {contactItems.map((item) => {
              // Verifichiamo se l'icona è SimpleIcon (ha la proprietà .path)
              const isSimpleIcon = typeof item.icon === 'object' && item.icon !== null && 'path' in item.icon;

              return (
                <a href={item.href} key={item.label} className={`social-icon ${item.class}`}>
                  <div className="icon-container">
                    {isSimpleIcon ? (
                      <svg
                        role="img"
                        viewBox="0 0 24 24"
                        fill="white"
                        style={{ width: '24px' }}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d={(item.icon as SimpleIcon).path} />
                      </svg>
                    ) : (
                      (() => {
                        const IconComponent = item.icon as ElementType;
                        return <IconComponent size={24} stroke={'white'}/>;
                      })()
                    )}
                  </div>
                  <span className="icon-label">{item.label}</span>
                </a>
              );
            })}
          </div>
        </div>
        
        {/* Floating Toggle Button */}
      </div>
    </div>
  );
};

export { SocialConnect };
