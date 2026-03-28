import React from 'react';
import { LayoutDashboard, GraduationCap, Mail, BellPlus } from 'lucide-react';
import { CONTACT_EMAIL } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
  onNavigateHome: () => void;
  onContactClick: () => void;
  onManageNotifications: () => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, onNavigateHome, onContactClick, onManageNotifications }) => {
  return (
    <div className="flex h-full w-full bg-slate-50">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-slate-200 h-full shadow-sm">
        <div className="p-6 border-b border-slate-100 flex items-center gap-2 cursor-pointer" onClick={onNavigateHome}>
          <div className="bg-primary-600 p-2 rounded-lg">
             <GraduationCap className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">MedQCM<span className="text-primary-600">Pro</span></h1>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
           <button onClick={onNavigateHome} className="flex items-center gap-3 w-full p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors font-medium text-sm">
             <LayoutDashboard className="w-5 h-5" />
             Tableau de bord
           </button>
           
           <div className="pt-4 pb-2">
             <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Navigation</p>
           </div>
           
           <div className="px-3 text-sm text-slate-500 italic">
             Sélectionnez une année dans le tableau de bord pour commencer.
           </div>
           
           <div className="pt-4 pb-2">
             <p className="px-3 text-xs font-semibold text-slate-400 uppercase tracking-wider">Administration</p>
           </div>
           <button onClick={onContactClick} className="flex items-center gap-3 w-full p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors font-medium text-sm">
             <Mail className="w-5 h-5" />
             Contactez-nous
           </button>
           <button onClick={onManageNotifications} className="flex items-center gap-3 w-full p-3 rounded-lg text-slate-600 hover:bg-slate-50 hover:text-primary-600 transition-colors font-medium text-sm">
             <BellPlus className="w-5 h-5" />
             Gestion des Annonces
           </button>

        </nav>

        <div className="p-4 border-t border-slate-100 bg-slate-50">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 px-1">Support</p>
          <div className="space-y-1">
            <p className="text-xs text-slate-600 px-1 leading-relaxed">
              Une question ou une suggestion ? Écrivez-nous.
            </p>
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="flex items-center gap-2 w-full text-primary-600 p-2 rounded-lg hover:bg-primary-50 transition-all text-xs font-bold truncate"
              title="Cliquez pour envoyer un email"
            >
              <Mail className="w-3.5 h-3.5 shrink-0" />
              {CONTACT_EMAIL}
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Mobile Header */}
        <header className="md:hidden bg-white h-16 border-b border-slate-200 flex items-center justify-between px-4">
           <div className="flex items-center gap-2 font-bold text-slate-800">
              <GraduationCap className="text-primary-600 w-6 h-6" />
              MedQCM
           </div>
           <div className="flex gap-1">
             <button 
               onClick={onManageNotifications} 
               className="text-slate-600 p-2 hover:bg-slate-100 rounded-full transition-colors"
               title="Annonces"
             >
               <BellPlus className="w-6 h-6" />
             </button>
             <a 
               href={`mailto:${CONTACT_EMAIL}`}
               className="text-primary-600 p-2 hover:bg-primary-50 rounded-full transition-colors flex items-center gap-1"
               title="Contact"
             >
               <Mail className="w-6 h-6" />
               <span className="text-xs font-bold md:hidden">Contact</span>
             </a>
           </div>
        </header>

        <div className="flex-1 overflow-auto p-4 md:p-8 relative">
          {children}
        </div>
      </main>
    </div>
  );
};