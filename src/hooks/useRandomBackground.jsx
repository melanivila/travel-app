import axios from 'axios';
import { useEffect } from 'react';
import travelApi from '../api/travelApi';

export const useRandomBackground = () => {

    // const [background, setBackground] = useState();

    useEffect(() => {
      
        getRandomBackground()
    
    }, [])
    
    const getRandomBackground = async() => {
        
        const randomBackground = await travelApi.get( '/location.json' );

        console.log( randomBackground )

    }

}
