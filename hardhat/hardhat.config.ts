import 'dotenv/config';
import fs from 'fs';
import { HardhatUserConfig } from 'hardhat/types';
import { subtask, task, types } from 'hardhat/config';
import '@typechain/hardhat';
import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-waffle';
import 'hardhat-deploy';

let mnemonic = process.env.MNEMONIC;
if (!mnemonic) {
	mnemonic = 'test test test test test test test test test test test junk';
}
const mnemonicAccounts = {
	mnemonic,
};

const testLocalnetAccount = {
	address: '',
	privateKey: '',
};

const account: { [name: string]: string | undefined } = {
	Localnet: process.env.LOCALNET_PRIVATE_KEY,
	Testnet: process.env.TESTNET_PRIVATE_KEY,
	Mainnet: process.env.MAINNET_PRIVATE_KEY,
};

// Default output dir to abi contracts
const contractsDir = '../contracts';

// This adds support for typescript paths mappings
import 'tsconfig-paths/register';

const config: HardhatUserConfig = {
	solidity: {
		version: '0.8.2',
	},
	defaultNetwork: 'localnet',
	networks: {
		hardhat: {
			accounts: mnemonicAccounts,
		},
		localnet: {
			url: 'http://127.0.0.1:18888/rpc',
			chainId: 366,
			accounts: account.Localnet ? [account.Localnet] : [testLocalnetAccount.privateKey],
		},
		mumbai: {
			provider: () =>
			  new HDWalletProvider(mnemonic, `https://rpc-mumbai.maticvigil.com`),
			network_id: 80001,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		  },
		  matic: {
			provider: () =>
			  new HDWalletProvider(
				mnemonic,
				`https://polygon-mumbai.g.alchemy.com/v2/s1b_xfH_dzDOOvbpqtGNEDaMFgvYAu18`,
			  ),
			network_id: 80001,
			confirmations: 2,
			timeoutBlocks: 200,
			skipDryRun: true,
		  },
	},
	typechain: {
		outDir: 'types',
		target: 'ethers-v5',
	},
	namedAccounts: {
		deployer: {
			default: 0, // here this will by default take the first account as deployer
		},
	},
};

task('deploy', 'Deploy contracts').setAction(async (taskArgs, hre, runSuper) => {
	if (!fs.existsSync(contractsDir)) {
		fs.mkdirSync(contractsDir, { recursive: true });
	}
	await runSuper(taskArgs);
});
task('deployMultiSender')
  .setAction(async (taskArgs, hre) => {
    const MultiSender = await hre.ethers.getContractFactory('MultiSender')
    const multiSender = await MultiSender.deploy()
    await multiSender.deployed()
    console.log('Contract deployed to: ', multiSender.address)
  });

export default config;
