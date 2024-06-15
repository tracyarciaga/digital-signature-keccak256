
//Import Libraries
const EC = require('elliptic').ec;
const keccak256 = require('keccak256')
const ec = new EC('secp256k1');

//Generate a Key Pair
const key = ec.genKeyPair();
const publicKey = key.getPublic('hex');
const privateKey = key.getPrivate('hex');

//Generate a Signature
const message = "Hello, Ethereum!";
const msgHash = keccak256(Buffer.from(message));
const signature = key.sign(msgHash, 'hex');

// Verify the signature
const isValid = ec.verify(msgHash, signature, publicKey, 'hex');
console.log(isValid);