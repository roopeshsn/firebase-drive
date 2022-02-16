import { doc, getDoc, where } from "firebase/firestore";
import React, { useEffect, useReducer } from "react";
import { db } from "../firebase";
import { formatDoc } from "../utils/firebase";

const ACTIONS = {
  SELECT_FOLDER: "select-folder",
  UPDATE_FOLDER: "update-folder",
};

const ROOT_FOLDER = {
  name: "My Drive",
  id: null,
  path: [],
};

function reducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.SELECT_FOLDER:
      return {
        folder: payload.folder,
        folderId: payload.folderId,
        childFolders: [],
        childFiles: [],
      };

    case ACTIONS.UPDATE_FOLDER:
      return {
        ...state,
        folder: payload.folder,
      };

    default:
      return state;
  }
}

export function useFolder(folderId = null, folder = null) {
  const [state, dispatch] = useReducer(reducer, {
    folder,
    folderId,
    childFolders: [],
    childFiles: [],
  });

  useEffect(() => {
    dispatch({ type: ACTIONS.SELECT_FOLDER, payload: { folder, folderId } });
  }, [folder, folderId]);

  useEffect(() => {
    if (folderId == null) {
      return dispatch({
        type: ACTIONS.UPDATE_FOLDER,
        payload: { folder: ROOT_FOLDER },
      });
    }

    const folderDocRef = doc(db, "folders", folderId);
    const folderDocSnap = getDoc(folderDocRef);
    folderDocSnap
      .then((doc) => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: formatDoc(doc) },
        });
      })
      .catch(() => {
        dispatch({
          type: ACTIONS.UPDATE_FOLDER,
          payload: { folder: ROOT_FOLDER },
        });
      });
  }, [folderId]);

  useEffect(() => {}, [folderId]);

  return state;
}
