import { motion } from "framer-motion";
import { Storefront, Globe, Buildings } from "@phosphor-icons/react";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";
import type { BusinessInfo } from "./types";
import { BUSINESS_TYPES, STAGGER_CONTAINER, STAGGER_ITEM } from "./constants";

interface SellerBusinessStepProps {
  businessInfo: BusinessInfo;
  onChange: (info: BusinessInfo) => void;
}

export const SellerBusinessStep = ({
  businessInfo,
  onChange,
}: SellerBusinessStepProps) => {
  const updateField = (field: keyof BusinessInfo, value: string) => {
    onChange({ ...businessInfo, [field]: value });
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
          About your business
        </h2>
        <p className="mt-2 text-gray-500">
          Help us understand your merch needs better.
        </p>
      </motion.div>

      <div className="space-y-5">
        <motion.div className="space-y-2" variants={STAGGER_ITEM}>
          <Label htmlFor="businessName" className="flex items-center gap-2">
            <Storefront size={16} weight="duotone" className="text-gray-500" />
            Business / Brand Name *
          </Label>
          <Input
            id="businessName"
            placeholder="Your brand or business name"
            value={businessInfo.businessName}
            onChange={(e) => updateField("businessName", e.target.value)}
            className="h-12"
          />
        </motion.div>

        <motion.div className="space-y-2" variants={STAGGER_ITEM}>
          <Label htmlFor="businessType" className="flex items-center gap-2">
            <Buildings size={16} weight="duotone" className="text-gray-500" />
            Business Type *
          </Label>
          <Select
            value={businessInfo.businessType}
            onValueChange={(value) => updateField("businessType", value)}
          >
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select your business type" />
            </SelectTrigger>
            <SelectContent>
              {BUSINESS_TYPES.map((type) => (
                <SelectItem key={type} value={type}>
                  {type}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </motion.div>

        <motion.div className="space-y-2" variants={STAGGER_ITEM}>
          <Label htmlFor="website" className="flex items-center gap-2">
            <Globe size={16} weight="duotone" className="text-gray-500" />
            Website (Optional)
          </Label>
          <Input
            id="website"
            type="url"
            placeholder="https://yourbrand.com"
            value={businessInfo.website}
            onChange={(e) => updateField("website", e.target.value)}
            className="h-12"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};
