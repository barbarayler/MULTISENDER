import { ethers } from 'ethers'
import { messagesTable } from './utils'

declare global {
	interface Window {
		ethereum: any
		signer: ethers.Signer 
		chainId: 80001
		wallet: string
	}
}

export const BN = ethers.BigNumber.from
export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'  // '0x' + '0'.repeat(40)

export const getSigner = () => {
	const provider = new ethers.providers.Web3Provider(window.ethereum)
	return provider.getSigner()
}
export const isFunction = (obj: unknown): obj is (...args: any[]) => any => obj instanceof Function;

export const loadWeb3 = async (setWallet: any , setChainId: any, setChainIdMsg: any, setWalletMsg: any) => {
	if (!window.ethereum) {
		setChainIdMsg(messagesTable.NOT_INSTALLED)
	} else {
		const signer = getSigner()
		const chainId = await signer.getChainId()
		setChainId(chainId)
		const accounts = await window.ethereum.request({ method: 'eth_accounts' })
		handleAccountChanged(accounts, setWallet, setWalletMsg)
		window.ethereum.on('chainChanged', () => window.location.reload())
		window.ethereum.on('accountsChanged', (accounts: string[]) => handleAccountChanged(accounts, setWallet, setWalletMsg))
	}
}
export const handleAccountChanged = (accounts: string[],
	setWallet: any, setWalletMsg: any,) => {
	if (accounts.length > 0) {
		setWallet(accounts[0])
		setWalletMsg('')
	}
	else {
		setWallet('')
		setWalletMsg(messagesTable.METAMASK_LOCKED)
	}
}

export const getExplorerUrls = (_chainId: number) => {
	if (_chainId === 80001) return 'https://mumbai.polygonscan.com/'
	if (_chainId === 137) return 'https://polygonscan.com/'
	return ''
}
export const getTokenUrlPrefix = (_chainId: number) => {
	if (_chainId === 80001) return 'https://mumbai.polygonscan.com//address/'
	
	if (_chainId === 137) return 'https://polygonscan.com//address/'
	
	return ''
}


export const convertEthToWei = (_amountInEth: string): ethers.BigNumber => {
	try {
		return ethers.utils.parseEther(_amountInEth)
	} catch (err) {
		console.log(err)
		return BN('0')
	}
}