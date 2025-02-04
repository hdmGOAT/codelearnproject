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
        <Link href="/" className="text-lg font-bold tracking-wide w-full">
          Open Code Learning
        </Link>

        <div className="flex w-full">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] bg-gray-800 rounded-md shadow-lg p-2">
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Recommended</h1>
                        <p className="text-xs text-gray-300">
                          The best courses for you
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Explore</h1>
                        <p className="text-xs text-gray-300">
                          Dive into new waters of knowledge
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Following</h1>
                        <p className="text-xs text-gray-300">
                          Courses by those you follow
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="relative">
                <NavigationMenuTrigger className="text-foreground">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px] bg-gray-800 rounded-md shadow-lg p-2">
                  <ul className="flex flex-col space-y-2">
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Recommended</h1>
                        <p className="text-xs text-gray-300">
                          The best courses for you
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Explore</h1>
                        <p className="text-xs text-gray-300">
                          Dive into new waters of knowledge
                        </p>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink
                        href="/learn"
                        className="block px-4 py-3 hover:bg-gray-700 rounded-md transition"
                      >
                        <h1 className="font-bold">Following</h1>
                        <p className="text-xs text-gray-300">
                          Courses by those you follow
                        </p>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
