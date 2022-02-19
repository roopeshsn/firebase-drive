import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
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

  function handleUpload(e) {
    const file = e.target.files[0];
    if (currentFolder == null || file == null) return;
    console.log(currentFolder.path);

    const filePath =
      currentFolder === ROOT_FOLDER
        ? `${currentFolder.path.join("/")}/${file.name}`
        : `${currentFolder.path.join("/")}/${currentFolder.name}/${file.name}`;

    console.log(filePath);
    const storage = getStorage();
    const storageRef = ref(storage, `/files/${currentUser.uid}/${filePath}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {},
      (error) => {},
      (success) => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          console.log(url);
          addDoc(collection(db, "files"), {
            name: file.name,
            url: url,
            folderId: currentFolder.id,
            userId: currentUser.uid,
            createdAt: serverTimestamp(),
          });
        });
      }
    );
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
            <label>
              <span>File upload</span>
              <input onChange={handleUpload} type="file" className="hidden" />
            </label>
          </div>
          <div className="py-2 px-2 hover:bg-gray-100 hover: rounded">
            Folder upload
          </div>
        </div>
      </div>
    </>
  );
}
