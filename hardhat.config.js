require("@nomiclabs/hardhat-waffle")
const fs = require("fs")
const privateKey = fs.readFileSync(".secret").toString()
const projectId = "31c56f22121046e1985c0e52c0369a30"

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    mumbai:{
     url: `https://polygon-mumbai.infura.io/v3/${projectId}`,    //connessione al server Mumbuai 
    accounts: [privateKey]                                      //chiave privata del proprio acoount Metamask
    },
    mainnet:{
      url: `https://polygon-mainnet.infura.io/v3/${projectId}`,   //connessione al server Mainnet
      accounts: [privateKey]                                      //chiave privata del proprio acoount Metamask
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}