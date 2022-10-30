#!/usr/bin/env python
import os
import asyncio
import websockets

print(os.environ)


async def hello(websocket):
    name = await websocket.recv()
    print(f"<<< {name}")

    greeting = f"Hello {name}!"

    await websocket.send(greeting)
    print(f">>> {greeting}")


async def main():
    async with websockets.serve(hello, "localhost", os.environ['PORT']):
        await asyncio.Future()  # run forever

if __name__ == "__main__":
    asyncio.run(main())
