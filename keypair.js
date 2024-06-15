
//Import Libraries
const EC = require('elliptic').ec;
const keccak256 = require('keccak256')
const ec = new EC('secp256k1');

//Generate a Key Pair
const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

console.log(`publicKey: ${publicKey}   privateKey: ${privateKey} `);