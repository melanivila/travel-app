import axios from 'axios';
import { useEffect, useState } from 'react';

 const useRandomBackground = () => {

    const [uri, setUri] = useState(
        "https://i.pinimg.com/originals/eb/70/7a/eb707ae7096cc8df384f1bf87dab547a.gif"
      );
    
      useEffect(() => {
        const newRandomNumber = Math.floor(Math.random() * 10);
        getRandomBackground(newRandomNumber);
      }, []);
    
      const getRandomBackground = async (number) => {
        const randomBackground = await axios.get(
          "https://www.triposo.com/api/20220705/location.json?account=TWJJT5GS&token=4adavfcfoda6070lym6mdp3k00vgwuab&count=10"
        );
        const newUri =
          randomBackground.data.results[number].images[0].sizes.original.url;
    
        setUri(newUri);
      };

      return {
        uri,
      }

}

export default useRandomBackground;
