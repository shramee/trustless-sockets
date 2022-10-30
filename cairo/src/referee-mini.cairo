%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from starkware.starknet.common.syscalls import get_caller_address, get_contract_address

@contract_interface
namespace TransferEth {
    func transfer( recipient: felt, amount: felt ) {
    }

    func transferFrom( sender: felt, recipient: felt, amount: felt ) {
    }
}

@storage_var
func _owner() -> (owner_address: felt) {
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

// Amount in Gwei
@external
func place_bet{
    syscall_ptr: felt*,
    pedersen_ptr: HashBuiltin*,
    range_check_ptr,
}() -> () {
    let amount = 10000000000000;
    let (player_wallet) = get_caller_address();
    let (self_address) = get_contract_address();
    TransferEth.transfer(
        contract_address=0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7,
        recipient=self_address,
        amount=amount
    );
    return ();
}
