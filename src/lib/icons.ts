import {
  HardDrive,
  Search,
  Sparkles,
  Users,
  Wand2,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  HardDrive,
  Search,
  Sparkles,
  Users,
  Wand2,
  ShieldCheck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
