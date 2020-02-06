import { useEffect, useState } from 'react';
import axios from 'axios';
import { DOLBAL_SERVER } from '../settings';
import { ACCIDENT_TYPES } from 'api/type';
import { GRS80toWGS84 } from 'api/transcoord';

const getTypeName = (type) => {
  const name = ACCIDENT_TYPES.filter(item => item.type === type).map(item => item.acc_type_nm)
  return name.toString();
};

const setAccidentFields = async (accident) => {
  const { longitude, latitude } = await GRS80toWGS84(accident.x_coordinate, accident.y_coordinate);
  return {
    type: getTypeName(accident.type),
    description: accident.description,
    longitude: longitude,
    latitude: latitude,
  };
};

const fetchAccidentList = async () => {
  try {
    const response = await axios(`${DOLBAL_SERVER.URL}/accidents`);
    const accidentList = response.data.data;
    console.log(accidentList)
    return await Promise.all(accidentList.map(setAccidentFields));
  }
  catch (error) {
    const emptyAccidentList = [
      {
        'description': '현재 돌발 정보가 없습니다',
        'isEmpty': true
      }
    ];
    return emptyAccidentList;
  }
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