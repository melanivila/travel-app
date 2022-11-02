import { useContext, useEffect, useState } from "react";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
import { firestore } from "../db/firebase";
import { UserContext } from "../context/UserContext";

export const useFirestore = () => {
  const { user } = useContext(UserContext);
  const [isFavItem, setIsFavItem] = useState(false);
  const [favList, setFavList] = useState([]);
  const [username, setUsername] = useState("");

  const getOrCreateFavList = async () => {
    const docRef = doc(firestore, `users/${user.email}`);
    const res = await getDoc(docRef);
    if (res.exists()) {
      const fetchedData = await res.data();
      setFavList((prev) => (prev = fetchedData?.favorites));
    } else {
      setDoc(docRef, {
        favorites: [...favList],
        username: "",
      });
      const fetchedData = await res.data();
      setFavList((prev) => (prev = fetchedData.favorites));
    }
  };

  const checkFavExists = async (item) => {
    const { id } = item;
    const isFavAlready = favList.find((fav) => fav.id === id);
    if (isFavAlready) {
      setIsFavItem((prev) => (prev = true));
    } else {
      setIsFavItem((prev) => (prev = false));
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
    if (isFavItem) {
      deleteFav(name);
      setIsFavItem((prev) => (prev = false));
    } else {
      favList.push(favItemData);
      const docRef = doc(firestore, `users/${user.email}`);
      updateDoc(docRef, { favorites: [...favList] });
      setFavList((prev) => (prev = favList));
      setIsFavItem((prev) => (prev = true));
    }
  };

  const deleteFav = async (name) => {
    const newFavList = favList.filter((fav) => fav.name !== name);
    const docRef = doc(firestore, `users/${user.email}`);
    updateDoc(docRef, { favorites: [...newFavList] });
    setFavList((prev) => (prev = newFavList));
  };

  useEffect(() => {
    getOrCreateFavList();
    saveUsername( "Melani" );
    console.log(username)
  }, [username]);

  const saveUsername = async ( userInput ) => {
    const docRef = doc(firestore, `users/${user.email}`);
    const res = await getDoc(docRef);
    updateDoc(docRef, {
      username: userInput,
    });
    const fetchedData = await res.data();
    setUsername( userInput );
      // console.log( fetchedData.username )
    };

  return {
    isFavItem,
    favList,
    checkFavExists,
    getOrCreateFavList,
    addFavItem,
    deleteFav,
    saveUsername,
    username,
  };
};
