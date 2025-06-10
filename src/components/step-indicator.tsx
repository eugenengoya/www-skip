import { steps } from "../lib/steps";

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex flex-wrap gap-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;
        return (
          <div key={label} className="flex items-center">
            <div
              className={`p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm font-medium ${
                isCompleted
                  ? "bg-emerald-500 text-white"
                  : isActive
                  ? "bg-sky-500 text-white"
                  : "bg-slate-200 text-slate-600"
              }`}
            >
              {label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
