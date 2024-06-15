
const { Wallet, verifyMessage } = require('ethers');

const message = "Hello, Ethereum!"
const signature = "0x83b45577d076ad4856e77768d3f757677bc1e3f12743038c04ded529446a12fc73d44ff2f564a823c0a71da27455f4eeee6f3a5f2a7b8156a95afb5ad7bde72f1b"

function verifyMessageWithEthers(message, signature) {
    const signerAddress = verifyMessage(message, signature);
    return signerAddress;
}

const signerAddress = verifyMessageWithEthers(message, signature);
console.log(`Message signed by: ${signerAddress}`);