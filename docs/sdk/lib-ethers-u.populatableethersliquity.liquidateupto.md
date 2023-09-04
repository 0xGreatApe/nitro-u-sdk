<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [PopulatableEthersLiquity](./lib-ethers-u.populatableethersliquity.md) &gt; [liquidateUpTo](./lib-ethers-u.populatableethersliquity.liquidateupto.md)

## PopulatableEthersLiquity.liquidateUpTo() method

Liquidate the least collateralized Troves up to a maximum number.

<b>Signature:</b>

```typescript
liquidateUpTo(maximumNumberOfTrovesToLiquidate: number, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersLiquityTransaction<LiquidationDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maximumNumberOfTrovesToLiquidate | number | Stop after liquidating this many Troves. |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedEthersLiquityTransaction](./lib-ethers-u.populatedethersliquitytransaction.md)<!-- -->&lt;[LiquidationDetails](./lib-base-u.liquidationdetails.md)<!-- -->&gt;&gt;
