import { useState } from "react";
import StepIndicator from "./components/step-indicator";
import { steps } from "./lib/steps";
import { location } from "./lib/location";
import SkipSize from "./components/skip-size";
import type { skipdata } from "./lib/types";

function App() {
  const [step, setStep] = useState(2);
  const [selectedSkip, setSelectedSkip] = useState<skipdata | null>(null);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="bg-slate-50 h-screen">
      <div className="max-w-7xl mx-auto p-4">
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-sm p-4 flex flex-col gap-4 min-h-[calc(100vh-32px)]">
          {/* Header */}
          <div className="flex justify-between gap-4">
            <h1 className="font-bold text-xl sm:text-2xl text-gray-900">
              WWW Skip
            </h1>
            <div className="text-sm text-gray-500">
              Step {step} of {steps.length}
            </div>
          </div>

          {/* Step Indicator */}
          <StepIndicator currentStep={step} />

          {/* Step Content */}
          <div>
            {step === 1 && (
              <div className="flex items-center justify-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">
                  {steps[0]}
                </h2>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-2">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {steps[1]}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  Choose your skip size
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-4">
                  {location.map((skip) => (
                    <div
                      key={skip.id}
                      onClick={() => setSelectedSkip(skip)}
                      className={`cursor-pointer transition-all duration-200 ${
                        selectedSkip?.id === skip.id ? "bg-sky-100" : ""
                      }`}
                    >
                      <SkipSize skipdata={skip} />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {steps[2]}
                </h2>
                {selectedSkip && (
                  <div className="rounded-lg flex flex-col">
                    <p className="text-sm text-gray-600">
                      Selected Skip Details
                    </p>
                    <SkipSize skipdata={selectedSkip} />
                  </div>
                )}
              </div>
            )}

            {step === 4 && (
              <div className="flex items-center justify-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">
                  {steps[3]}
                </h2>
              </div>
            )}

            {step === 5 && (
              <div className="flex items-center justify-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">
                  {steps[4]}
                </h2>
              </div>
            )}

            {step === 6 && (
              <div className="flex items-center justify-center">
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">
                  {steps[5]}
                </h2>
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex mt-auto justify-between gap-4">
            <button
              onClick={prevStep}
              disabled={step === 1}
              className="font-medium px-4 py-2.5 text-sm bg-gray-100 text-gray-700 rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-400 hover:bg-gray-200 transition-colors duration-200"
            >
              Previous
            </button>
            <button
              onClick={nextStep}
              disabled={step === steps.length || (step === 2 && !selectedSkip)}
              className="font-medium px-4 py-2.5 text-sm bg-amber-500 text-white rounded-lg cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-300 hover:bg-amber-600 transition-colors duration-200"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
