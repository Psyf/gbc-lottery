# Spec

0. **ADMIN ONLY:** creates a `Sale` with an ERC721 as markToken and a MintableERC1155 as rewardToken. \
   a. For GBCLottery, markToken is GBC NFT and rewardToken is GBCLab NFT. \
   b. Admin gating is done using solmate's RBAC. \
1. People `mark` their `GBC NFT` on the `Lottery` system to participate in any sale. Participants may need to deposit `price` ETH as well, as specified by each `Sale`. \
   a. Important to clarify that mark != stake
2. At (or after) `endTime`, anyone can call a function to trigger a random number generator. This will determines winners. \
   a. Randomizer VRF is used to generate a random number. See [https://randomizer.ai/docs](https://randomizer.ai/docs) \
   b. **FAILURE MODE:** Random number generation may fail if `randomizerCallback()` is not called by randomizer. \
   c. **FAILSAFE:** 30 days after `Sale.endtime` all participants can withdraw their deposits.
3. Winners come and take their rewards by calling `withdraw(saleId, address)` \
   a.They don't get back deposits. \
   b. **FAILURE MODE:** If `onERC1155received()` does something to make the tx revert, winner will miss out on reward. \
4. Losers get their deposits back `withdraw(saleId, address)`.
   b. **FAILURE MODE:** If `participantAddr.receive()` does something to make the tx revert, loser will not be able to get the refund. \

Note on 2b, 3 and 4: See convenience function section on `Lottery.sol`

# Caveats

0. Multiple `Sale`s may happen simultaneously
1. If you mark your `GBC NFT` in the `Lottery` of 1 sale, you can mark it for another sale as well.
2. Original participant will get the reward/deposit, even if the NFT is transferred to another address.
3. Each participant can only participate once per sale. \
   3a. This is to prevent people from using multiple NFTs to participate in the same sale to increase their chances of winning.

# Noteworthy

1. Winner Selection Algorithm
