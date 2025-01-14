<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [TransactableLiquity](./lib-base-u.transactableliquity.md) &gt; [repayLUSD](./lib-base-u.transactableliquity.repaylusd.md)

## TransactableLiquity.repayLUSD() method

Adjust existing Trove by repaying some of its debt.

<b>Signature:</b>

```typescript
repayLUSD(amount: Decimalish): Promise<TroveAdjustmentDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base-u.decimalish.md) | The amount of LUSD to repay. |

<b>Returns:</b>

Promise&lt;[TroveAdjustmentDetails](./lib-base-u.troveadjustmentdetails.md)<!-- -->&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base-u.transactionfailederror.md) in case of transaction failure.

## Remarks

Equivalent to:

```typescript
adjustTrove({ repayLUSD: amount })

```

