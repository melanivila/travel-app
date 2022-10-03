import axios from 'axios';
import { useEffect, useState } from 'react'

export const usePopularLocation = () => {

    const [uri, setUri] = useState();
    
      useEffect(() => {
        // const newRandomLocation = Math.floor(Math.random() * 10);
        getRandomLocation();
      }, []);
    
      const getRandomLocation = async () => {
        const randomLocation = await axios.get(
          "https://www.triposo.com/api/20220705/location.json?account=TWJJT5GS&token=4adavfcfoda6070lym6mdp3k00vgwuab&count=10"
        );
        const newUri =
          randomLocation.data.results;
    
        setUri(newUri);
      };

  return {
    uri,
  }
}
