import { motion } from "framer-motion";
import { Package, TrendUp } from "@phosphor-icons/react";
import { Label } from "~/components/ui/label";
import { SelectablePill } from "./selectable-pill";
import { SelectableOption } from "./selectable-option";
import type { SellerPreferences } from "./types";
import {
  PRODUCT_CATEGORIES,
  ORDER_VOLUMES,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from "./constants";

interface SellerPreferencesStepProps {
  preferences: SellerPreferences;
  onChange: (preferences: SellerPreferences) => void;
}

export const SellerPreferencesStep = ({
  preferences,
  onChange,
}: SellerPreferencesStepProps) => {
  const handleCategoryToggle = (category: string) => {
    const updated = preferences.productCategories.includes(category)
      ? preferences.productCategories.filter((c) => c !== category)
      : [...preferences.productCategories, category];
    onChange({ ...preferences, productCategories: updated });
  };

  const handleVolumeSelect = (volume: string) => {
    onChange({ ...preferences, orderVolume: volume });
  };

  return (
    <motion.div
      className="space-y-8"
      variants={STAGGER_CONTAINER}
      initial="initial"
      animate="animate"
    >
      <motion.div variants={STAGGER_ITEM}>
        <h2 className="text-2xl font-bold text-gray-900">Your preferences</h2>
        <p className="mt-2 text-gray-500">
          What products are you planning to sell?
        </p>
      </motion.div>

      <div className="space-y-6">
        <motion.div className="space-y-3" variants={STAGGER_ITEM}>
          <Label className="flex items-center gap-2">
            <Package size={16} weight="duotone" className="text-gray-500" />
            Product Categories *
          </Label>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
          >
            {PRODUCT_CATEGORIES.map((category, index) => (
              <motion.div
                key={category}
                variants={STAGGER_ITEM}
                transition={{ delay: index * 0.04 }}
              >
                <SelectablePill
                  label={category}
                  selected={preferences.productCategories.includes(category)}
                  onToggle={() => handleCategoryToggle(category)}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="space-y-3" variants={STAGGER_ITEM}>
          <Label className="flex items-center gap-2">
            <TrendUp size={16} weight="duotone" className="text-gray-500" />
            Expected Order Volume *
          </Label>
          <motion.div
            className="space-y-2"
            variants={STAGGER_CONTAINER}
            initial="initial"
            animate="animate"
          >
            {ORDER_VOLUMES.map((volume, index) => (
              <motion.div
                key={volume}
                variants={STAGGER_ITEM}
                transition={{ delay: index * 0.06 }}
              >
                <SelectableOption
                  label={volume}
                  selected={preferences.orderVolume === volume}
                  onSelect={() => handleVolumeSelect(volume)}
                  variant="block"
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};
