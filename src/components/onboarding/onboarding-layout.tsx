import { Link } from "@tanstack/react-router";
import { Image } from "@unpic/react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface OnboardingLayoutProps {
  stepLabel: string;
  sidebar: ReactNode;
  progressBar: ReactNode;
  children: ReactNode;
}

export const OnboardingLayout = ({
  stepLabel,
  sidebar,
  progressBar,
  children,
}: OnboardingLayoutProps) => {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {sidebar}

      <div className="flex w-full flex-col lg:w-1/2 xl:w-2/5">
        <motion.header
          className="flex items-center justify-between px-6 py-4 border-b border-gray-100"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="text-xl font-bold tracking-tighter text-black uppercase flex items-center gap-2"
          >
            <Image
              src="/favicon.svg"
              alt="MerchWay Logo"
              width={24}
              height={24}
            />
            MERCHWAY
          </Link>
          <motion.span
            key={stepLabel}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="text-sm text-gray-400 font-medium"
          >
            {stepLabel}
          </motion.span>
        </motion.header>

        {progressBar}

        <div className="flex-1 flex flex-col justify-center px-6 py-8 lg:px-12 xl:px-16">
          <div className="max-w-md mx-auto w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};
