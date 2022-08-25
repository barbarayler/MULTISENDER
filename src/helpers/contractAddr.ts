import { ethers, providers } from "ethers"
const { JsonRpcProvider } = providers


// testnet
export const provider80001 = new JsonRpcProvider('https://rpc-mumbai.maticvigil.com')
export const multiSenderAddr80001 = '0x71345D28d438A7f2f8C5E4a003F04c23d8Ab8A12'

// mainnet
export const provider137 = new JsonRpcProvider('https://rpc-mainnet.maticvigil.com')
export const multiSenderAddr137 = 'Contract address here'
