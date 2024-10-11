import { Store } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { CartItem } from "@/pages/DetailPage";
import { Separator } from "./ui/separator";
import { Trash } from "lucide-react";
import { Input } from "./ui/input";

type Props = {
  store: Store;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
  updateCartItem: (cartItem: CartItem, newQuantity: number) => void;
};

const OrderSummary = ({
  store,
  cartItems,
  removeFromCart,
  updateCartItem,
}: Props) => {
  const getTotalCost = () => {
    const totalCost = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalCostWithDelivery = totalCost + store.deliveryPrice;

    return totalCostWithDelivery;
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold tracking-tight flex justify-between">
          <span>Your Order</span>
          <span>{getTotalCost()} VND</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        {cartItems.map((item) => (
          <div className="flex justify-between">
            <span>
              {item.name}
              <Input
                type="number"
                min={1}
                value={item.quantity}
                onChange={(e) =>
                  updateCartItem(item, parseInt(e.target.value, 10) || 1)
                }
                className="w-16 text-center" // Ensure it's compact
              />
            </span>
            <span className="flex items-center gap-1">
              <Trash
                className="cursor-pointer"
                color="red"
                size={20}
                onClick={() => removeFromCart(item)}
              />
              {item.price * item.quantity} VND
            </span>
          </div>
        ))}
        <Separator />
        <div className="flex justify-between">
          <span>Delivery</span>
          <span>{store.deliveryPrice} VND</span>
        </div>
        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
