from fastapi import FastAPI
from pydantic import BaseModel
import requests
from starlette.responses import JSONResponse, Response
from typing import List

from parser import parser
import settings

SEOUL_API_KEY = str(settings.SEOUL_API_KEY)
SEOUL_API_URL = str(settings.SEOUL_API_URL)

app = FastAPI(
    title="I DOLBAL U",
    description="서울시 돌발정보 열람 서버",
    version="v1",
)


class Accident(BaseModel):
    starts_at_date: str
    starts_at_time: str
    ends_at_date: str
    ends_at_time: str
    x_coordinate: str
    y_coordinate: str
    description: str


@app.get("/accidents", response_model=List[Accident])
async def get_accidents(response: Response):
    response = requests.get(f'{SEOUL_API_URL}/{SEOUL_API_KEY}/xml/AccInfo/1/10')

    total_count, accidents = parser(response.text)

    headers = {'X-Total-Count': total_count}
    content = {'data': accidents}

    return JSONResponse(content=content, headers=headers)
