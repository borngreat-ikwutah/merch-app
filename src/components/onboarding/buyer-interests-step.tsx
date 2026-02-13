import { motion } from "framer-motion";
import { Heart, CurrencyDollar } from "@phosphor-icons/react";
import { Label } from "~/components/ui/label";
import { SelectablePill } from "./selectable-pill";
import { SelectableOption } from "./selectable-option";
import type { BuyerInterests } from "./types";
import {
  BUYER_INTERESTS,
  BUDGET_RANGES,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from "./constants";

interface BuyerInterestsStepProps {
  interests: BuyerInterests;
  onChange: (interests: BuyerInterests) => void;
}

export const BuyerInterestsStep = ({
  interests,
  onChange,
}: BuyerInterestsStepProps) => {
  const toggleCategory = (category: string) => {
    const updated = interests.categories.includes(category)
      ? interests.categories.filter((c) => c !== category)
      : [...interests.categories, category];
    onChange({ ...interests, categories: updated });
  };

  const selectBudget = (budget: string) => {
    onChange({ ...interests, budget });
  };

  return (
    <motion.div
      className="space-y-8"
      variants={STAGGER_CONTAINER}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={STAGGER_ITEM}>
        <h2 className="text-2xl font-bold text-gray-900">
          What are you into?
        </h2>
        <p className="mt-2 text-gray-500">
          Pick your interests so we can show you the best merch.
        </p>
      </motion.div>

      <motion.div className="space-y-6" variants={STAGGER_ITEM}>
        <div className="space-y-3">
          <Label className="flex items-center gap-2">
            <Heart size={16} weight="duotone" className="text-gray-500" />
            Interests *
          </Label>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
          >
            {BUYER_INTERESTS.map((category, index) => (
              <motion.div
                key={category}
                variants={STAGGER_ITEM}
                transition={{ delay: index * 0.03 }}
              >
                <SelectablePill
                  label={category}
                  selected={interests.categories.includes(category)}
                  onToggle={() => toggleCategory(category)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      <motion.div className="space-y-3" variants={STAGGER_ITEM}>
        <Label className="flex items-center gap-2">
          <CurrencyDollar size={16} weight="duotone" className="text-gray-500" />
          Typical Budget *
        </Label>
        <div className="space-y-2">
          {BUDGET_RANGES.map((budget) => (
            <SelectableOption
              key={budget}
              label={budget}
              selected={interests.budget === budget}
              onSelect={() => selectBudget(budget)}
              variant="block"
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};
