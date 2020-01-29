import axios from 'axios';
import { useEffect, useState } from 'react';
import { SAMPLE_API_RESULT } from 'api/sampledata';
import { ACCIDENT_TYPES } from 'api/type';
import { GRS80toWGS84 } from 'api/transcoord';

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