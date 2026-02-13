import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

interface SelectablePillProps {
  label: string;
  selected: boolean;
  onToggle: () => void;
}

export const SelectablePill = ({
  label,
  selected,
  onToggle,
}: SelectablePillProps) => {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      layout
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium border transition-colors ${
        selected
          ? "bg-black text-white border-black"
          : "bg-white text-gray-700 border-gray-300 hover:border-gray-400"
      }`}
    >
      {selected && (
        <motion.span
          initial={{ scale: 0, width: 0 }}
          animate={{ scale: 1, width: "auto" }}
          exit={{ scale: 0, width: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
          className="inline-flex"
        >
          <Check size={14} weight="bold" />
        </motion.span>
      )}
      {label}
    </motion.button>
  );
};
