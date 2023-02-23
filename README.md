# Lottery Contract For GMX Blueberry Club

## Intended Behavior

0. `Admin` creates a `Sale` with an ERC721 as markToken and a MintableERC1155 as rewardToken. \
   a. For GBCLottery, markToken is GBC NFT and rewardToken is GBCLab NFT.
1. People `mark` their `GBC NFT` on the `Lottery` system to participate in any sale. Participants may need to deposit `price` ETH as well, as specified by each `Sale`. \
   a. Important to clarify that mark != stake
2. At (or after) `endTime`, anyone can call a function to trigger a random number generator. This will determines winners. \
   a. If the random number generation does not happen within 30 days from endTime, the `Sale` is considered failed and the participants can withdraw their deposits.
3. Winners come and take their rewards. \
   a.They don't get back deposits. \
   b. Admin` can withdraw the winners' deposits.
4. Losers get their deposits back.

## Caveats

0. Multiple `Sale`s may happen simultaneously
1. If you mark your `GBC NFT` in the `Lottery` of 1 sale, you can mark it for another sale as well.
2. Original participant will get the reward/deposit, even if the NFT is transferred to another address.
3. Each participant can only participate once per sale. \
   3a. This is to prevent people from using multiple NFTs to participate in the same sale to increase their chances of winning.

## Noteworthy

1. RBAC enabled.
2. Random Number Generation
3. Winner Selection Algorithm
4. Convenience airdrop function, failure modes and fallbacks
