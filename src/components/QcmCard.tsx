import React, { useState } from 'react';
import { Question } from '../types';
import { CheckCircle2, XCircle, HelpCircle, ChevronDown, ChevronUp, Square, CheckSquare } from 'lucide-react';

interface QcmCardProps {
  question: Question;
  index: number;
  // Props optionnelles pour le mode Test (Contrôlé)
  isTestMode?: boolean;
  selectedAnswers?: number[]; // Tableau d'indices maintenant
  onAnswer?: (indices: number[]) => void;
  showFeedback?: boolean;
}

export const QcmCard: React.FC<QcmCardProps> = ({ 
  question, 
  index, 
  isTestMode = false,
  selectedAnswers = [],
  onAnswer,
  showFeedback = true
}) => {
  // État interne pour le mode révision standard (tableau d'indices)
  const [internalSelected, setInternalSelected] = useState<number[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // En mode Test, on utilise les props du parent. Sinon, l'état interne.
  const currentSelection = isTestMode ? (selectedAnswers || []) : internalSelected;
  
  // Le feedback est affiché si :
  // 1. Mode Révision : L'utilisateur a cliqué sur "Valider" (isSubmitted)
  // 2. Mode Test : Le parent indique showFeedback (fin du test)
  const shouldShowFeedback = isTestMode ? showFeedback : isSubmitted;

  const toggleSelect = (optionIndex: number) => {
    if (shouldShowFeedback && !isTestMode) return; // Bloqué si déjà validé en mode révision

    let newSelection: number[];
    if (currentSelection.includes(optionIndex)) {
      newSelection = currentSelection.filter(i => i !== optionIndex);
    } else {
      newSelection = [...currentSelection, optionIndex];
    }

    if (isTestMode) {
       if (!showFeedback && onAnswer) {
         onAnswer(newSelection);
       }
    } else {
       setInternalSelected(newSelection);
    }
  };

  const handleValidate = () => {
    setIsSubmitted(true);
    // Vérifier si c'est incorrect pour ouvrir l'explication auto (optionnel)
    if (!isFullyCorrect()) {
      setShowExplanation(true);
    }
  };

  const handleReset = () => {
    setInternalSelected([]);
    setIsSubmitted(false);
    setShowExplanation(false);
  };

  // Logique de validation : Doit avoir la même longueur ET contenir les mêmes indices
  const isFullyCorrect = () => {
    if (currentSelection.length !== question.correctIndices.length) return false;
    return question.correctIndices.every(i => currentSelection.includes(i));
  };

  const isCorrect = isFullyCorrect();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden transition-all hover:shadow-md mb-6">
      <div className="p-5 border-b border-slate-100 bg-slate-50/50 flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-semibold text-slate-800 text-lg flex gap-3">
            <span className="flex items-center justify-center bg-slate-200 text-slate-600 text-xs font-bold rounded w-6 h-6 min-w-[1.5rem] mt-1">
              {index + 1}
            </span>
            <span>
                {question.text}
                {question.correctIndices.length > 1 && (
                    <span className="block text-xs font-normal text-slate-500 mt-1">(Plusieurs réponses possibles)</span>
                )}
            </span>
          </h3>
        </div>
        
        {shouldShowFeedback && (
            <div className={`ml-3 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shrink-0 ${isCorrect ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {isCorrect ? <><CheckCircle2 className="w-4 h-4" /> Correct</> : <><XCircle className="w-4 h-4" /> Incorrect</>}
            </div>
        )}
      </div>

      <div className="p-5 space-y-3">
        {question.options.map((option, idx) => {
          const isSelected = currentSelection.includes(idx);
          const isRealCorrect = question.correctIndices.includes(idx);
          
          let buttonStyle = "border-slate-200 hover:bg-slate-50 hover:border-slate-300";
          let icon = isSelected 
             ? <CheckSquare className="w-5 h-5 text-primary-600" /> 
             : <Square className="w-5 h-5 text-slate-300" />;

          if (shouldShowFeedback) {
            // Mode Résultat
            if (isRealCorrect) {
               // C'était une bonne réponse
               if (isSelected) {
                   // Et on l'a trouvée -> Vert
                   buttonStyle = "bg-green-50 border-green-200 text-green-800 ring-1 ring-green-500/20"; 
                   icon = <CheckCircle2 className="w-5 h-5 text-green-600" />;
               } else {
                   // On l'a manquée -> Jaune/Vert indicatif
                   buttonStyle = "bg-green-50/50 border-green-200/50 text-green-800/70 border-dashed"; 
                   icon = <CheckCircle2 className="w-5 h-5 text-green-600/50" />;
               }
            } else if (isSelected) {
               // On a coché mais c'est faux -> Rouge
               buttonStyle = "bg-red-50 border-red-200 text-red-800 ring-1 ring-red-500/20";
               icon = <XCircle className="w-5 h-5 text-red-600" />;
            } else {
               // Pas coché et pas correct -> Grisé
               buttonStyle = "opacity-50 border-transparent bg-slate-50 grayscale";
               icon = <Square className="w-5 h-5 text-slate-200" />;
            }
          } else {
            // Mode interactif
            if (isSelected) {
               buttonStyle = "bg-primary-50 border-primary-200 text-primary-800 ring-1 ring-primary-500/20";
            }
          }

          return (
            <button
              key={idx}
              onClick={() => toggleSelect(idx)}
              disabled={shouldShowFeedback && !isTestMode} 
              className={`w-full text-left p-4 rounded-lg border flex items-center justify-between transition-all duration-200 group ${buttonStyle}`}
            >
              <span className="font-medium pr-4">{option}</span>
              {icon}
            </button>
          );
        })}
      </div>

      {/* Footer avec boutons de validation (seulement en mode révision standard) */}
      {!isTestMode && (
         <div className="px-5 pb-5 flex gap-3">
             {!isSubmitted ? (
                 <button 
                    onClick={handleValidate}
                    disabled={currentSelection.length === 0}
                    className="bg-primary-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ml-auto"
                 >
                    Valider
                 </button>
             ) : (
                 <button 
                    onClick={handleReset}
                    className="text-slate-500 hover:text-primary-600 text-sm font-medium px-4 py-2 ml-auto transition-colors"
                 >
                    Réessayer
                 </button>
             )}
         </div>
      )}

      {shouldShowFeedback && (
        <div className="bg-slate-50 border-t border-slate-100">
           <button 
             onClick={() => setShowExplanation(!showExplanation)}
             className="w-full flex items-center justify-between p-4 text-sm text-slate-500 hover:text-primary-600 font-medium transition-colors"
           >
             <span className="flex items-center gap-2">
               <HelpCircle className="w-4 h-4" />
               {showExplanation ? "Masquer l'explication" : "Voir l'explication"}
             </span>
             {showExplanation ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
           </button>
           
           {showExplanation && (
             <div className="p-4 pt-0 text-slate-600 text-sm leading-relaxed border-t border-dashed border-slate-200 bg-blue-50/30">
               <strong className="text-slate-800 block mb-1">Explication :</strong>
               {question.explanation || "Aucune explication disponible pour cette question."}
             </div>
           )}
        </div>
      )}
    </div>
  );
};