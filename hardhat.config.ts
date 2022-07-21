import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import * as dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.15',
  networks: {
    neonlabs: {
      url: process.env.PROXY_URL ? process.env.PROXY_URL : undefined,
      accounts: process.env.DEPLOYER_PRIVATE_KEY
        ? [process.env.DEPLOYER_PRIVATE_KEY]
        : undefined,
      chainId: process.env.NETWORK_ID
        ? Number(process.env.NETWORK_ID)
        : undefined,
      gas: 3000000,
      gasPrice: 200000000000,
      blockGasLimit: 10000000,
      allowUnlimitedContractSize: false,
      timeout: 1000000,
    },
  },
};

export default config;
