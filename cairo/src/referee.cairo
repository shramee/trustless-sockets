// Declare this file as a StarkNet contract.
%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import (get_caller_address)

struct PlayerBet {
    game: felt,
    amount: felt,
}

struct BetStruct {
    game: felt,
    amount: felt,
    player: felt, // Wallet Address
}

// Stores the number of bets placed, 'system' for all bets, wallet_id for bets by wallet
@storage_var
func _bets_count( id: felt ) -> (count: felt) {
}

// Stores bets by a wallet
// @TODO Use later to credit unused bets
@storage_var
func _player_balance( player_wallet: felt ) -> (amount: PlayerBet) {
}

// All bets
@storage_var
func _all_bets( index: felt ) -> (bet: BetStruct) {
}

// An event emitted whenever increase_balance() is called.
// current_balance is the balance before it was increased.
@event
func bet_placed_event(
    bet: felt, game: felt
) {
}

// Increases the balance by the given amount.
// Amount in Gwei
@external
func place_bet{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}() -> (bet: BetStruct) {
    let amount = 10000;
    let product_id = 'test_product';
    let (player_wallet) = get_caller_address();
    // Prepare bet
    let bet = BetStruct( game=product_id, amount=amount, player=player_wallet );

    // Get bets count
    let (bets_count) = _bets_count.read( 'system' );

    // Update bets count
    _bets_count.write( 'system', bets_count + 1 );

    // Add bet at index
    _all_bets.write( bets_count, bet );

    return (bet=bet);
}

@external
func i_won_the_game{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}() -> (fact: felt) {
    let amount = 10000;
    let product_id = 'test_product';
    let (player_wallet) = get_caller_address();
    // Prepare bet
    let bet = BetStruct( game=product_id, amount=amount, player=player_wallet );

    // Get bets count
    let (bets_count) = _bets_count.read( 'system' );

    // Update bets count
    _bets_count.write( 'system', bets_count + 1 );

    // Add bet at index
    _all_bets.write( bets_count, bet );

    return (bet=bet);
}
