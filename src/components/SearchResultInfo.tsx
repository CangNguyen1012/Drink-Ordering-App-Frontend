import { Link } from "react-router-dom";
import { MapPin } from "lucide-react"; // Import an icon for location

type Props = {
  total: number;
  city: string;
};

const SearchResultInfo = ({ total, city }: Props) => {
  return (
    <div className="text-lg font-bold flex flex-col gap-2 justify-between lg:items-center lg:flex-row">
      <span className="flex items-center gap-1">
        <MapPin
          className="text-blue-500"
          size={20}
          aria-label="Location icon"
        />
        {total} stores found in <span className="capitalize ml-1">{city}</span>
        <Link
          to="/"
          className="ml-2 text-sm font-semibold underline text-blue-500 hover:text-blue-700 transition-colors"
          aria-label="Change location"
        >
          Change Location
        </Link>
      </span>
    </div>
  );
};

export default SearchResultInfo;
