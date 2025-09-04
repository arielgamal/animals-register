from fastapi import FastAPI

app = FastAPI()

ANIMALS = [
    {"Nome": "Fedora", "Espécie": "Canino", "Raça": "Shih-tzu"},
    {"Nome": "Bartholomeu", "Espécie": "Felino", "Raça": "SRD"},
    {"Nome": "Luke", "Espécie": "Canino", "Raça": "SRD"},
]

@app.get("/")
async def fast_api():
    return { "message": "Olá mundo" }

@app.get("/animals")
async def get_animals():
    return ANIMALS