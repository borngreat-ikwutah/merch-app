import { motion } from "framer-motion";
import { Check } from "@phosphor-icons/react";

interface SelectableOptionProps {
  label: string;
  selected: boolean;
  onSelect: () => void;
  variant?: "pill" | "block";
}

export const SelectableOption = ({
  label,
  selected,
  onSelect,
  variant = "pill",
}: SelectableOptionProps) => {
  if (variant === "block") {
    return (
      <motion.button
        type="button"
        onClick={onSelect}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
        animate={{
          backgroundColor: selected ? "#000" : "#fff",
          color: selected ? "#fff" : "#374151",
          borderColor: selected ? "#000" : "#d1d5db",
        }}
        transition={{ duration: 0.2 }}
        className="w-full px-4 py-3 rounded-lg text-sm font-medium text-left border flex items-center gap-2"
      >
        {selected && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 500, damping: 25 }}
          >
            <Check size={16} weight="bold" />
          </motion.span>
        )}
        {label}
      </motion.button>
    );
  }

  return (
    <motion.button
      type="button"
      onClick={onSelect}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        backgroundColor: selected ? "#000" : "#fff",
        color: selected ? "#fff" : "#374151",
        borderColor: selected ? "#000" : "#d1d5db",
      }}
      transition={{ duration: 0.2 }}
      className="px-4 py-2 rounded-full text-sm font-medium border inline-flex items-center gap-1.5"
    >
      {selected && (
        <motion.span
          initial={{ scale: 0, width: 0 }}
          animate={{ scale: 1, width: "auto" }}
          exit={{ scale: 0, width: 0 }}
          transition={{ type: "spring", stiffness: 500, damping: 25 }}
        >
          <Check size={14} weight="bold" />
        </motion.span>
      )}
      {label}
    </motion.button>
  );
};
