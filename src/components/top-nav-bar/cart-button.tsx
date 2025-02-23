import { ShoppingBag } from "lucide-react";
import { Button } from "../ui/button";

export const CartButton = () => {
  const cartItems = 0;

  return (
    <Button className="relative" variant={"secondary"}>
      <div className="absolute -top-1 -right-1 bg-primary text-secondary rounded-full px-1 text-xs flex justify-center items-center">
        {cartItems}
      </div>
      <ShoppingBag size={24} />
      Cart
    </Button>
  );
};
