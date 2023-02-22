# Lottery Contract For GMX Blueberry Club

## Intended Behavior

0. `Admin` creates a `Sale` with REWARD_TOKEN(s) (NFT).
1. People "mark" (_not stake_) their `GBC NFT` on the `Lottery` system to participate in any sale. Participants may need to deposit X ETH as well, as specified by each `Sale`.
2. At (or after) `endTime`, anyone can call a function to trigger a random number generator. This will determines winners.
3. Winners come and take their rewards.
4. Losers come and take back their deposits.

## Caveats

0. Multiple `Sale`s may happen simultaneously
1. If you mark your `GBC NFT` in the `Lottery` of 1 sale, you can mark it for another sale as well.
2. Holder of the particular `GBC NFT` at the time of withdrawal will be.
3. Each participant can only participate once per sale. This is to prevent people from using multiple NFTs to participate in the same sale to increase their chances of winning.
