%lang starknet

struct PlayerBet {
    game_contract: felt,
    amount: felt,
}

struct BetStruct {
    game_contract: felt,
    amount: felt,
    player: felt, // Wallet Address
}

@contract_interface
namespace GameContract {
    func run_game(player_len: felt, player: felt*, action_len: felt, action: felt*) -> (winner: felt) {
    }
}

@contract_interface
namespace TransferEth {
    func transfer( recipient: felt, amount: felt ) {
    }

    func transferFrom( sender: felt, recipient: felt, amount: felt ) {
    }
}