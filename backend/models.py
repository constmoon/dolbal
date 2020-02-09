from pydantic import BaseModel


class Accident(BaseModel):
    starts_at_date: str
    starts_at_time: str
    ends_at_date: str
    ends_at_time: str
    x_coordinate: str
    y_coordinate: str
    description: str
