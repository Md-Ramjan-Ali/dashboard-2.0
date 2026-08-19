import {
  LayoutGrid,
  Users,
  CreditCard,
  LifeBuoy,
  Bell,
  Settings,
  LucideIcon,
} from "lucide-react";

export interface NavItem {
  icon: LucideIcon;
  label: string;
  href: string;
  badge?: string | number;
}

export const SIDEBAR_ITEMS: NavItem[] = [
  {
    icon: LayoutGrid,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: Users,
    label: "Users",
    href: "/users",
  },
  {
    icon: CreditCard,
    label: "Subscriptions",
    href: "/subscriptions",
  },
  {
    icon: LifeBuoy,
    label: "Support",
    href: "/support",
  },
  {
    icon: Bell,
    label: "Notifications",
    href: "/notifications",
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];
