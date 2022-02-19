import React, { useState } from "react";
import DropdownMenu from "./DropdownMenu";

export default function Sidebar({ folder }) {
  const [showDropDown, setShowDropdown] = useState(false);
  return (
    <div className="pr-4">
      <div className="mt-4">
        <div>
          <div
            className="text-md ml-4 text-gray-700 bg-white font-semibold shadow hover:shadow-lg cursor-pointer rounded-full text-center w-24 py-2 px-4"
            onClick={() => setShowDropdown(!showDropDown)}
          >
            New
          </div>
          {showDropDown && <DropdownMenu currentFolder={folder} />}
        </div>

        <div className="my-4">
          <div className="text-sm font-semibold px-2 hover:bg-gray-100 hover:rounded-r-full">
            <div className="px-4 py-2">My Drive</div>
          </div>
          <div className="text-sm font-semibold px-2 hover:bg-gray-100 hover:rounded-r-full">
            <div className="px-4 py-2">Starred</div>
          </div>
          <div className="text-sm font-semibold px-2 hover:bg-gray-100 hover:rounded-r-full">
            <div className="px-4 py-2">Storage</div>
          </div>
        </div>
      </div>
    </div>
  );
}
