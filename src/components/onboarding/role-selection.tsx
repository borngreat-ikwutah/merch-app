import { motion } from "framer-motion";
import { Storefront, ShoppingBag, ArrowRight } from "@phosphor-icons/react";
import type { UserRole } from "./types";
import { STAGGER_CONTAINER, STAGGER_ITEM, FADE_IN_UP } from "./constants";

interface RoleSelectionProps {
  onSelect: (role: UserRole) => void;
}

const roles = [
  {
    id: "buyer" as UserRole,
    title: "I'm a Buyer",
    description: "Browse and purchase custom merchandise from creators.",
    icon: ShoppingBag,
    accent: "from-blue-500/10 to-indigo-500/10",
    border: "group-hover:border-blue-400",
    iconColor: "text-blue-600",
  },
  {
    id: "seller" as UserRole,
    title: "I'm a Seller",
    description: "Create, manage, and sell your own branded merch.",
    icon: Storefront,
    accent: "from-amber-500/10 to-orange-500/10",
    border: "group-hover:border-amber-400",
    iconColor: "text-amber-600",
  },
] as const;

export const RoleSelection = ({ onSelect }: RoleSelectionProps) => {
  return (
    <motion.div
      className="space-y-8"
      variants={STAGGER_CONTAINER}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={FADE_IN_UP} transition={{ duration: 0.4 }}>
        <h2 className="text-2xl font-bold text-gray-900">
          How will you use MerchWay?
        </h2>
        <p className="mt-2 text-gray-500">
          Choose your path — you can always switch later.
        </p>
      </motion.div>

      <div className="space-y-4">
        {roles.map((role, index) => {
          const Icon = role.icon;
          return (
            <motion.button
              key={role.id}
              type="button"
              onClick={() => onSelect(role.id)}
              variants={STAGGER_ITEM}
              transition={{ duration: 0.35, delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className={`group w-full rounded-xl border border-gray-200 bg-white p-5 text-left transition-shadow hover:shadow-md ${role.border}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-br ${role.accent}`}
                >
                  <Icon size={24} weight="duotone" className={role.iconColor} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-gray-900">
                      {role.title}
                    </h3>
                    <motion.span
                      className="text-gray-300 group-hover:text-gray-600 transition-colors"
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                    >
                      <ArrowRight size={18} weight="bold" />
                    </motion.span>
                  </div>
                  <p className="mt-1 text-sm text-gray-500 leading-relaxed">
                    {role.description}
                  </p>
                </div>
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};
