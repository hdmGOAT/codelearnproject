"use client";

import { usePathname } from "next/navigation";
import NavBar from "./NavBar";

export default function NavBarRenderer() {
  const pathname = usePathname();


  const hiddenRoutes = ["/", "/login", "/signup"];

  if (hiddenRoutes.includes(pathname)) return null;

  return <NavBar />; 
}
