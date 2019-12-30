import axios from 'axios';
import { KAKAO } from '../settings';

const headers = {
  'Authorization': 'KakaoAK ' + KAKAO.APP_KEY
}

const getAccidentPosition = async (acc) => {
  const { grs80tm_x, grs80tm_y } = acc;
  const url = `${KAKAO.BASE_URL}/transcoord.json?x=${grs80tm_x}&y=${grs80tm_y}&input_coord=WTM&output_coord=WGS84`
  const position = await axios.get(url, { headers })
    .then((response) => response.data.documents[0])
    .catch((error) => { console.log(error) });
  return { ...acc, ...position };
}

export { getAccidentPosition };