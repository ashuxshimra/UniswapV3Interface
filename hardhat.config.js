// // require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: {
//     compilers: [
//       {
//         version: "0.7.6",
//         settings: {
//           evmVersion: "istanbul",
//           optimizer: {
//             enabled: true,
//             runs: 1000,
//           },
//         },
//       },
//     ],
//   },
//   networks: {
//     hardhat: {
//       forking: {
//         url: "https://eth-mainnet.g.alchemy.com/v2/fjaU67muXrt6JXcEpDaPTD9sBa8Foe-4",
//       },
//     },
//   },
// };

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 5000,
        details: { yul: false },
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.g.alchemy.com/v2/fjaU67muXrt6JXcEpDaPTD9sBa8Foe-4",
        accounts: [`0x${"ac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80"}`],
      },
    },
  },
};
