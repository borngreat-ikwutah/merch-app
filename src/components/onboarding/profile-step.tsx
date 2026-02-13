import { motion } from "framer-motion";
import { UserCircle, Phone } from "@phosphor-icons/react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import type { UserProfile } from "./types";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "./constants";

interface ProfileStepProps {
  profile: UserProfile;
  onChange: (profile: UserProfile) => void;
}

export const ProfileStep = ({ profile, onChange }: ProfileStepProps) => {
  const updateField = (field: keyof UserProfile, value: string) => {
    onChange({ ...profile, [field]: value });
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
          Tell us about yourself
        </h2>
        <p className="mt-2 text-gray-500">
          Let&apos;s start with some basic information.
        </p>
      </motion.div>

      <div className="space-y-5">
        <motion.div className="space-y-2" variants={STAGGER_ITEM}>
          <Label htmlFor="displayName" className="flex items-center gap-2">
            <UserCircle size={16} weight="duotone" className="text-gray-500" />
            Display Name *
          </Label>
          <Input
            id="displayName"
            placeholder="How should we call you?"
            value={profile.displayName}
            onChange={(e) => updateField("displayName", e.target.value)}
            className="h-12"
          />
        </motion.div>

        <motion.div className="space-y-2" variants={STAGGER_ITEM}>
          <Label htmlFor="phone" className="flex items-center gap-2">
            <Phone size={16} weight="duotone" className="text-gray-500" />
            Phone Number (Optional)
          </Label>
          <Input
            id="phone"
            type="tel"
            placeholder="+1 (555) 000-0000"
            value={profile.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className="h-12"
          />
          <p className="text-xs text-gray-400">
            We&apos;ll only use this for order updates
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
