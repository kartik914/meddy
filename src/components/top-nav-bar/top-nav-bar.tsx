"use client";

import { useCurrentUser } from "@/hooks/use-current-user";
import { CartButton } from "./cart-button";
import { WebTypeSwitch } from "./web-type-switch";

export const TopNavBar = () => {
  const user = useCurrentUser();

  return (
    <nav className="h-16 shadow-md fixed w-full bg-background flex flex-row justify-between items-center px-4 z-50">
      <div className="">Meddy</div>
      <div>{user && <WebTypeSwitch />}</div>
      <div className="flex-shrink-0 flex justify-center items-center gap-8">
        <CartButton />
      </div>
    </nav>
  );
};
