<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [TransactableLiquity](./lib-base-u.transactableliquity.md) &gt; [withdrawCollateral](./lib-base-u.transactableliquity.withdrawcollateral.md)

## TransactableLiquity.withdrawCollateral() method

Adjust existing Trove by withdrawing some of its collateral.

<b>Signature:</b>

```typescript
withdrawCollateral(amount: Decimalish): Promise<TroveAdjustmentDetails>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base-u.decimalish.md) | The amount of collateral to withdraw from the Trove. |

<b>Returns:</b>

Promise&lt;[TroveAdjustmentDetails](./lib-base-u.troveadjustmentdetails.md)<!-- -->&gt;

## Exceptions

Throws [TransactionFailedError](./lib-base-u.transactionfailederror.md) in case of transaction failure.

## Remarks

Equivalent to:

```typescript
adjustTrove({ withdrawCollateral: amount })

```
