import os
import pytest
from tests.utils import setup_test_contract, str_to_felt

owner = "0x243cfccf97de7ccf2a18fd101e538bac51803fe54f2aa2f2056a3b69ae8fbb5"
player = "0x5dccee3e1b387eb0ea75f3b572e48cf1663ab2624be9efe101138c6ccab0ee5"
product_id = "0x78620c1aabbe9411d243a37f5fedba872e15b08d998bcf23e2c90518d51bbb4"

# Define `async` test function with `@pytest.mark.asyncio`` decorator


@pytest.mark.asyncio
async def test_increase_balance():
    print("Preparing contract")
    # Setup StarknetContract and StarknetContractTester
    (contract, tester) = await setup_test_contract(
        'referee.cairo',
        [owner]
    )

    print("Invoking")

# Invoke increase_balance() twice.
    bet = await contract.place_bet().execute(caller_address=player)

    (betData) = bet.result
    print(bet.result, betData)
    # assert type(bet.result.game) is int
    # assert type(bet.result.amount) is int
    # assert type(bet.result.player) is int
