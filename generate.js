const { Wallet } = require('ethers');

async function signMessageWithEthers(privateKey, message) {
    const wallet = new Wallet(privateKey);
    const signature = await wallet.signMessage(message);
    return signature;
}

const message = "Hello, Ethereum!";
const privateKey = 'dc1a88872b5c965004cebd2450be493b701937118aac41040b8ad4c5dba7ee70'; // Make sure to provide your private key with or without the '0x' prefix
signMessageWithEthers(privateKey, message).then(signature => {
    console.log(`Signature: ${signature}`);
});
