const { ethers } = require("ethers");

// Infura or Alchemy endpoint URL
// const INFURA_API_KEY = 'your_infura_api_key'; // Replace with your Infura API key
const PROVIDER_URL = `http://localhost:8545`;
const provider = new ethers.JsonRpcProvider(PROVIDER_URL);

// The address you want to track
const address = "0xE361d2AAA728Cf93181d2b75C79BCd3f6C42F3A3";  // Replace with the address you want to track

// Function to fetch balance at a specific block number
async function getHistoricalBalance(address, blockNumber) {
    try {
        const balance = await provider.getBalance(address, blockNumber);
        return ethers.formatEther(balance);  // Convert balance from wei to ether
    } catch (err) {
        console.error(`Error fetching balance at block ${blockNumber}:`, err);
    }
}

// Function to get historical balances at specific intervals
async function getHistoricalBalances(address, startBlock, endBlock, step) {
    let blockNumber = startBlock;
    const balances = [];

    while (blockNumber <= endBlock) {
        const balance = await getHistoricalBalance(address, blockNumber);
        console.log(`Balance at block ${blockNumber}: ${balance} ETH`);
        balances.push({ blockNumber, balance });
        blockNumber += step;  // Move to the next step/block interval
    }

    return balances;
}

// Main function
(async () => {
    const currentBlock = await provider.getBlockNumber();
    console.log(`Current block number: ${currentBlock}`);

    // Define the block range for which to retrieve historical data
    const startBlock = currentBlock - 10000; // Fetch from 10,000 blocks ago
    const endBlock = currentBlock;
    const step = 1000; // Interval between blocks (every 1000 blocks)

    // Fetch historical balances
    const historicalBalances = await getHistoricalBalances(address, startBlock, endBlock, step);

    console.log("Historical Balances:", historicalBalances);
})();
