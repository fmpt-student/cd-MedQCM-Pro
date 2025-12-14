import React from 'react';
import { AppNotification } from '../types';
import { Info, AlertTriangle, Siren, X } from 'lucide-react';

interface NotificationBannerProps {
  notifications: AppNotification[];
  onDismiss?: (id: string) => void;
}

export const NotificationBanner: React.FC<NotificationBannerProps> = ({ notifications, onDismiss }) => {
  if (notifications.length === 0) return null;

  const getIcon = (type: string) => {
    switch (type) {
      case 'urgent': return <Siren className="w-5 h-5 text-red-600" />;
      case 'warning': return <AlertTriangle className="w-5 h-5 text-amber-600" />;
      default: return <Info className="w-5 h-5 text-blue-600" />;
    }
  };

  const getStyles = (type: string) => {
    switch (type) {
      case 'urgent': return 'bg-red-50 border-red-200 text-red-900';
      case 'warning': return 'bg-amber-50 border-amber-200 text-amber-900';
      default: return 'bg-blue-50 border-blue-200 text-blue-900';
    }
  };

  return (
    <div className="space-y-3 mb-8 animate-in slide-in-from-top-4 duration-500">
      {notifications.map((notif) => (
        <div 
          key={notif.id} 
          className={`flex items-start p-4 rounded-lg border shadow-sm ${getStyles(notif.type)} relative group`}
        >
          <div className="flex-shrink-0 mr-3 mt-0.5">
            {getIcon(notif.type)}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium">{notif.message}</p>
            <p className="text-xs opacity-75 mt-1">{notif.date}</p>
          </div>
          {onDismiss && (
            <button 
              onClick={(e) => { e.stopPropagation(); onDismiss(notif.id); }}
              className="absolute top-2 right-2 p-1 rounded-full opacity-0 group-hover:opacity-100 hover:bg-black/5 transition-all"
            >
              <X className="w-3 h-3" />
            </button>
          )}
        </div>
      ))}
    </div>
  );
};