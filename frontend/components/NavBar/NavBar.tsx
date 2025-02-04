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
    <nav className="bg-foreground text-foreground shadow-md">
      <div className=" mx-auto flex justify-between items-center py-3 px-6">
        <Link
          href="/"
          className="text-lg font-bold tracking-wide text-background"
        >
          Open Code Learning
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-6">
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Learn</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-background shadow-md rounded-md">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                  Dashboard
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>Teach</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-background shadow-md rounded-md">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                  Create Course
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem className="relative">
              <NavigationMenuTrigger>My Account</NavigationMenuTrigger>
              <NavigationMenuContent className="absolute left-0 top-full bg-background shadow-md rounded-md">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                  Profile
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                  Settings
                </NavigationMenuLink>
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
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
