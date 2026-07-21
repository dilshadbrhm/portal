import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Users, Warehouse, TrendingUp, Cpu, Activity, BookOpen, ShieldAlert, Gauge, FileText, FlaskConical, Zap, ExternalLink 
} from 'lucide-react';

import logoAzen from './assets/logoazen.png';

const portalData = [
  { id: 1, title: 'İnsan Resursları', icon: Users, url: 'https://portal2.azerenerji.az' },
  { id: 2, title: 'Qaraj', icon: Warehouse, url: 'https://garage.azerenerji.az' },
  { id: 3, title: 'Bazar Operatoru', icon: TrendingUp, url: 'https://market.azerenerji.az' },
  { id: 4, title: 'SCADA', icon: Cpu, url: 'https://scada.azerenerji.az' },
  { id: 5, title: 'EOOMS', icon: Activity, url: 'https://eooms.azerenerji.az' },
  { id: 6, title: 'Telefon kitabçası', icon: BookOpen, url: 'https://phonebook.azerenerji.az' },
  { id: 7, title: 'Qəza Xidməti', icon: ShieldAlert, url: 'https://emergency.azerenerji.az' },
  { id: 8, title: 'Sayğac', icon: Gauge, url: 'https://meter.azerenerji.az' },
  { id: 9, title: 'Sənəd Dövriyyəsi', icon: FileText, url: 'https://doc.azerenerji.az' },
  { id: 10, title: 'Laboratoriya Mərkəzi', icon: FlaskConical, url: 'https://lab.azerenerji.az' },
  { id: 11, title: 'AzərEnerji ASC', icon: Zap, url: 'https://www.azerenerji.gov.az' }, // Sonuncu element ortada
];

export default function App() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-sky-50 via-blue-50/50 to-white text-slate-800 overflow-hidden flex flex-col items-center justify-between p-3 sm:p-5 font-sans">
      
      {/* Açıq Göy Fon Dekorativ Elementləri */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
      </div>

      {/* MAKSİMAL BÖYÜDÜLMÜŞ LOQO */}
      <header className="z-10 text-center my-1">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center items-center"
        >
          <img 
            src={logoAzen} 
            alt="AzərEnerji" 
            className="h-32 sm:h-48 md:h-56 lg:h-64 w-auto object-contain drop-shadow-md"
          />
        </motion.div>
      </header>

      {/* 5-Lİ QRID VƏ SONUNCU ELEMENT ORTADA */}
      <main className="z-10 w-full max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 my-auto px-2">
        {portalData.map((item, index) => {
          const Icon = item.icon;
          const isHovered = hoveredCard === item.id;
          const isLast = index === portalData.length - 1;

          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.02 }}
              whileHover={{ scale: 1.03, y: -2 }}
              onMouseEnter={() => setHoveredCard(item.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => window.open(item.url, '_blank')}
              className={`relative cursor-pointer group ${
                isLast ? 'col-span-2 sm:col-span-3 md:col-span-4 lg:col-span-1 lg:col-start-3' : ''
              }`}
            >
              <div className="h-28 sm:h-32 rounded-xl bg-white/90 border-2 border-sky-100 shadow-sm hover:shadow-xl hover:border-sky-500 backdrop-blur-md p-3 flex flex-col items-center justify-center text-center transition-all duration-300 overflow-hidden">
                
                {/* İkon */}
                <div className="p-2.5 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 group-hover:text-white group-hover:bg-sky-500 group-hover:border-sky-400 transition-all duration-300 mb-2 shadow-sm">
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>

                {/* Başlıq */}
                <h2 className="text-xs sm:text-sm font-bold text-slate-800 group-hover:text-sky-600 transition-colors z-10 leading-tight">
                  {item.title}
                </h2>

                {/* Tooltip */}
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute bottom-1.5 flex items-center gap-1 text-[10px] font-semibold text-sky-700 bg-sky-100/95 px-2 py-0.5 rounded-full border border-sky-300 z-20 shadow-sm"
                  >
                    <span>Yönləndirilir...</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </main>

      {/* FOOTER */}
      <footer className="z-10 text-[11px] text-slate-400 text-center my-1 font-medium">
        © AzərEnerji ASC - Bütün hüquqlar qorunur
      </footer>

    </div>
  );
}