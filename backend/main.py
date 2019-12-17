from starlette.middleware.cors import CORSMiddleware
from starlette.staticfiles import StaticFiles
from fastapi import FastAPI

from src.auth import connect_to_db
from src.sudokuboard import SudokuBoard
from src.routes.auth import auth_router

connect_to_db()

app = FastAPI()


origins = [
    "http:localhost",
    "http:localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)


@app.get("/")
async def root():
    return {"message": "Hello World!"}


@app.get("/sudoku")
async def sudoku():
    board = SudokuBoard()
    board.make_puzzle()
    return {"sudokuBoard": board.get_board_matrix()}

app.mount("/*", StaticFiles(directory="../frontend/build"), name="static")