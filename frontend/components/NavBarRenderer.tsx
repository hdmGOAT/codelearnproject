"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavBarRenderer() {
  const pathname = usePathname();

  // Define routes where the Navbar should be hidden
  const hiddenRoutes = ["/", "/login", "/signup"];

  if (hiddenRoutes.includes(pathname)) return null; // Hide Navbar

  return <NavBar />; // Show Navbar
}
