<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [SendableEthersLiquity](./lib-ethers-u.sendableethersliquity.md) &gt; [liquidate](./lib-ethers-u.sendableethersliquity.liquidate.md)

## SendableEthersLiquity.liquidate() method

Liquidate one or more undercollateralized Troves.

<b>Signature:</b>

```typescript
liquidate(address: string | string[], overrides?: EthersTransactionOverrides): Promise<SentEthersLiquityTransaction<LiquidationDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  address | string \| string\[\] | Address or array of addresses whose Troves to liquidate. |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentEthersLiquityTransaction](./lib-ethers-u.sentethersliquitytransaction.md)<!-- -->&lt;[LiquidationDetails](./lib-base-u.liquidationdetails.md)<!-- -->&gt;&gt;
