import { CiSearch } from "react-icons/ci";

const SearchInput = () => {
  return (
    <div className="flex items-center justify-center mt-16 px-4">
      <div className="relative w-full max-w-xl">
        <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-800 text-xl lg:text-2xl " />
        <input
          type="text"
          placeholder="Search recipes by name..."
          className=" text-base lg:text-lg       w-full bg-white/80 rounded-xl py-3 pl-12 pr-4 text-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-white transition-all duration-200 ease-in-out shadow-lg"
        />
      </div>
    </div>
  );
};

export default SearchInput;
