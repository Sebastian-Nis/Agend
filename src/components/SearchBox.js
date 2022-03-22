import React from "react";

const SearchBox = (props) => {
  return(
    <div className="flex justify-center">
      <div className="mb-3 xl:w-96">
        <input
          type="search"
          value={props.value}
          onChange={(e)=>props.setSearchValue(e.target.value)}
          className="
            form-control
            block
            w-full
            px-3
            py-1.5
            text-base
            font-normal
            text-gray-700
            bg-white bg-clip-padding
            border border-solid border-gray-300
            rounded
            transition
            ease-in-out
            m-0
            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
          "
          id="exampleSearch"
          placeholder="Search"
        />
        </div>
      </div>
  )
}

export default SearchBox;