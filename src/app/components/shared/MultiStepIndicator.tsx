import { Check } from "lucide-react";
import type { StepConfig } from "../../types/onboarding";

interface MultiStepIndicatorProps {
  steps: StepConfig[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
}

export function MultiStepIndicator({ steps, currentStep, onStepClick }: MultiStepIndicatorProps) {
  return (
    <div className="w-full bg-card border border-border rounded-[4px] px-6 py-4">
      <div className="flex items-center">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;
          const isClickable = onStepClick && index <= currentStep;

          return (
            <div key={step.id} className="flex items-center flex-1 last:flex-none">
              <button
                type="button"
                onClick={() => isClickable && onStepClick?.(index)}
                disabled={!isClickable}
                className={`flex items-center gap-3 group ${isClickable ? 'cursor-pointer' : 'cursor-default'}`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                    isCompleted
                      ? 'bg-[#1756A0] text-white'
                      : isCurrent
                        ? 'bg-[#1756A0] text-white'
                        : 'bg-[#F3F3F5] text-[#706E6B] border border-[#D8D8D8]'
                  }`}
                >
                  {isCompleted ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <span className="text-xs">{index + 1}</span>
                  )}
                </div>
                <div className="text-left hidden lg:block">
                  <p
                    className={`text-xs leading-tight ${
                      isCurrent ? 'text-[#1756A0]' : isCompleted ? 'text-[#1A1A2E]' : 'text-[#5A6072]'
                    }`}
                  >
                    Step {index + 1}
                  </p>
                  <p
                    className={`text-sm leading-tight ${
                      isCurrent || isCompleted ? 'text-[#1A1A2E]' : 'text-[#5A6072]'
                    }`}
                  >
                    {step.label}
                  </p>
                </div>
              </button>
              {index < steps.length - 1 && (
                <div className="flex-1 mx-4">
                  <div
                    className={`h-[2px] w-full ${
                      isCompleted ? 'bg-[#1756A0]' : 'bg-[#D0D4DC]'
                    }`}
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}