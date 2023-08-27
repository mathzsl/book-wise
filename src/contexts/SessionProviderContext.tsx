"use client";

import { SessionProvider as SessionProviderApp } from "next-auth/react";
import { ReactNode } from "react";

export function SessionProvider({ children }: { children: ReactNode }) {
  return <SessionProviderApp>{children}</SessionProviderApp>;
}
