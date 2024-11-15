import { Order } from "@/types";
import { Separator } from "./ui/separator";
import {
  FaMapMarkerAlt,
  FaShoppingCart,
  FaMoneyBillWave,
} from "react-icons/fa"; // Import icons

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-8">
      {/* Delivering to Section */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <FaMapMarkerAlt className="text-blue-500" /> {/* Delivery Icon */}
          <span className="font-bold">Delivering to:</span>
        </div>
        <span>{order.deliveryDetails.name}</span>
        <span>
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>

      {/* Your Order Section */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <FaShoppingCart className="text-blue-500" /> {/* Order Icon */}
          <span className="font-bold">Your Order:</span>
        </div>
        <ul className="space-y-1">
          {order.cartItems.map((item, index) => (
            <li key={index}>
              {item.name} x {item.quantity}
            </li>
          ))}
        </ul>
      </div>

      <Separator className="my-4" />

      {/* Total Section */}
      <div className="flex flex-col space-y-1">
        <div className="flex items-center space-x-2">
          <FaMoneyBillWave className="text-blue-500" /> {/* Total Icon */}
          <span className="font-bold">Total</span>
        </div>
        <span>{order.totalAmount} VND</span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
