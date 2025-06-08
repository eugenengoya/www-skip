import { useState } from "react";
import StepIndicator from "./components/step-indicator";
import { steps } from "./lib/steps";
import { location } from "./lib/location";
import SkipSize from "./components/skip-size";

function App() {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <>
      <StepIndicator currentStep={step} />
      <h1 className="font-bold text-lg">WWW Skip</h1>
      {step === 1 && (
        <div>
          <h2>{steps[0]}</h2>
        </div>
      )}
      {step === 2 && (
        <div className="flex flex-col gap-4">
          <h2 className="font-medium">{steps[1]}</h2>
          <p className="font-medium">Choose your skip size</p>
          {location.map((skip) => (
            <div
              key={skip.id}
              className="gap-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            >
              <SkipSize skipdata={skip} />
            </div>
          ))}
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>{steps[2]}</h2>
        </div>
      )}
      <div className="space-x-4">
        <button
          onClick={prevStep}
          disabled={step === 1}
          className="p-2 bg-amber-400 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={step === steps.length}
          className="p-2 bg-amber-500 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;
