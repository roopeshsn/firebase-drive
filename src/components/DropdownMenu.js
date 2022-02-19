import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import { ROOT_FOLDER } from "../hooks/useFolder";

export default function DropdownMenu({ currentFolder }) {
  const { currentUser } = useAuth();

  function openModal() {
    const newFolder = prompt("New folder: ");

    if (currentFolder == null) return;

    const path = [...currentFolder.path];
    if (currentFolder !== ROOT_FOLDER) {
      path.push({ name: currentFolder.name, id: currentFolder.id });
    }

    addDoc(collection(db, "folders"), {
      name: newFolder,
      parentId: currentFolder.id,
      path: path,
      userId: currentUser.uid,
      createdAt: serverTimestamp(),
    });
  }

  return (
    <>
      <div className="w-44 absolute left-4 top-28 bg-white shadow rounded">
        <div className="px-2 py-2">
          <div
            className="py-2 px-2 hover:bg-gray-100 hover: rounded"
            onClick={openModal}
          >
            Folder
          </div>
          <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">
            File upload
          </div>
          <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">
            Folder upload
          </div>
        </div>
      </div>
    </>
  );
}
