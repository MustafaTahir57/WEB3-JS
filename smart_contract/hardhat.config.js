require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/xSnW0a7T_wPQoKbhTwqXkHDvBdNOfxuO',
      accounts: ['dafc4775ee09e2c32d399baaac126e90d08c6b0d0d11ce91b704c443379438da'],
    },
  },
};

// 0x1a4F4c46d3Bc9cc113D5CA0d7D0ff594D333b666