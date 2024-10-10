import {
  useCreateMyStore,
  useGetMyStore,
  useGetMyStoreOrders,
  useUpdateMyStore,
} from "@/api/MyStoreApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageStoreForm from "@/forms/manage-store-form/ManageStoreForm";

const ManageStorePage = () => {
  const { createStore, isLoading: isCreateLoading } = useCreateMyStore();
  const { store } = useGetMyStore();
  const { updateStore, isLoading: isUpdateLoading } = useUpdateMyStore();
  const { orders } = useGetMyStoreOrders();

  const isEditing = !!store;

  return (
    <Tabs defaultValue="orders">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-store">Manage Store</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-sky-400 pg-10 rounded-lg"
      >
        <h2 className="text-2xl font-bold">{orders?.length} Active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} />
        ))}
      </TabsContent>
      <TabsContent value="manage-store">
        <ManageStoreForm
          store={store}
          onSave={isEditing ? updateStore : createStore}
          isLoading={isCreateLoading || isUpdateLoading}
        />
      </TabsContent>
    </Tabs>
  );
};

export default ManageStorePage;
