// import web3 from './web3';
// //Your contract address
// const address = '0xf7f840eecb86207d68275d1ac7a493ef405003d7';
// //Your contract ABI
// const abi =
// [
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "hashcount",
//     "outputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "",
//         "type": "uint256"
//       }
//     ],
//     "name": "fileHashes",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "inputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "constructor"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "x",
//         "type": "string"
//       }
//     ],
//     "name": "set",
//     "outputs": [],
//     "payable": false,
//     "stateMutability": "nonpayable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [],
//     "name": "get",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   },
//   {
//     "constant": false,
//     "inputs": [
//       {
//         "name": "x",
//         "type": "string"
//       }
//     ],
//     "name": "setFileHash",
//     "outputs": [],
//     "payable": true,
//     "stateMutability": "payable",
//     "type": "function"
//   },
//   {
//     "constant": true,
//     "inputs": [
//       {
//         "name": "i",
//         "type": "uint256"
//       }
//     ],
//     "name": "getFileHashes",
//     "outputs": [
//       {
//         "name": "",
//         "type": "string"
//       }
//     ],
//     "payable": false,
//     "stateMutability": "view",
//     "type": "function"
//   }
// ]
// export default new web3.eth.Contract(abi, address);



/////////////////////////////////////////////////////////////////////////////////////////////


import web3 from './web3';
//Your contract address
const address = '0xa6c0d8896c0c593f8a19a86d8f48698822528f43';
//Your contract ABI
const abi =
[
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "documentHash",
        "type": "string"
      },
      {
        "name": "documentName",
        "type": "string"
      },
      {
        "name": "userAddress",
        "type": "string"
      },
      {
        "name": "userName",
        "type": "string"
      }
    ],
    "name": "addDocument",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "i",
        "type": "string"
      }
    ],
    "name": "getdocument",
    "outputs": [
      {
        "name": "",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
export default new web3.eth.Contract(abi, address);
