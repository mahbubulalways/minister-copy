import { AiOutlineSearch } from "react-icons/ai";

const SearchBar = () => {
  return (
    <div className="flex w-full ">
      <input
        type="search"
        className="bg-primary w-full py-2.5 outline-none rounded-l-full px-5 placeholder:text-[14px]"
        placeholder="Search..."
      />
      <select
        name=""
        id=""
        className="bg-primary border-x border-gray-300 py-2 outline-none w-52 px-2"
      >
        <option value="ami">Mobile</option>
        <option value="ami">Watch</option>
        <option value="ami">Television</option>
      </select>
      <button className="bg-primary py-2 px-3 outline-none rounded-r-full">
        <AiOutlineSearch className="h-5 w-5" />
      </button>
    </div>
  );
};

export default SearchBar;
