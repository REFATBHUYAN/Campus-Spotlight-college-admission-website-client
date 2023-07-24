import React from "react";

const SearchField = () => {
  return (
    <div className="border border-white mx-auto">
      <input
        type="text"
        placeholder="Type here"
        className="input w-full max-w-xs"
      />
      <button className="custom-btn p-3 px-6">Search Colleges</button>
    </div>
  );
};

export default SearchField;
