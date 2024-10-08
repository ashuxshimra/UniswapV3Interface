// Token addresses
shoaibAddress= '0xf09e7Af8b380cD01BD0d009F83a6b668A47742ec'
rayyanAddrss= '0x492844c46CEf2d751433739fc3409B7A4a5ba9A7'
popUpAddress= '0x50cf1849e32E6A17bBFF6B1Aa8b1F7B479Ad6C12'

// Uniswap contract address
wethAddress= '0xC1dC7a8379885676a6Ea08E67b7Defd9a235De71'
factoryAddress= '0xf0F5e9b00b92f3999021fD8B88aC75c351D93fc7'
swapRouterAddress= '0xCC9676b9bf25cE45a3a5F88205239aFdDeCF1BC7'
nftDescriptorAddress= '0xe58cBE144dD5556C84874deC1b3F2d0D6Ac45F1b'
positionDescriptorAddress= '0xDC0a0B1Cd093d321bD1044B5e0Acb71b525ABb6b'     
positionManagerAddress= '0xDe1112a0960B9619da7F91D51fB571cdefE48B5E'        

const artifacts = {
  UniswapV3Factory: require("@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json"),
  NonfungiblePositionManager: require("@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json"),
};

// const { waffle } = require("hardhat");
const { Contract, BigNumber } = require("ethers");
const bn = require("bignumber.js");
const Web3Modal = require("web3modal");
bn.config({ EXPONENTIAL_AT: 999999, DECIMAL_PLACES: 40 });

const MAINNET_URL = "https://eth-mainnet.g.alchemy.com/v2/fjaU67muXrt6JXcEpDaPTD9sBa8Foe-4";

const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);

function encodePriceSqrt(reserve1, reserve0) {
  return BigNumber.from(
    new bn(reserve1.toString())
      .div(reserve0.toString())
      .sqrt()
      .multipliedBy(new bn(2).pow(96))
      .integerValue(3)
      .toString()
  );
}

const nonfungiblePositionManager = new Contract(
  positionManagerAddress,
  artifacts.NonfungiblePositionManager.abi,
  provider
);

const factory = new Contract(
  factoryAddress,
  artifacts.UniswapV3Factory.abi,
  provider
);

async function deployPool(token0, token1, fee, price) {
  // const [owner] = await ethers.getSigners();
  const MAINNET_URL = "test network url";

  const WALLET_ADDRESS = "your";
  const WALLET_SECRET = "your";
  const provider = new ethers.providers.JsonRpcProvider(MAINNET_URL);
  const wallet = new ethers.Wallet(WALLET_SECRET);
  const signer = wallet.connect(provider);
  const create = await nonfungiblePositionManager
    .connect(signer)
    .createAndInitializePoolIfNecessary(token0, token1, fee, price, {
      gasLimit: 5000000,
    });

  console.log(create);
  const poolAddress = await factory
    .connect(signer)
    .getPool(token0, token1, fee);
  return poolAddress;
}

async function main() {
  const shoRay = await deployPool(
    popUpAddress,
    rayyanAddrss,
    3000,
    encodePriceSqrt(1, 1)
  );

  console.log("SHO_RAY=", `'${shoRay}'`);
}

/*
  npx hardhat run --network goerli scripts/deployPool.js
  */

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
