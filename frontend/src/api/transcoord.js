import axios from "axios";
import { DOLBAL_SERVER } from '../settings';

const GRS80toWGS84 = async (grs80tm_x, grs80tm_y) => {
  const url = `${DOLBAL_SERVER.TRANSCOORD_URL}?x=${grs80tm_x}&y=${grs80tm_y}`;
  try {
    const response = await axios(url);
    return response.data;
  }
  catch(error) {
    console.log(error)
  }
};

export {
  GRS80toWGS84
};