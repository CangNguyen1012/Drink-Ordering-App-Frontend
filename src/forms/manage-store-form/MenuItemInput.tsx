import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { TrashIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex items-center gap-4 p-3 bg-white border border-gray-200 rounded-md shadow-sm">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="text-sm text-gray-600">Name</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Item name"
                className="bg-white text-gray-600"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="text-sm text-gray-600">Price (VND)</FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Enter price"
                className="bg-white text-gray-600"
                type="number"
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Delete Icon */}
      <Button
        type="button"
        onClick={removeMenuItem}
        className="text-red-500 hover:text-red-600 focus:outline-none p-2 rounded-full transition duration-200 ease-in-out shadow-sm"
      >
        <TrashIcon className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default MenuItemInput;
