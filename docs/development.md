# Development

## Basic Setup

This project is written using [Hardhat](https://hardhat.org/)

`yarn` is the package manager used. yarn-lock is included in the repo. Do `yard add package --dev` to install new packages instead of `npm install --save-dev package`.

## Testing

### Locally

`yarn hardhat test`

### Forked Mainnet

If you want to test against smart contracts that are live, you need to use an alchemy archival node (with an API key) and ask hardhat to run a local instance forked from mainnet.

Step 1: Ensure your `.env` file has an api key from alchemy
Step 2: `FORKIT=TRUE yarn hardhat test <testfileName>`

## Deployment

`yarn hardhat deploy` (`--network localhost` if you're running `yarn hardhat node` in another terminal)
