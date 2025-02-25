<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [EthersLiquity](./lib-ethers-u.ethersliquity.md) &gt; [withdrawGainsFromStaking](./lib-ethers-u.ethersliquity.withdrawgainsfromstaking.md)

## EthersLiquity.withdrawGainsFromStaking() method

Withdraw [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md) from LQTY stake.

<b>Signature:</b>

```typescript
withdrawGainsFromStaking(overrides?: EthersTransactionOverrides): Promise<void>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;void&gt;

## Exceptions

Throws [EthersTransactionFailedError](./lib-ethers-u.etherstransactionfailederror.md) in case of transaction failure. Throws [EthersTransactionCancelledError](./lib-ethers-u.etherstransactioncancellederror.md) if the transaction is cancelled or replaced.

