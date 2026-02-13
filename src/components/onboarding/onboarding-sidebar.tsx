import { motion, AnimatePresence } from "framer-motion";
import { Image } from "@unpic/react";
import {
  Check,
  UserCircle,
  Storefront,
  Package,
  ShoppingBag,
  Heart,
} from "@phosphor-icons/react";
import type { UserRole } from "./types";
import type { IconProps } from "@phosphor-icons/react";
import type { ComponentType } from "react";

interface SidebarStep {
  number: number;
  title: string;
}

interface OnboardingSidebarProps {
  role: UserRole | null;
  currentStep: number;
  steps: readonly SidebarStep[];
}

const ROLE_CONFIG: Record<
  UserRole,
  {
    headline: string;
    subtitle: string;
    image: string;
    stepIcons: ComponentType<IconProps>[];
  }
> = {
  seller: {
    headline: "Let's set up your merch store",
    subtitle:
      "Just a few quick steps to personalize your experience and start selling with MerchWay.",
    image: "https://images.pexels.com/photos/5632402/pexels-photo-5632402.jpeg",
    stepIcons: [UserCircle, Storefront, Package],
  },
  buyer: {
    headline: "Find merch you'll love",
    subtitle:
      "Tell us what you're into and we'll curate the best merchandise just for you.",
    image: "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg",
    stepIcons: [UserCircle, Heart],
  },
};

const DEFAULT_CONFIG = {
  headline: "Welcome to MerchWay",
  subtitle:
    "Your one-stop platform for custom merchandise — whether you're buying or selling.",
  image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
};

export const OnboardingSidebar = ({
  role,
  currentStep,
  steps,
}: OnboardingSidebarProps) => {
  const config = role ? ROLE_CONFIG[role] : null;
  const headline = config?.headline ?? DEFAULT_CONFIG.headline;
  const subtitle = config?.subtitle ?? DEFAULT_CONFIG.subtitle;
  const imageSrc = config?.image ?? DEFAULT_CONFIG.image;

  return (
    <div className="relative hidden w-full bg-gray-100 lg:block lg:w-1/2 xl:w-3/5 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={imageSrc}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image
            src={imageSrc}
            alt="MerchWay Onboarding"
            layout="fullWidth"
            className="h-full w-full object-cover"
            fetchPriority="high"
            loading="eager"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-linear-to-r from-black/65 to-black/20" />

      <div className="absolute inset-0 flex flex-col justify-center px-12 xl:px-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={headline}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="text-4xl xl:text-5xl font-bold text-white mb-4 max-w-lg leading-tight">
              {headline}
            </h1>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </AnimatePresence>

        {role && steps.length > 0 && (
          <motion.div
            className="mt-12 space-y-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            {steps.map((step, index) => {
              const isCompleted = currentStep > step.number;
              const isCurrent = currentStep === step.number;
              const StepIcon = config?.stepIcons[index] ?? ShoppingBag;

              return (
                <motion.div
                  key={step.number}
                  className="flex items-center gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.3 + index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full"
                    animate={{
                      backgroundColor: isCompleted
                        ? "rgb(34 197 94)"
                        : isCurrent
                          ? "rgb(255 255 255)"
                          : "rgba(255 255 255 / 0.15)",
                      scale: isCurrent ? 1.05 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <AnimatePresence mode="wait">
                      {isCompleted ? (
                        <motion.span
                          key="check"
                          initial={{ scale: 0, rotate: -90 }}
                          animate={{ scale: 1, rotate: 0 }}
                          exit={{ scale: 0, rotate: 90 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          className="inline-flex"
                        >
                          <Check
                            size={20}
                            weight="bold"
                            className="text-white"
                          />
                        </motion.span>
                      ) : (
                        <motion.span
                          key="icon"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 20,
                          }}
                          className="inline-flex"
                        >
                          <StepIcon
                            size={20}
                            weight={isCurrent ? "fill" : "regular"}
                            className={
                              isCurrent ? "text-black" : "text-white/50"
                            }
                          />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  <motion.span
                    className="text-sm font-medium"
                    animate={{
                      color:
                        isCurrent || isCompleted
                          ? "rgb(255 255 255)"
                          : "rgba(255 255 255 / 0.5)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {step.title}
                  </motion.span>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </div>
  );
};
