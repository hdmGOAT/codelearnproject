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
            <NavigationMenuItem>
              <NavigationMenuTrigger>Home</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-background shadow-md rounded-md">
                <NavigationMenuLink className="block px-4 py-2 hover:bg-gray-100">
                  <Link href="/">Dashboard</Link>
                </NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About</NavigationMenuTrigger>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Contact</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
};

export default NavBar;
