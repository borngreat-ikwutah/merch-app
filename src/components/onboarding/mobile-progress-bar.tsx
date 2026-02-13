import { motion } from "framer-motion";

interface MobileProgressBarProps {
  currentStep: number;
  totalSteps: number;
}

export const MobileProgressBar = ({
  currentStep,
  totalSteps,
}: MobileProgressBarProps) => {
  return (
    <div className="lg:hidden px-6 py-4">
      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, i) => i + 1).map((step) => (
          <div key={step} className="h-1.5 flex-1 rounded-full bg-gray-200 overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-black"
              initial={{ width: 0 }}
              animate={{ width: step <= currentStep ? "100%" : "0%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            />
          </div>
        ))}
      </div>
      <motion.p
        key={currentStep}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="mt-2 text-xs text-gray-400 text-center"
      >
        Step {currentStep} of {totalSteps}
      </motion.p>
    </div>
  );
};
