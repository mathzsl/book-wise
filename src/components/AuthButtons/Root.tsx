'use client'

import { signIn } from "next-auth/react";
import { ComponentProps, useContext } from "react";
import { createContext } from "react";

type AuthButtonsContextType = {
  onHandleSignIn: (provider?: string, callbackUrl?: string) => void;
};

const AuthButtonsContext = createContext({} as AuthButtonsContextType);

interface RootProps extends ComponentProps<"div"> {}

export function Root({ ...props }: RootProps) {
  function onHandleSignIn(provider?: string, callbackUrl = "/") {
    signIn(provider, {
      callbackUrl,
    });
  }

  return (
    <AuthButtonsContext.Provider value={{ onHandleSignIn }}>
      <div {...props} className="flex flex-col  gap-4" />;
    </AuthButtonsContext.Provider>
  );
}

export const useAuthButtons = () => useContext(AuthButtonsContext);
