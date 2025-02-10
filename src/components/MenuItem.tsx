import { MenuItem } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItems = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="font-bold text-lg">{menuItem.price} VND</span>
        <Button className="px-4 py-2 text-lg" onClick={addToCart}>
          +
        </Button>
      </CardContent>
    </Card>
  );
};

export default MenuItems;
