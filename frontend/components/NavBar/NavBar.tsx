"use client";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="mx-auto flex justify-between items-center py-3 px-6">
        <Link href="/" className="text-lg font-bold tracking-wide">
          Open Code Learning
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem className="group relative">
              <NavigationMenuTrigger className="px-4 py-2 hover:bg-gray-700 rounded-md">
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-white text-black shadow-md rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-200">
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="group relative">
              <NavigationMenuTrigger className="px-4 py-2 hover:bg-gray-700 rounded-md">
                Teach
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-white text-black shadow-md rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-200">
                  Create Course
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem className="group relative">
              <NavigationMenuTrigger className="px-4 py-2 hover:bg-gray-700 rounded-md">
                My Account
              </NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-white text-black shadow-md rounded-md w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-200">
                  Profile
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-200">
                  Settings
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-200">
                  Logout
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default NavBar;
