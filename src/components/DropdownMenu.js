import React from "react";

export default function DropdownMenu() {
  return (
    <div className="w-44 absolute left-4 top-28 bg-white shadow rounded">
      <div className="px-2 py-2">
        <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">Folder</div>
        <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">
          File upload
        </div>
        <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">
          Folder upload
        </div>
      </div>
    </div>
  );
}
