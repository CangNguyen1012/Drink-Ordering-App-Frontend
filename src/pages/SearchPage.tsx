import { useSearchStores } from "@/api/StoreApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchStores(city);

  return (
    <span>
      {" "}
      User searched for {city}{" "}
      <span>
        {results?.data.map((store) => (
          <span>
            found - {store.storeName}, {store.city}
          </span>
        ))}
      </span>
    </span>
  );
};

export default SearchPage;
