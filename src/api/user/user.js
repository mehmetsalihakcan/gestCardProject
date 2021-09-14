import axios from 'axios';
import {testApiUrl} from '../../helper/globalVarivles'

const dataPath = '../../screens/components/jsonData';
export const  getData = async()=>{
    try {
      const response = await axios.get(dataPath);
      console.log(' servis response : ',response);
    } catch (error) {
      console.error(error);
    }
  }

