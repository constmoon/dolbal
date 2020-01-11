import axios from 'axios';
import { useEffect, useState } from 'react';
import accList, { getAccType } from '../data';
import { KAKAO } from '../settings';

const headers = {
  'Authorization': 'KakaoAK ' + KAKAO.APP_KEY
}

const getAccidentPosition = async (accident) => {
  const { grs80tm_x, grs80tm_y } = accident;
  const url = `${KAKAO.BASE_URL}/transcoord.json?x=${grs80tm_x}&y=${grs80tm_y}&input_coord=WTM&output_coord=WGS84`
  try {
    const response = await axios(url, { headers });
    const position = response.data.documents[0];
    return { ...accident, ...position };
  }
  catch(error) {
    console.log(error)
  }
}

const getAccidentList = () => {
  const [accidentList, setAccidentList] = useState([]);

  useEffect(() => {
    // TODO: 컴포넌트 바깥에서 변환이 이루어지는 안좋은 설계 수정 
    async function setAccList() {
      const accidentWithPosition = await Promise.all(accList.map(getAccidentPosition));
      setAccidentList(accidentWithPosition);
    }
    setAccList();
  },[]);
  return [accidentList];
}

export { getAccidentList };