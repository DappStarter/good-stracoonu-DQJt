require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess kiwi suit foot dance decrease machine hospital hunt inhale equal genius'; 
let testAccounts = [
"0x807713b0722716ec805c060f17b86d4d69b636a47fc8fc07e43d8b0a011e8b1f",
"0xb2ab4779038cb7a3192217c3668d561af7cc5d07f847cd7e5fe66218086f32ac",
"0x58f6feaedde1928e58e4581790028c495b8521149b32a3a0d49ed0ebe76f31e4",
"0x961166d25cf64901cb6d027d3c6e01e20ce5ca23d02d1199b4c242f2a3a48669",
"0x0ca0851a53c2fc48be89eadb68997628893dd0240ac60d0a66d8e374748cfbe9",
"0x0afa7d6da590ae0b37caf5f99b9074081684f90c451abcbfecf3c0b3072afa18",
"0x6c38cdf06a55cd520521574394a4147f98bd206023d1308305d3942219fab404",
"0xcee3f9e91d44ab38dc003f2f2b0ce8d7dd41db767e1847f18d7a52c4d0c874a3",
"0x7b695c2f8f07414bbe172b58a027ac6df3904f580e3311111660baac43ea9e2f",
"0x87575d65daf9162b9d540ad96d9efc78ef3c4155fad2790f6125eb02b502da04"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

