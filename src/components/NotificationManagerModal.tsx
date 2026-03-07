import React, { useState } from 'react';
import { X, Plus, Trash2, Bell, Info, AlertTriangle, AlertCircle } from 'lucide-react';
import { AppNotification } from '../types';

interface NotificationManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onAdd: (notif: AppNotification) => void;
  onDelete: (id: string) => void;
}

export const NotificationManagerModal: React.FC<NotificationManagerModalProps> = ({
  isOpen,
  onClose,
  notifications,
  onAdd,
  onDelete
}) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'info' | 'warning' | 'urgent'>('info');

  if (!isOpen) return null;

  const handleAdd = () => {
    if (!message.trim()) return;
    
    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      type,
      message,
      date: new Date().toLocaleDateString('fr-FR')
    };
    
    onAdd(newNotif);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="bg-primary-100 p-2 rounded-lg">
              <Bell className="text-primary-600 w-5 h-5" />
            </div>
            <h2 className="text-xl font-bold text-slate-800">Gestion des Annonces</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors">
            <X className="w-5 h-5 text-slate-500" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-8">
          {/* Form Section */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Nouvelle Annonce</h3>
            <div className="space-y-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-slate-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary-500 outline-none min-h-[80px]"
                  placeholder="Tapez votre annonce ici..."
                />
              </div>
              
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex-1 min-w-[200px]">
                  <label className="block text-sm font-medium text-slate-700 mb-1">Type d'alerte</label>
                  <div className="flex gap-2">
                    {(['info', 'warning', 'urgent'] as const).map((t) => (
                      <button
                        key={t}
                        onClick={() => setType(t)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-3 rounded-lg border text-xs font-bold transition-all ${
                          type === t 
                            ? 'bg-white border-primary-500 text-primary-600 shadow-sm ring-2 ring-primary-500/10' 
                            : 'bg-slate-100 border-transparent text-slate-500 hover:bg-slate-200'
                        }`}
                      >
                        {t === 'info' && <Info className="w-3 h-3" />}
                        {t === 'warning' && <AlertTriangle className="w-3 h-3" />}
                        {t === 'urgent' && <AlertCircle className="w-3 h-3" />}
                        {t.charAt(0).toUpperCase() + t.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>
                <button
                  onClick={handleAdd}
                  disabled={!message.trim()}
                  className="mt-6 bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all font-bold flex items-center gap-2 shadow-md disabled:opacity-50 disabled:shadow-none"
                >
                  <Plus className="w-4 h-4" /> Publier
                </button>
              </div>
            </div>
          </section>

          {/* List Section */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-4">Annonces Actives</h3>
            <div className="space-y-3">
              {notifications.length === 0 ? (
                <div className="text-center py-8 text-slate-400 italic bg-slate-50 rounded-xl border border-dashed border-slate-200">
                  Aucune annonce active pour le moment.
                </div>
              ) : (
                notifications.map((notif) => (
                  <div key={notif.id} className="flex items-center gap-4 p-4 bg-white border border-slate-200 rounded-xl hover:shadow-md transition-all group">
                    <div className={`p-2 rounded-lg shrink-0 ${
                      notif.type === 'urgent' ? 'bg-red-100 text-red-600' :
                      notif.type === 'warning' ? 'bg-amber-100 text-amber-600' :
                      'bg-blue-100 text-blue-600'
                    }`}>
                      {notif.type === 'urgent' ? <AlertCircle className="w-5 h-5" /> :
                       notif.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> :
                       <Info className="w-5 h-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-slate-700 line-clamp-2">{notif.message}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase mt-1 block">{notif.date}</span>
                    </div>
                    <button
                      onClick={() => onDelete(notif.id)}
                      className="p-2 text-slate-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all opacity-0 group-hover:opacity-100"
                      title="Supprimer l'annonce"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
