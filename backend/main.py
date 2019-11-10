from typing import List
import requests

from fastapi import FastAPI
from starlette.responses import JSONResponse, Response

from parser import parse
from models import Accident
from settings import SEOUL_API_URL, SEOUL_API_KEY

app = FastAPI(
    title='I DOLBAL U',
    description='서울시 돌발정보 열람 서버',
    version='v1',
)


@app.get('/accidents', response_model=List[Accident])
async def get_accidents(response: Response):
    response = requests.get(
        f'{str(SEOUL_API_URL)}/{str(SEOUL_API_KEY)}/xml/AccInfo/1/10'
    )

    total_count, accidents = parse(response.text)

    headers = {'X-Total-Count': total_count}
    content = {'data': accidents}

    return JSONResponse(content=content, headers=headers)
