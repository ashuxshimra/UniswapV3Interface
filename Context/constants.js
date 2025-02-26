import booToken from "./BooToken.json";
import lifeToken from "./LifeToken.json";
import singleSwapToken from "./SingleSwapToken.json";
import swapMultiHop from "./SwapMultiHop.json";
import IWETH from "./IWETH.json";
import userStorgeData from "./UserStorageData.json";

//BOOTOKEN
export const BooTokenAddress = "0xdB05A386810c809aD5a77422eb189D36c7f24402";
export const BooTokenABI = booToken.abi;

//LIFE TOken
export const LifeTokenAddress = "0xbf2ad38fd09F37f50f723E35dd84EEa1C282c5C9";
export const LifeTokenABI = lifeToken.abi;

//SINGLE SWAP TOKEN
export const SingleSwapTokenAddress =
  "0x9581c795DBcaf408E477F6f1908a41BE43093122";
export const SingleSwapTokenABI = singleSwapToken.abi;

// SWAP MULTIHOP
export const SwapMultiHopAddress = "0x3CA5269B5c54d4C807Ca0dF7EeB2CB7a5327E77d";
export const SwapMultiHopABI = swapMultiHop.abi;

//IWETH
export const IWETHAddress = "0x2d13826359803522cCe7a4Cfa2c1b582303DD0B4";
export const IWETHABI = IWETH.abi;

//USER STORAGE DAta

export const userStorageDataAddrss =
  "0x8a6E9a8E0bB561f8cdAb1619ECc4585aaF126D73";
export const userStorageDataABI = userStorgeData.abi;
