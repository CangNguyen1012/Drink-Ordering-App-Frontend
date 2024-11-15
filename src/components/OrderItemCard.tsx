import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyStoreOrder } from "@/api/MyStoreApi";
import { useEffect, useState } from "react";
import {
  UserIcon,
  MapPinIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

type Props = {
  order: Order;
  index: number;
};

const OrderItemCard = ({ order, index }: Props) => {
  const { updateStoreStatus, isLoading } = useUpdateMyStoreOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateStoreStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getBadgeColor = (status: OrderStatus) => {
    switch (status) {
      case "outForDelivery":
        return "bg-green-500";
      case "paid":
        return "bg-yellow-500";
      case "inProgress":
        return "bg-blue-500";
      case "placed":
        return "bg-gray-500";
      case "delivered":
        return "bg-purple-500";
      default:
        return "bg-gray-300";
    }
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);
    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();
    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${paddedMinutes}`;
  };

  const cardBackground = index % 2 === 0 ? "bg-blue-50" : "bg-gray-50";

  return (
    <Card
      className={`${cardBackground} border border-gray-200 rounded-lg shadow-md p-5 mb-8`}
    >
      <CardHeader>
        <CardTitle className="flex flex-wrap gap-6 justify-between mb-3">
          <div className="flex items-center gap-2">
            <UserIcon className="h-5 w-5 text-sky-700" />
            <span className="font-semibold text-sky-700">Customer Name:</span>
            <span className="ml-1 text-gray-800 font-bold">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <MapPinIcon className="h-5 w-5 text-sky-700" />
            <span className="font-semibold text-sky-700">
              Delivery Address:
            </span>
            <span className="ml-1 text-gray-800 font-bold">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ClockIcon className="h-5 w-5 text-sky-700" />
            <span className="font-semibold text-sky-700">Time:</span>
            <span className="ml-1 text-gray-800 font-bold">{getTime()}</span>
          </div>
          <div className="flex items-center gap-2">
            <CurrencyDollarIcon className="h-5 w-5 text-sky-700" />
            <span className="font-semibold text-sky-700">Total Cost:</span>
            <span className="ml-1 text-lg font-bold text-gray-800">
              {order.totalAmount} VND
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>

      <CardContent className="flex flex-col gap-6 p-5 rounded-lg">
        <div className="flex items-center gap-4 mb-4">
          <Label className="text-sky-700">Order Status:</Label>
          <Badge className={`text-white ${getBadgeColor(status)}`}>
            {ORDER_STATUS.find((s) => s.value === status)?.label}
          </Badge>
        </div>

        <Separator />

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="status" className="text-sky-700">
            Update Order Status:
          </Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger id="status" className="text-gray-800 bg-white">
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent position="popper" className="shadow-lg">
              {ORDER_STATUS.map((status, index) => (
                <SelectItem key={index} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {isLoading && (
            <span className="text-sm text-gray-500 italic mt-1">
              Updating status...
            </span>
          )}
        </div>

        <Separator />

        {/* Cart Items Section */}
        <div className="flex flex-col gap-2">
          {order.cartItems.map((cartItem, index) => (
            <div key={index} className="flex items-center">
              <Badge variant="default" className="mr-2 bg-sky-500 text-white">
                {cartItem.quantity}
              </Badge>
              <span className="font-medium text-gray-700">{cartItem.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
