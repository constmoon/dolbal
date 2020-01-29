import axios from "axios";
import { KAKAO } from '../settings';

const headers = {
  'Authorization': 'KakaoAK ' + KAKAO.APP_KEY
}

const GRS80toWGS84 = async (grs80tm_x, grs80tm_y) => {
  const url = `${KAKAO.BASE_URL}/transcoord.json?x=${grs80tm_x}&y=${grs80tm_y}&input_coord=WTM&output_coord=WGS84`
  try {
    const response = await axios(url, { headers });
    const position = response.data.documents[0];
    return { longitude: position.x, latitude: position.y }
  }
  catch(error) {
    console.log(error)
  }
};

export {
  GRS80toWGS84
};