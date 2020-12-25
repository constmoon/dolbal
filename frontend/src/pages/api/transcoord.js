import axios from "axios";

const KAKAO = {
  BASE_URL: "https://dapi.kakao.com/v2/local/geo",
  APP_KEY: process.env.KAKAO_APP_KEY
};

const headers = {
  'Authorization': 'KakaoAK ' + KAKAO.APP_KEY
};

export default (req, res) => {
  const queryData = req.query;
  const url = `https://dapi.kakao.com/v2/local/geo/transcoord.json?x=${queryData.x}&y=${queryData.y}&input_coord=WTM&output_coord=WGS84`;

  axios(url, { headers }).then(response => {
    const position = response.data.documents[0];
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ longitude: position.x, latitude: position.y }));
  }).catch(error => {
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(error.message))
  });

}