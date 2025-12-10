import asyncio
import websockets
import json

# Dados do player (servidor controla)
player = {
    "x": 400,
    "y": 300,
    "speed": 10
}

async def handle_client(websocket):
    print("Cliente conectado!")

    while True:
        msg = await websocket.recv()
        data = json.loads(msg)

        action = data.get("action")

        # Atualiza posição do player
        if action == "up":
            player["y"] -= player["speed"]
        if action == "down":
            player["y"] += player["speed"]
        if action == "left":
            player["x"] -= player["speed"]
        if action == "right":
            player["x"] += player["speed"]

        # Envia nova posição para o JS
        await websocket.send(json.dumps(player))

async def start_server():
    async with websockets.serve(handle_client, "localhost", 8000):
        print("Servidor Python rodando em ws://localhost:8000")
        await asyncio.Future()

asyncio.run(start_server())
