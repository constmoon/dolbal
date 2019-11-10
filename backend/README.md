# I DOLBAL U rest api

서울시 실시간 돌발 정보 조회

## Prerequisites

you should get your own dotenv file at `backend/.env` see `.env.sample`.

## Run local server

install dependencies:

```shell script
(your_python3_env) $ pip install -r requirements.txt
```

run server:

```shell script
(your_python3_env) $ uvicorn main:app --reload
```

## API Documentation

after running server, visit following URLs:

- localhost:<port=8000>/docs
- localhost:<port=8000>/redoc

## More info

related links:
- [서울 열린데이터 광장](http://data.seoul.go.kr/dataList/datasetView.do?infId=OA-13315&srvType=A&serviceKind=1&currentPageNo=1)
- [Frontend README](https://github.com/constmoon/dolbal/blob/master/README.md)
