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

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid grid-cols-2 gap-4 w-full">
                  <li>
                    <NavigationMenuLink href="/learn">Learn</NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default NavBar;
