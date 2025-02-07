"use client";

import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  id: string;
  email: string;
  username: string;
  profile: string;
};

type UserContextType = {
  user: User | null;
  setUser: (user: User) => void;
};
