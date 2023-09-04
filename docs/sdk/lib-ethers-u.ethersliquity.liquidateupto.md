<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [EthersLiquity](./lib-ethers-u.ethersliquity.md) &gt; [liquidateUpTo](./lib-ethers-u.ethersliquity.liquidateupto.md)

## EthersLiquity.liquidateUpTo() method

Liquidate the least collateralized Troves up to a maximum number.

<b>Signature:</b>

```typescript
liquidateUpTo(maximumNumberOfTrovesToLiquidate: number, overrides?: EthersTransactionOverrides): Promise<LiquidationDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  maximumNumberOfTrovesToLiquidate | number | Stop after liquidating this many Troves. |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[LiquidationDetails](./lib-base-u.liquidationdetails.md)<!-- -->&gt;

## Exceptions

Throws [EthersTransactionFailedError](./lib-ethers-u.etherstransactionfailederror.md) in case of transaction failure. Throws [EthersTransactionCancelledError](./lib-ethers-u.etherstransactioncancellederror.md) if the transaction is cancelled or replaced.
