<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [PopulatableEthersLiquity](./lib-ethers-u.populatableethersliquity.md) &gt; [redeemLUSD](./lib-ethers-u.populatableethersliquity.redeemlusd.md)

## PopulatableEthersLiquity.redeemLUSD() method

Redeem LUSD to native currency (e.g. Ether) at face value.

<b>Signature:</b>

```typescript
redeemLUSD(amount: Decimalish, maxRedemptionRate?: Decimalish, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersRedemption>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base-u.decimalish.md) | Amount of LUSD to be redeemed. |
|  maxRedemptionRate | [Decimalish](./lib-base-u.decimalish.md) | Maximum acceptable [redemption rate](./lib-base-u.fees.redemptionrate.md)<!-- -->. |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedEthersRedemption](./lib-ethers-u.populatedethersredemption.md)<!-- -->&gt;

## Remarks

If `maxRedemptionRate` is omitted, the current redemption rate (based on `amount`<!-- -->) plus 0.1% is used as maximum acceptable rate.
