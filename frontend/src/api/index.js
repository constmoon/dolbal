import axios from 'axios';
import SETTINGS from '../settings';

const accidentPos = (list) => {
  console.log(list)
  const posList = [];
  list.map((acc, i) => {
    const { grs80tm_x, grs80tm_y } = acc;
    axios.get(SETTINGS.KAKAO.BASE_URL + '/transcoord.json?' +
      'x=' + grs80tm_x +
      '&y=' + grs80tm_y +
      '&input_coord=WTM&output_coord=WGS84',
      {
        headers: {
          'Authorization': 'KakaoAK ' + SETTINGS.KAKAO.APP_KEY
        }
      }).then((response) => {
        const { x, y }  = response.data.documents[0];
        posList.push({x,y});
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return posList;
};

export default accidentPos;