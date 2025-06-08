import { steps } from "../lib/steps";

export default function StepIndicator({
  currentStep,
}: {
  currentStep: number;
}) {
  return (
    <div className="flex gap-4">
      {steps.map((label, index) => {
        const stepNumber = index + 1;
        const isActive = currentStep === stepNumber;
        const isCompleted = currentStep > stepNumber;
        return (
          <div key={label}>
            <div
              className={`p-2 rounded-lg mx-auto text-white ${
                isCompleted
                  ? "bg-emerald-500"
                  : isActive
                  ? "bg-sky-500"
                  : "bg-slate-300"
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
