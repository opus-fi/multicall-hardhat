import * as dotenv from 'dotenv';
import { ethers } from 'hardhat';

dotenv.config();

async function main() {
  const Multicall = await ethers.getContractFactory('Multicall');
  const multicall = await Multicall.deploy();

  await multicall.deployed();

  console.log('Multicall deployed to: %s', multicall.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
