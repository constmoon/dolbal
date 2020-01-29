import axios from 'axios';
import { useEffect, useState } from 'react';
import { SAMPLE_API_RESULT } from 'api/sampledata';
import { ACCIDENT_TYPES } from 'api/type';
import { GRS80toWGS84 } from 'api/transcoord';

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

const fetchAccidentList = async () => {
  // TODO: api server로부터 data 가져오기
  const accidentList = SAMPLE_API_RESULT;
  return await Promise.all(accidentList.map(setAccidentFields));
};

const useAccidentList = () => {
  const [accidentList, setAccidentList] = useState([])

  useEffect(() => {
    (async () => {
      setAccidentList(await fetchAccidentList());
    })();
  }, []);

  return [accidentList];
};


export {
  useAccidentList
}