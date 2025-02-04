"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <Link href="/" className="text-lg font-bold tracking-wide">
          Open Code Learning
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
