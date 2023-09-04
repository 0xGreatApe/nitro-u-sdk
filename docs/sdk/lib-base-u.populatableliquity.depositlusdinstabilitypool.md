<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [PopulatableLiquity](./lib-base-u.populatableliquity.md) &gt; [depositLUSDInStabilityPool](./lib-base-u.populatableliquity.depositlusdinstabilitypool.md)

## PopulatableLiquity.depositLUSDInStabilityPool() method

Make a new Stability Deposit, or top up existing one.

<b>Signature:</b>

```typescript
depositLUSDInStabilityPool(amount: Decimalish, frontendTag?: string): Promise<PopulatedLiquityTransaction<P, SentLiquityTransaction<S, LiquityReceipt<R, StabilityDepositChangeDetails>>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base-u.decimalish.md) | Amount of LUSD to add to new or existing deposit. |
|  frontendTag | string | Address that should receive a share of this deposit's LQTY rewards. |

<b>Returns:</b>

Promise&lt;[PopulatedLiquityTransaction](./lib-base-u.populatedliquitytransaction.md)<!-- -->&lt;P, [SentLiquityTransaction](./lib-base-u.sentliquitytransaction.md)<!-- -->&lt;S, [LiquityReceipt](./lib-base-u.liquityreceipt.md)<!-- -->&lt;R, [StabilityDepositChangeDetails](./lib-base-u.stabilitydepositchangedetails.md)<!-- -->&gt;&gt;&gt;&gt;

## Remarks

The `frontendTag` parameter is only effective when making a new deposit.

As a side-effect, the transaction will also pay out an existing Stability Deposit's [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) and [LQTY reward](./lib-base-u.stabilitydeposit.lqtyreward.md)<!-- -->.
