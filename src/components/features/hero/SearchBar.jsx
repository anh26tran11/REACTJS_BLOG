import React from "react";

const SearchBar = () => {
  return (
    <form className="flex bg-white justify-between items-center w-full max-w-lg mx-auto border border-gray-200 rounded-lg overflow-hidden shadow-sm focus-within:ring-2 focus-within:ring-blue-100 transition-all">
      <input
        placeholder="Enter search title..."
        className="w-full pl-4 h-10 bg-transparent outline-none border-none text-gray-700 placeholder:text-gray-400 text-base md:text-sm"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-9 bg-[#5044e5] text-white px-6 py-2 m-1 rounded-md transition-all hover:bg-[#3f35b4]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
