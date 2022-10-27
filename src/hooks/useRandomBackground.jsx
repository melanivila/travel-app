import axios from "axios";
import { useEffect, useState } from "react";
import travelApi from "../api/travelApi";

const useRandomBackground = () => {
  const [uri, setUri] = useState(
    "https://i.pinimg.com/originals/eb/70/7a/eb707ae7096cc8df384f1bf87dab547a.gif"
  );

  useEffect(() => {
    const newRandomNumber = Math.floor(Math.random() * 10);
    getRandomBackground(newRandomNumber);
  }, []);

  const getRandomBackground = async (number) => {
    const randomBackground = await travelApi.get("/location.json?count=10");
    const newUri =
      randomBackground.data.results[number].images[0].sizes.original.url;
    setUri(newUri);
  };

  return {
    uri,
  };
};

export default useRandomBackground;
