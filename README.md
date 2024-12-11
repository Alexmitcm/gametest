
# GameSystemTest Project

## Overview
This project demonstrates a simple smart contract-based game system using Hardhat.

## Files
- `contracts/GameSystem.sol`: The main smart contract.
- `hardhat.config.js`: Hardhat configuration file.
- `scripts/deploy.js`: Script to deploy the contract.
- `test/GameSystemTest.js`: Unit tests for the smart contract.

## How to Run
1. Install dependencies: `npm install`
2. Compile contracts: `npx hardhat compile`
3. Run tests: `npx hardhat test`
4. Deploy to Arbitrum Testnet: `npx hardhat run scripts/deploy.js --network arbitrumTestnet`

## Notes
- Replace `0xYOUR_PRIVATE_KEY` in `hardhat.config.js` with your actual private key.
- Use a wallet with testnet funds to deploy the contract.
