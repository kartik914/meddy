"use client";

import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const Social = () => {
  const onClick = (provider: "google") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <div className="flex flex-row items-center gap-2">
      <Button variant="outline" className="w-full" size={"lg"} onClick={() => onClick("google")}>
        <FcGoogle />
        Google
      </Button>
    </div>
  );
};
