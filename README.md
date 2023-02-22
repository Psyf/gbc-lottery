# Lottery Contract For GMX Blueberry Club

## Intended Behavior

0. `Admin` creates a `Sale` with REWARD_TOKEN(s) (NFT).
1. People "mark" (_not stake_) their `GBC NFT` on the `Lottery` system to participate in any sale. Participants may need to deposit X ETH as well, as specified by each `Sale`.
2. At (or after) `endTime`, anyone can call a function to trigger a random number generator. This will determines winners.
3. Winners come and take their rewards.
4. Losers come and take back their deposits.

## Caveats

0. Multiple `Sale`s may happen simultaneously
1. If you mark your `GBC NFT` in the `Lottery` you are able to participate in as many `Sale`s as you want.
2. Original participant will be the recpient of withdrawn deposit or the reward, regardless of who holds the `GBC NFT` at the time of withdrawal.
