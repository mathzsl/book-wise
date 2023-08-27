"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ComponentProps, useContext } from "react";
import { createContext } from "react";

type AuthButtonsContextType = {
  onHandleSignIn: (provider?: string, callbackUrl?: string) => void;
};

const AuthButtonsContext = createContext({} as AuthButtonsContextType);

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  const router = useRouter();

  function onHandleSignIn(provider?: string, callbackUrl = "/") {
    if (!provider) {
      router.push(callbackUrl);
      return;
    }

    signIn(provider, {
      callbackUrl,
    });
  }

  return (
    <AuthButtonsContext.Provider value={{ onHandleSignIn }}>
      <div {...props} />
    </AuthButtonsContext.Provider>
  );
}

export const useAuthButtons = () => useContext(AuthButtonsContext);
