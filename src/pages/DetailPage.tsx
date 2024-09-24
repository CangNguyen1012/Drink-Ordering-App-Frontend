import { useGetStores } from "@/api/StoreApi";
import MenuItems from "@/components/MenuItem";
import StoreInfo from "@/components/StoreInfo";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { storeId } = useParams();
  const { store, isLoading } = useGetStores(storeId);

  if (isLoading || !store) {
    return "Loading...";
  }

  return (
    <div className="flex flex-col gap-10">
      <AspectRatio ratio={16 / 5}>
        <img
          src={store.imageUrl}
          className="rounded-md object-cover h-full w-full"
        />
      </AspectRatio>
      <div className="grid md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-4">
          <StoreInfo store={store} />
          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {store.menuItems.map((menuItem) => (
            <MenuItems menuItem={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
