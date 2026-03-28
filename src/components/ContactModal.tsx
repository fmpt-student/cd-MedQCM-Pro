import React from 'react';
import { X, Mail } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-8 text-center">
          <div className="bg-primary-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary-600" />
          </div>
          
          <h2 className="text-2xl font-bold text-slate-800 mb-2">Contactez-nous</h2>
          <p className="text-slate-600 mb-8">
            Une question ou une suggestion ? Écrivez-nous.
          </p>

          <a 
            href="mailto:linahousni18@gmail.com"
            className="inline-flex items-center gap-3 bg-primary-600 text-white px-8 py-4 rounded-xl hover:bg-primary-700 transition-all font-bold shadow-lg hover:shadow-primary-200 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            linahousni18@gmail.com
          </a>
          
          <p className="text-xs text-slate-400 mt-6 italic">
            Cliquez sur l'email pour ouvrir votre messagerie.
          </p>
        </div>
      </div>
    </div>
  );
};
