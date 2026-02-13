import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle,
  XCircle,
  CircleNotch,
} from "@phosphor-icons/react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "~/components/ui/dialog";
import { Button } from "~/components/ui/button";
import { authClient } from "~/lib/auth-client";

interface OauthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

type ModalState = "consent" | "loading" | "success" | "error";

const FADE_SCALE = {
  initial: { opacity: 0, scale: 0.96, y: 8 },
  animate: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.96, y: -8 },
};

const SPRING = { type: "spring" as const, stiffness: 400, damping: 28 };

// ── Reusable Sub-Components ──────────────────────────────────────────

interface IconBadgeProps {
  color: string;
  children: React.ReactNode;
}

const IconBadge = ({ color, children }: IconBadgeProps) => (
  <motion.div
    className={`mx-auto flex h-14 w-14 items-center justify-center rounded-full ${color}`}
    initial={{ scale: 0, rotate: -45 }}
    animate={{ scale: 1, rotate: 0 }}
    transition={SPRING}
  >
    {children}
  </motion.div>
);

interface PermissionItemProps {
  text: string;
  delay: number;
}

const PermissionItem = ({ text, delay }: PermissionItemProps) => (
  <motion.li
    className="flex items-center gap-2"
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, delay }}
  >
    <CheckCircle size={16} weight="fill" className="text-green-500 shrink-0" />
    <span className="text-sm text-gray-600">{text}</span>
  </motion.li>
);

interface StateContainerProps {
  children: React.ReactNode;
  className?: string;
}

const StateContainer = ({ children, className = "" }: StateContainerProps) => (
  <motion.div
    variants={FADE_SCALE}
    initial="initial"
    animate="animate"
    exit="exit"
    transition={{ duration: 0.3, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);

// ── State Views ──────────────────────────────────────────────────────

interface ConsentViewProps {
  onGoogleSignIn: () => void;
}

const ConsentView = ({ onGoogleSignIn }: ConsentViewProps) => (
  <StateContainer className="p-6 space-y-5">
    <DialogHeader className="text-center pb-2">
      <IconBadge color="bg-gray-100">
        <ShieldCheck size={28} weight="duotone" className="text-gray-700" />
      </IconBadge>
      <DialogTitle className="text-xl font-semibold text-gray-900 mt-4">
        Continue with Google
      </DialogTitle>
      <DialogDescription className="text-gray-500 mt-2 text-sm leading-relaxed">
        Sign in securely using your Google account. We&apos;ll never post
        anything without your permission.
      </DialogDescription>
    </DialogHeader>

    <motion.div
      className="rounded-xl bg-gray-50 p-4 space-y-2.5"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: 0.15 }}
    >
      <p className="text-sm font-medium text-gray-700">
        MerchWay will receive:
      </p>
      <ul className="space-y-2">
        <PermissionItem text="Your name and profile picture" delay={0.2} />
        <PermissionItem text="Your email address" delay={0.28} />
      </ul>
    </motion.div>

    <motion.div
      className="space-y-3 pt-1"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.3 }}
    >
      <Button
        onClick={onGoogleSignIn}
        className="w-full h-12 bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 gap-3 shadow-sm cursor-pointer"
      >
        <img src="/google.svg" alt="Google" className="h-5 w-5" />
        Continue with Google
      </Button>

      <p className="text-xs text-center text-gray-400">
        By continuing, you agree to our{" "}
        <a
          href="/terms"
          className="underline hover:text-gray-600 transition-colors"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="/privacy"
          className="underline hover:text-gray-600 transition-colors"
        >
          Privacy Policy
        </a>
      </p>
    </motion.div>
  </StateContainer>
);

const LoadingView = () => (
  <StateContainer className="p-8 flex flex-col items-center justify-center min-h-[300px]">
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute h-16 w-16 rounded-full border-4 border-gray-100"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
      />
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        className="inline-flex"
      >
        <CircleNotch size={64} weight="bold" className="text-black" />
      </motion.span>
    </motion.div>
    <motion.p
      className="mt-6 text-lg font-medium text-gray-900"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Connecting to Google...
    </motion.p>
    <motion.p
      className="mt-2 text-sm text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
    >
      Please wait while we authenticate you
    </motion.p>
  </StateContainer>
);

const SuccessView = () => (
  <StateContainer className="p-8 flex flex-col items-center justify-center min-h-[300px]">
    <IconBadge color="bg-green-100">
      <motion.span
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ...SPRING, delay: 0.1 }}
        className="inline-flex"
      >
        <CheckCircle size={40} weight="fill" className="text-green-600" />
      </motion.span>
    </IconBadge>
    <motion.p
      className="mt-6 text-lg font-medium text-gray-900"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      Successfully signed in!
    </motion.p>
    <motion.p
      className="mt-2 text-sm text-gray-400"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.35 }}
    >
      Redirecting to onboarding...
    </motion.p>
    <motion.div
      className="mt-4 h-1 w-32 rounded-full bg-gray-100 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.4 }}
    >
      <motion.div
        className="h-full bg-green-500 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 1.2, ease: "easeInOut", delay: 0.5 }}
      />
    </motion.div>
  </StateContainer>
);

interface ErrorViewProps {
  error: string | null;
  onRetry: () => void;
  onClose: () => void;
}

const ErrorView = ({ error, onRetry, onClose }: ErrorViewProps) => (
  <StateContainer className="p-6 space-y-5">
    <DialogHeader className="text-center pb-2">
      <IconBadge color="bg-red-100">
        <XCircle size={28} weight="fill" className="text-red-600" />
      </IconBadge>
      <DialogTitle className="text-xl font-semibold text-gray-900 mt-4">
        Authentication Failed
      </DialogTitle>
      <DialogDescription className="text-gray-500 mt-2 text-sm">
        {error || "Something went wrong. Please try again."}
      </DialogDescription>
    </DialogHeader>

    <motion.div
      className="space-y-3 pt-1"
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15 }}
    >
      <Button
        onClick={onRetry}
        className="w-full h-11 bg-black hover:bg-gray-800 text-white cursor-pointer"
      >
        Try Again
      </Button>
      <Button
        onClick={onClose}
        variant="outline"
        className="w-full h-11 cursor-pointer"
      >
        Cancel
      </Button>
    </motion.div>
  </StateContainer>
);

// ── Main Modal ───────────────────────────────────────────────────────

export const OauthModal = ({ isOpen, onClose, onSuccess }: OauthModalProps) => {
  const [state, setState] = useState<ModalState>("consent");
  const [error, setError] = useState<string | null>(null);

  const handleGoogleSignIn = async () => {
    setState("loading");
    setError(null);

    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/onboarding",
      });

      if (result.error) {
        setError(result.error.message || "Authentication failed");
        setState("error");
        return;
      }

      setState("success");
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch {
      setError("An unexpected error occurred. Please try again.");
      setState("error");
    }
  };

  const handleClose = () => {
    setState("consent");
    setError(null);
    onClose();
  };

  const handleRetry = () => {
    setState("consent");
    setError(null);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[420px] p-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {state === "consent" && (
            <ConsentView key="consent" onGoogleSignIn={handleGoogleSignIn} />
          )}
          {state === "loading" && <LoadingView key="loading" />}
          {state === "success" && <SuccessView key="success" />}
          {state === "error" && (
            <ErrorView
              key="error"
              error={error}
              onRetry={handleRetry}
              onClose={handleClose}
            />
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};
