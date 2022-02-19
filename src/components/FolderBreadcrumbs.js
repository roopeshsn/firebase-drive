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
            <>
              <div key={idx}>
                <Link
                  key={folder.id}
                  to={folder.id ? `/folder/${folder.id}` : `/`}
                >
                  {folder.name}
                </Link>
              </div>
              <div>{`>`}</div>
            </>
          );
        })}
        {currentFolder && <div>{currentFolder.name}</div>}
      </div>
    </div>
  );
}
