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
    <nav className="bg-foreground text-background shadow-md flex items-center">
      <div className="mx-auto flex justify-between py-3 px-6 w-full">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide align-middle h-full justify-center flex items-center"
        >
          Open Code Learning
        </Link>
      </div>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" bg-foreground font-semibold text-xl">
              <NavigationMenuLink href="/teach">Teach</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" bg- font-semibold text-xl">
              <NavigationMenuLink href="/learn">Learn</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger className=" bg- font-semibold text-xl">
              <NavigationMenuLink href="/dashboard">User</NavigationMenuLink>
            </NavigationMenuTrigger>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
};

export default NavBar;
