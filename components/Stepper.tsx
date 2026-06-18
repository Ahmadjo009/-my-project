import React from 'react';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
}

export const Stepper: React.FC<StepperProps> = ({ currentStep, totalSteps }) => {
  return (
    <div className="flex items-center justify-center w-full mb-8">
      {Array.from({ length: totalSteps }).map((_, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <React.Fragment key={stepNumber}>
            <div className="flex flex-col items-center">
              <div 
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-colors
                  ${isActive ? 'bg-primary-600 text-white shadow-md shadow-primary-500/30' : 
                    isCompleted ? 'bg-primary-100 text-primary-600' : 
                    'bg-slate-100 text-slate-400'}`}
              >
                {stepNumber}
              </div>
            </div>
            {stepNumber < totalSteps && (
              <div 
                className={`flex-1 h-1 mx-2 rounded-full transition-colors
                  ${isCompleted ? 'bg-primary-600' : 'bg-slate-100'}`}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
};
