import React from "react";
import { useFolder } from "../hooks/useFolder";
import Folder from "./Folder";
import Sidebar from "./Sidebar";

export default function DashboardContent() {
  const { folder, childFolders } = useFolder("cyHYg4IsTeWZTyIGPknS");
  console.log(folder);
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] md:grid-cols-[16rem,1fr] md:grid-rows-1">
      <Sidebar />
      <div className="border-2 border-red-500">
        {childFolders.length > 0 && (
          <div className="flex">
            {childFolders.map((folder) => {
              <div key={folder.id} className="w-20">
                <Folder folder={folder} />
              </div>;
            })}
          </div>
        )}
      </div>
    </div>
  );
}
