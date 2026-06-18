import React from 'react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8 px-2" dir="ltr">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300
                  ${isActive ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-110' : 
                    isCompleted ? 'bg-indigo-100 text-indigo-600' : 
                    'bg-white/50 text-indigo-300 border border-white/40'}`}
              >
                {stepNumber}
              </div>
            </div>
            {stepNumber < totalSteps && (
              <div 
                className={`flex-1 h-1 mx-2 rounded-full transition-colors duration-300
                  ${isCompleted ? 'bg-indigo-400' : 'bg-indigo-100/50'}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
