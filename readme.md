# trustless-websockets

Trustless websockets that run core game logic in Cairo making the execution provable and verifiable.

Code style
----------

1. Python style underscored parameter naming.
2. Spaced out code for improved readability (WordPress style)


Alpha preview plan
------------------

Here's what we want to do for our alpha preview (will be submitted as a part of EthLisbon 2022 hackathon).

#### Planning
- [ ] Plan - Player flow
- [ ] Plan - Brief public write-up

#### Demo game
- [x] Frontend - PvP game renderer
- [x] Backend - `Cairo` PvP game logic

#### Frontend boilerplate
- [ ] Frontend - `trustless-sockets-frontend` boilerplate
  * [x] Wallet integration
  * [ ] Referee contract - `place_bet` invoke
  * [x] Connect with websocket
  * [x] WS player data sync
  * [x] Events bindings to state heartbeat updates

#### Backend infrastructure
- [ ] Backend - Cairo L3 node
  * [ ] Accepts events array
  * [ ] Runs Cairo with events array input
  * [ ] Cairo prepares current game state
  * [ ] Returns game state for rendering
- [ ] Backend - Socket interface
    * [ ] WS setup
    * [ ] Player lobby (after placing bets)
    * [ ] Start game when 2+ players in lobby
    * [ ] Call game finished when game ends

#### Referee contract
- [ ] Backend - `Cairo` Referee contract
  * [ ] `place_bet` endpoint
    * [ ] Takes player `wallet_id`
    * [ ] Takes `game_id`
    * [ ] Events to indicate bet is placed
  * [ ] `game_finish` endpoint

## Cairo stuff

Cairo contracts to be deployed

### 1. Referee contract

### 2. Demo game contract

## Python backend

Runs Cairo code and deploys contracts

## Frontend - Demo game

Basic 2d multiplayer demo game that uses trustless sockets :fire: