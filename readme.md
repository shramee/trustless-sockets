# trustless-websockets

Trustless websockets that run core game logic in Cairo making the execution provable and verifiable.

Alpha preview plan
------------------

Here's what we want to do for our alpha preview (will be submitted as a part of EthLisbon 2022 hackathon).

- [ ] Plan - Player flow
- [ ] Plan - Brief write-up
- [ ] Frontend - `trustless-sockets-frontend` boilerplate
    * [ ] Wallet integration
    * [ ] Referee contract - `place_bet` invoke
    * [ ] Connect with websocket
    * [ ] Events bindings to state heartbeat updates
- [ ] Frontend - Write a PvP game renderer
- [ ] Backend - Write PvP game logic in Cairo
- [ ] Backend - Cairo L3 node
    * [ ] Accepts events array
    * [ ] Runs Cairo with events array input
    * [ ] Cairo prepares current game state
    * [ ] Returns game state for rendering
- [ ] Backend - Socket interface
    * [ ] Player lobby (after placing bets)
    * [ ] Start game when 2+ players in lobby

## Cairo stuff
Cairo contracts to be deployed

### 1. Referee contract

### 2. Demo game contract

## Python backend

Runs Cairo code and deploys contracts

## Frontend - Demo game

Basic 2d multiplayer demo game that uses trustless sockets :fire: