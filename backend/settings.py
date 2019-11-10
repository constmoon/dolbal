from starlette.config import Config
from starlette.datastructures import Secret, URL

config = Config(".env")

DEBUG = config("DEBUG", cast=bool, default=False)
SEOUL_API_KEY = config("SEOUL_API_KEY", cast=Secret)
SEOUL_API_URL = config("SEOUL_API_URL", cast=URL)
