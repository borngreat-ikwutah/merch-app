import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CircleNotch,
} from "@phosphor-icons/react";
import { Button } from "~/components/ui/button";

interface StepNavigationProps {
  currentStep: number;
  totalSteps: number;
  isStepValid: boolean;
  isSubmitting: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
  onSkip: () => void;
}

export const StepNavigation = ({
  currentStep,
  totalSteps,
  isStepValid,
  isSubmitting,
  onBack,
  onNext,
  onSubmit,
  onSkip,
}: StepNavigationProps) => {
  const isLastStep = currentStep === totalSteps;

  return (
    <motion.div
      className="mt-10 space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      <div className="flex items-center justify-between pt-6 border-t border-gray-100">
        {currentStep > 1 ? (
          <motion.div whileHover={{ x: -2 }} whileTap={{ scale: 0.97 }}>
            <Button
              variant="ghost"
              onClick={onBack}
              className="gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="h-4 w-4" weight="bold" />
              Back
            </Button>
          </motion.div>
        ) : (
          <div />
        )}

        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
          {isLastStep ? (
            <Button
              onClick={onSubmit}
              disabled={!isStepValid || isSubmitting}
              className="gap-2 bg-black hover:bg-gray-800 text-white px-6 h-11"
            >
              {isSubmitting ? (
                <>
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      ease: "linear",
                    }}
                    className="inline-flex"
                  >
                    <CircleNotch className="h-4 w-4" weight="bold" />
                  </motion.span>
                  Setting up...
                </>
              ) : (
                <>
                  Complete Setup
                  <Check className="h-4 w-4" weight="bold" />
                </>
              )}
            </Button>
          ) : (
            <Button
              onClick={onNext}
              disabled={!isStepValid}
              className="gap-2 bg-black hover:bg-gray-800 text-white px-6 h-11"
            >
              Continue
              <ArrowRight className="h-4 w-4" weight="bold" />
            </Button>
          )}
        </motion.div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button
          type="button"
          onClick={onSkip}
          className="text-sm text-gray-400 hover:text-gray-600 transition-colors"
        >
          Skip for now
        </button>
      </motion.div>
    </motion.div>
  );
};
