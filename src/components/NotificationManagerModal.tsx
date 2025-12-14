import React, { useState } from 'react';
import { X, Plus, Trash2, Bell } from 'lucide-react';
import { AppNotification } from '../types';

interface NotificationManagerModalProps {
  isOpen: boolean;
  onClose: () => void;
  notifications: AppNotification[];
  onAdd: (notif: AppNotification) => void;
  onDelete: (id: string) => void;
}

export const NotificationManagerModal: React.FC<NotificationManagerModalProps> = ({ 
  isOpen, onClose, notifications, onAdd, onDelete 
}) => {
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'info' | 'warning' | 'urgent'>('info');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const newNotif: AppNotification = {
      id: `notif-${Date.now()}`,
      message: message,
      type: type,
      date: new Date().toLocaleDateString('fr-FR')
    };

    onAdd(newNotif);
    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden relative flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-100 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-lg shadow-sm">
                    <Bell className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-slate-800">Gestion des Annonces</h2>
                    <p className="text-xs text-slate-500">Ajoutez des messages visibles sur l'accueil</p>
                </div>
            </div>
            <button onClick={onClose} className="text-slate-400 hover:text-slate-600 transition-colors">
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto flex-1">
            
            {/* Add Form */}
            <form onSubmit={handleSubmit} className="mb-8 bg-slate-50 p-4 rounded-xl border border-slate-200">
                <h3 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <Plus className="w-4 h-4" /> Nouvelle Annonce
                </h3>
                <div className="space-y-3">
                    <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Type de message</label>
                        <div className="flex gap-2">
                            <button 
                                type="button"
                                onClick={() => setType('info')}
                                className={`flex-1 py-2 text-xs font-medium rounded-lg border ${type === 'info' ? 'bg-blue-50 border-blue-200 text-blue-700 ring-1 ring-blue-500/20' : 'bg-white border-slate-200 text-slate-600'}`}
                            >
                                Info
                            </button>
                            <button 
                                type="button"
                                onClick={() => setType('warning')}
                                className={`flex-1 py-2 text-xs font-medium rounded-lg border ${type === 'warning' ? 'bg-amber-50 border-amber-200 text-amber-700 ring-1 ring-amber-500/20' : 'bg-white border-slate-200 text-slate-600'}`}
                            >
                                Attention
                            </button>
                            <button 
                                type="button"
                                onClick={() => setType('urgent')}
                                className={`flex-1 py-2 text-xs font-medium rounded-lg border ${type === 'urgent' ? 'bg-red-50 border-red-200 text-red-700 ring-1 ring-red-500/20' : 'bg-white border-slate-200 text-slate-600'}`}
                            >
                                Urgent
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-medium text-slate-500 mb-1">Message</label>
                        <textarea 
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            placeholder="Votre annonce ici..."
                            className="w-full border border-slate-300 rounded-lg p-2 text-sm focus:ring-2 focus:ring-primary-500 outline-none"
                            rows={3}
                        />
                    </div>
                    <button 
                        type="submit"
                        disabled={!message.trim()}
                        className="w-full bg-primary-600 text-white py-2 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 transition-colors"
                    >
                        Publier l'annonce
                    </button>
                </div>
            </form>

            {/* List */}
            <div>
                <h3 className="text-sm font-semibold text-slate-700 mb-3">Annonces Actives ({notifications.length})</h3>
                <div className="space-y-2">
                    {notifications.length === 0 ? (
                        <p className="text-sm text-slate-400 italic text-center py-4">Aucune annonce active.</p>
                    ) : (
                        notifications.map(notif => (
                            <div key={notif.id} className="flex items-center gap-3 p-3 bg-white border border-slate-100 rounded-lg shadow-sm group">
                                <div className={`w-2 h-2 rounded-full shrink-0 ${
                                    notif.type === 'urgent' ? 'bg-red-500' : 
                                    notif.type === 'warning' ? 'bg-amber-500' : 'bg-blue-500'
                                }`} />
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm text-slate-800 line-clamp-2">{notif.message}</p>
                                    <p className="text-xs text-slate-400">{notif.date}</p>
                                </div>
                                <button 
                                    onClick={() => onDelete(notif.id)}
                                    className="p-2 text-slate-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                    title="Supprimer"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};