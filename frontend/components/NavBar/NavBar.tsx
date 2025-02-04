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
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-foreground">
                  Learn
                </NavigationMenuTrigger>
                <NavigationMenuContent className="min-w-[200px]">
                  <ul className="grid grid-cols-1">
                    <li className="w-full">
                      <NavigationMenuLink
                        href="/learn"
                        className="block p-2 hover:bg-gray-800"
                      >
                        <h1 className="font-bold">Recommended</h1>
                        <p className="text-xs">The best courses for you</p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/learn"
                        className="block p-2 hover:bg-gray-800"
                      >
                        <h1 className="font-bold">Explore</h1>
                        <p className="text-xs">
                          Dive into new waters of knowledge
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink
                        href="/learn"
                        className="block p-2 hover:bg-gray-800"
                      >
                        <h1 className="font-bold">Following</h1>
                        <p className="text-xs">Courses by those you follow</p>
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
