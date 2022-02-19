import React from "react";
import { Link } from "react-router-dom";
import { ROOT_FOLDER } from "../hooks/useFolder";

export default function FolderBreadcrumbs({ currentFolder }) {
  let path = currentFolder === ROOT_FOLDER ? [] : [ROOT_FOLDER];
  if (currentFolder) {
    path = [...path, ...currentFolder.path];
  }
  console.log(path);
  return (
    <div>
      <div className="flex">
        {path.map((folder, idx) => {
          return (
            <div key={folder.id}>
              <div className="inline-block cursor-pointer">
                <Link
                  className="text-xl md:text-2xl hover:underline"
                  to={folder.id ? `/folder/${folder.id}` : `/`}
                >
                  {folder.name}
                </Link>
              </div>
              <span className="inline text-2xl mx-2 text-gray-600">{`>`}</span>
            </div>
          );
        })}
        {currentFolder && (
          <div className="inline text-center text-gray-600 text-xl md:text-2xl cursor-pointer hover:underline">
            {currentFolder.name}
          </div>
        )}
      </div>
    </div>
  );
}
