%lang starknet

from src.structs import PlayerBet, BetStruct

// Stores the number of bets placed, 'system' for all bets, wallet_id for bets by wallet
@storage_var
func _bets_count( id: felt ) -> (count: felt) {
}

@storage_var
func _owner() -> (owner_address: felt) {
}

// All bets
@storage_var
func _all_bets( index: felt ) -> (bet: BetStruct) {
}

// An event emitted whenever increase_balance() is called.
// current_balance is the balance before it was increased.
@event
func bet_placed_event(
    amount: felt, game_contract: felt
) {
}
