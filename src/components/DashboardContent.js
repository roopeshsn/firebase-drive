import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFolder } from "../hooks/useFolder";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Sidebar from "./Sidebar";

export default function DashboardContent() {
  const { folderId } = useParams();
  const { folder, childFolders } = useFolder(folderId);
  console.log(folder);
  console.log(childFolders);
  return (
    <div className="grid grid-cols-1 grid-rows-[auto,1fr] md:grid-cols-[16rem,1fr] md:grid-rows-1">
      <Sidebar folder={folder} />
      <div className="border-2 border-red-500">
        <FolderBreadcrumbs currentFolder={folder} />
        {childFolders.length > 0 && (
          <div className="flex gap-4">
            {childFolders.map((childFolder) => {
              return (
                <div
                  key={childFolder.id}
                  className="w-18 border-2 border-green-500 cursor-pointer"
                >
                  <Link to={`/folder/${childFolder.id}`}>
                    {childFolder.name}
                  </Link>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
