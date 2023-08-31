# lib-ethers-u

[Ethers](https://www.npmjs.com/package/ethers)-based library for reading U protocol state and sending transactions.

## Quickstart

Install in your project:

```
npm install --save lib-base-u lib-ethers-u ethers@^5.0.0
```

Connecting to an Ethereum node and sending a transaction:

```javascript
const { Wallet, providers } = require("ethers");
const { EthersLiquity } = require("lib-ethers-u");

async function example() {
  const provider = new providers.JsonRpcProvider("http://localhost:8545");
  const wallet = new Wallet(process.env.PRIVATE_KEY).connect(provider);
  const liquity = await EthersLiquity.connect(wallet);

  const { newTrove } = await liquity.openTrove({
    depositCollateral: 5, // ETH
    borrowLUSD: 2000
  });

  console.log(`Successfully opened a Liquity Trove (${newTrove})!`);
}
```

## More examples

See [packages/examples](https://github.com/liquity/liquity/tree/master/packages/examples) in the repo.
 

## API Reference

For now, it can be found in the public Liquity [repo](https://github.com/liquity/liquity/blob/master/docs/sdk/lib-ethers.md).
