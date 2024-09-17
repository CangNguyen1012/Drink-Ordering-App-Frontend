import {
  useCreateMyStore,
  useGetMyStore,
  useUpdateMyStore,
} from "@/api/MyStoreApi";
import ManageStoreForm from "@/forms/manage-store-form/ManageStoreForm";

const ManageStorePage = () => {
  const { createStore, isLoading: isCreateLoading } = useCreateMyStore();
  const { store } = useGetMyStore();
  const { updateStore, isLoading: isUpdateLoading } = useUpdateMyStore();

  const isEditing = !!store;

  return (
    <ManageStoreForm
      store={store}
      onSave={isEditing ? updateStore : createStore}
      isLoading={isCreateLoading || isUpdateLoading}
    />
  );
};

export default ManageStorePage;
