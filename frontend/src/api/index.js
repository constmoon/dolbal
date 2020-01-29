import axios from 'axios';
import { useEffect, useState } from 'react';
import { SAMPLE_API_RESULT } from 'api/sampledata';
import { ACCIDENT_TYPES } from 'api/type';
import { GRS80toWGS84 } from 'api/transcoord';

const getAccidentList = () => {
  const [accidentList, setAccidentList] = useState([]);
const getTypeName = (type) => {
  const name = ACCIDENT_TYPES.filter(item => item.acc_type === type).map(item => item.acc_type_nm)
  return name.toString();
};

const setAccidentFields = async (accident) => {
  const { longitude, latitude } = await GRS80toWGS84(accident.grs80tm_x, accident.grs80tm_y);
  return {
    type: getTypeName(accident.acc_type),
    description: accident.acc_info,
    longitude: longitude,
    latitude: latitude,
  };
};


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