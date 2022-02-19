import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFolder } from "../hooks/useFolder";
import FolderBreadcrumbs from "./FolderBreadcrumbs";
import Sidebar from "./Sidebar";

export default function DashboardContent() {
  const { folderId } = useParams();
  const { folder, childFolders, childFiles } = useFolder(folderId);
  console.log(folder);
  console.log(childFolders);
  console.log(childFiles);
  return (
    <div className="grid mx-2 grid-cols-1 grid-rows-[auto,1fr] md:grid-cols-[16rem,1fr] md:grid-rows-1">
      <Sidebar folder={folder} />
      <div className="py-4 pl-2 pr-2 lg:pr-24">
        <FolderBreadcrumbs currentFolder={folder} />
        <div className="my-4">
          {childFolders.length > 0 && (
            <div className="text-md mb-4 font-medium text-gray-700">
              Folders
            </div>
          )}
          {childFolders.length > 0 && (
            <div className="grid mb-6 grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {childFolders.map((childFolder) => {
                return (
                  <div
                    key={childFolder.id}
                    className="border-2 px-4 py-2 rounded border-gray-300 cursor-pointer"
                  >
                    <Link
                      className="text-md font-normal text-gray-700"
                      to={`/folder/${childFolder.id}`}
                    >
                      {childFolder.name}
                    </Link>
                  </div>
                );
              })}
            </div>
          )}
          {childFolders.length > 0 && childFiles.length > 0 && (
            <hr className="text-gray-400 h-4" />
          )}
          {childFiles.length > 0 && (
            <div className="text-md my-4 font-medium text-gray-700">Files</div>
          )}
          {childFiles.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
              {childFiles.map((childFile) => {
                return (
                  <a
                    className="border-2 px-4 py-2 rounded border-gray-300 cursor-pointer"
                    key={childFile.id}
                    href={childFile.url}
                    target="_blank"
                  >
                    {childFile.name}
                  </a>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
