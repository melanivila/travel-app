import { useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../db/firebase";
import { UserContext } from "../context/UserContext";

export const useFirestore = () => {
  const { user } = useContext(UserContext);

  const [favList, setFavList] = useState([]);

  const getOrCreateFavList = async () => {
    const docRef = doc(firestore, `users/${user.email}`);
    const res = await getDoc(docRef);
    if (res.exists()) {
      const fetchedData = await res.data();
      setFavList((prev) => (prev = fetchedData?.favorites));
    } else {
      setDoc(docRef, {
        favorites: [...favList],
      });
      const fetchedData = await res.data();
      setFavList((prev) => (prev = fetchedData.favorites));
    }
  };

  const addFavItem = async (item, jsonParam) => {
    const { name, id, images, snippet } = item;
    const favItemData = {
      name,
      id,
      images,
      snippet,
      jsonParam,
    };
    favList.push(favItemData);
    const docRef = doc(firestore, `users/${user.email}`);
    updateDoc(docRef, { favorites: [...favList] });
    setFavList((prev) => (prev = favList));
  };

  const deleteFav = async (name) => {
    const newFavList = favList.filter((fav) => fav.name !== name);
    const docRef = doc(firestore, `users/${user.email}`);
    updateDoc(docRef, { favorites: [...newFavList] });
    setFavList((prev) => (prev = newFavList));
  };

  useEffect(() => {
    getOrCreateFavList();
  }, [favList]);

  return {
    favList,
    getOrCreateFavList,
    addFavItem,
    deleteFav,
  };
};
