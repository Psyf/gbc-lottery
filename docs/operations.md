# Initial Deployment

## Deploy Lottery

Fill up `00_deploy_lottery.js` and run `yarn hardhat deploy --network <networkName>`

## Set Permissions

Fill up `01_set_permissions.js` and run `yarn hardhat deploy --network <networkName>`

## Fund Randomizer

Fill up `02_fund_randomizer.js` and run `yarn hardhat deploy --network <networkName>`

## Verifying source on Etherscan

yarn hardhat --network <networkName> etherscan-verify

# Operations

## Adding New Sales

Fill up `03_add_sales.js` and run `yarn hardhat deploy --network <networkName>`

## How to disburse rewards and refunds to everyone?

- ask participants to call `withdraw(saleId, msg.sender)` after winners have been decided
- convenience: call `executeAirdropForWinnersAndRefundForLosers(saleId)`

## What to do if randomizer fails to callback?

- ask participants to call `withdraw(saleId, msg.sender)` after 30 days from endTime
- convenience: call `executeRefundAllOnFailedSale(saleId)`

## What to do if convenience functions fail?

- This may happen for 3 reasons:
  - too much gas required to execute the entire loop
  - some winner is doing something shoddy in `onERC1155received()`
  - some loser is doing something shoddy in `receive()`
- Solutions:
  - if it's a gas problem, break up the participants into chunks and for each chunk, call `withdrawMulti(sakeId, chunk)`
  - if it's a shoddy participant problem, remove the participants causing problems and then call `withdrawMulti(saleId, list)`

* REMEMBER: You can always call/get someone to call `withdraw(saleId, participant)` as a robust fallback.

## LotteryHouseKeeping.sol

- sweep() to get funds from Lottery.sol (winner's deposits only) -> from contract to whatever address specified
- fundRandomizer() to fund randomizer -> can pay from contract, or give msg.value
- withdrawRandomizer() to withdraw funds (if any) -> goes to contract
