%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import get_caller_address, get_contract_address

struct BetStruct {
    game_contract: felt,
    amount: felt,
    player: felt, // Wallet Address
}

@contract_interface
namespace TransferEth {
    func transfer( recipient: felt, amount: felt ) {
    }

    func transferFrom( sender: felt, recipient: felt, amount: felt ) {
    }
}

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

@constructor
func constructor{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}(ownerAddress: felt) {
    _owner.write( ownerAddress );
    return ();
}

// Increases the balance by the given amount.
// Amount in Gwei
@external
func place_bet{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}() -> (bet: BetStruct) {
    let amount = 100000000000000;
    let game_contract = 'test_product';
    let (player_wallet) = get_caller_address();
    // Prepare bet
    let bet = BetStruct( game_contract=game_contract, amount=amount, player=player_wallet );

    bet_placed_event.emit(amount=amount, game_contract=game_contract);

    // Get bets count
    let (bets_count) = _bets_count.read( 'system' );

    // Update bets count
    _bets_count.write( 'system', bets_count + 1 );

    // Add bet at index
    _all_bets.write( bets_count, bet );

    let (self_address) = get_contract_address();

    TransferEth.transfer(
        contract_address=2087021424722619777119509474943472645767659996348769578120564519014510906823,
        recipient=self_address,
        amount=amount
    );

    return (bet=bet);
}

// @external
// func run_the_game{
//     syscall_ptr: felt*,
//     pedersen_ptr: HashBuiltin*,
//     range_check_ptr,
// }(game_address: felt, player_len: felt, player: felt*, action_len: felt, action: felt*) -> () {
//     let (caller_wallet) = get_caller_address();
//     let (owner_wallet) = _owner.read();
//     assert owner_wallet = caller_wallet;

//     GameContract.run_game(
//         // Contract address
//         contract_address=game_address,
//         // Selector function parameters
//         player_len=player_len, player=player, action_len=action_len, action=action
//     );
    
//     return ();
// }

@external
func hard_set_winner{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}( winner: felt, totalPlayers: felt ) {
    let (caller_wallet) = get_caller_address();
    let (owner_wallet) = _owner.read();
    assert owner_wallet = caller_wallet;
    let amount = 100000000000000;

    TransferEth.transfer(
        contract_address=2087021424722619777119509474943472645767659996348769578120564519014510906823,
        recipient=winner,
        amount=totalPlayers * amount
    );

    return ();
}