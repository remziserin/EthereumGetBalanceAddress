const ethers = require('ethers')
const provider = ethers.getDefaultProvider("mainnet")

async function EthereumGetBalanceAddress(address){
    const Balance1 = await provider.getBalance(address)
    const Balance = ethers.utils.formatEther(Balance1)
    console.log("Address Balance => ",Balance);
}


EthereumGetBalanceAddress("0x........")