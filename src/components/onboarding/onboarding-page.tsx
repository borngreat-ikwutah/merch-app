import { useState, useCallback } from "react";
import { useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { OnboardingLayout } from "./onboarding-layout";
import { OnboardingSidebar } from "./onboarding-sidebar";
import { MobileProgressBar } from "./mobile-progress-bar";
import { RoleSelection } from "./role-selection";
import { ProfileStep } from "./profile-step";
import { SellerBusinessStep } from "./seller-business-step";
import { SellerPreferencesStep } from "./seller-preferences-step";
import { BuyerInterestsStep } from "./buyer-interests-step";
import { StepNavigation } from "./step-navigation";
import { BUYER_STEPS, SELLER_STEPS, SLIDE_VARIANTS } from "./constants";
import type {
  UserRole,
  UserProfile,
  BusinessInfo,
  SellerPreferences,
  BuyerInterests,
} from "./types";

export const OnboardingPage = () => {
  const navigate = useNavigate();

  const [role, setRole] = useState<UserRole | null>(null);
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [userProfile, setUserProfile] = useState<UserProfile>({
    displayName: "",
    phone: "",
  });

  const [businessInfo, setBusinessInfo] = useState<BusinessInfo>({
    businessName: "",
    businessType: "",
    website: "",
  });

  const [sellerPreferences, setSellerPreferences] = useState<SellerPreferences>(
    {
      productCategories: [],
      orderVolume: "",
    },
  );

  const [buyerInterests, setBuyerInterests] = useState<BuyerInterests>({
    categories: [],
    budget: "",
  });

  const steps = role === "seller" ? SELLER_STEPS : BUYER_STEPS;
  const totalSteps = steps.length;

  const handleRoleSelect = useCallback((selectedRole: UserRole) => {
    setRole(selectedRole);
    setDirection(1);
    setCurrentStep(1);
  }, []);

  const handleNext = useCallback(() => {
    if (currentStep < totalSteps) {
      setDirection(1);
      setCurrentStep((prev) => prev + 1);
    }
  }, [currentStep, totalSteps]);

  const handleBack = useCallback(() => {
    setDirection(-1);
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    } else {
      setRole(null);
      setCurrentStep(0);
    }
  }, [currentStep]);

  const handleSkip = useCallback(() => {
    navigate({ to: "/" });
  }, [navigate]);

  const handleSubmit = useCallback(async () => {
    setIsSubmitting(true);

    try {
      const payload =
        role === "seller"
          ? { role, userProfile, businessInfo, sellerPreferences }
          : { role, userProfile, buyerInterests };

      // TODO: Save onboarding data to backend
      console.log("Onboarding data:", payload);

      await new Promise((resolve) => setTimeout(resolve, 1500));

      navigate({ to: "/" });
    } catch (error) {
      console.error("Onboarding error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }, [
    role,
    userProfile,
    businessInfo,
    sellerPreferences,
    buyerInterests,
    navigate,
  ]);

  const isCurrentStepValid = useCallback((): boolean => {
    if (currentStep === 0) return false;

    if (currentStep === 1) {
      return userProfile.displayName.trim().length >= 2;
    }

    if (role === "seller") {
      if (currentStep === 2) {
        return (
          businessInfo.businessName.trim().length >= 2 &&
          businessInfo.businessType !== ""
        );
      }
      if (currentStep === 3) {
        return (
          sellerPreferences.productCategories.length > 0 &&
          sellerPreferences.orderVolume !== ""
        );
      }
    }

    if (role === "buyer") {
      if (currentStep === 2) {
        return (
          buyerInterests.categories.length > 0 && buyerInterests.budget !== ""
        );
      }
    }

    return false;
  }, [
    currentStep,
    role,
    userProfile,
    businessInfo,
    sellerPreferences,
    buyerInterests,
  ]);

  const stepLabel =
    currentStep === 0
      ? "Getting Started"
      : `Step ${currentStep} of ${totalSteps}`;

  const renderStep = () => {
    if (currentStep === 0) {
      return <RoleSelection onSelect={handleRoleSelect} />;
    }

    if (currentStep === 1) {
      return <ProfileStep profile={userProfile} onChange={setUserProfile} />;
    }

    if (role === "seller") {
      if (currentStep === 2) {
        return (
          <SellerBusinessStep
            businessInfo={businessInfo}
            onChange={setBusinessInfo}
          />
        );
      }
      if (currentStep === 3) {
        return (
          <SellerPreferencesStep
            preferences={sellerPreferences}
            onChange={setSellerPreferences}
          />
        );
      }
    }

    if (role === "buyer" && currentStep === 2) {
      return (
        <BuyerInterestsStep
          interests={buyerInterests}
          onChange={setBuyerInterests}
        />
      );
    }

    return null;
  };

  return (
    <OnboardingLayout
      stepLabel={stepLabel}
      sidebar={
        <OnboardingSidebar
          role={role}
          currentStep={currentStep}
          steps={currentStep === 0 ? [] : steps}
        />
      }
      progressBar={
        currentStep > 0 ? (
          <MobileProgressBar
            currentStep={currentStep}
            totalSteps={totalSteps}
          />
        ) : (
          <></>
        )
      }
    >
      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={`${role}-${currentStep}`}
          custom={direction}
          variants={SLIDE_VARIANTS}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {renderStep()}
        </motion.div>
      </AnimatePresence>

      {currentStep > 0 && (
        <StepNavigation
          currentStep={currentStep}
          totalSteps={totalSteps}
          isStepValid={isCurrentStepValid()}
          isSubmitting={isSubmitting}
          onBack={handleBack}
          onNext={handleNext}
          onSubmit={handleSubmit}
          onSkip={handleSkip}
        />
      )}
    </OnboardingLayout>
  );
};
