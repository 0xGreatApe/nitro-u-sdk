<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [Trove](./lib-base-u.trove.md) &gt; [adjustTo](./lib-base-u.trove.adjustto.md)

## Trove.adjustTo() method

Calculate the parameters of an [adjustTrove()](./lib-base-u.transactableliquity.adjusttrove.md) transaction that will change this Trove into the given Trove.

<b>Signature:</b>

```typescript
adjustTo(that: Trove, borrowingRate?: Decimalish): TroveAdjustmentParams<Decimal>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  that | [Trove](./lib-base-u.trove.md) | The desired result of the transaction. |
|  borrowingRate | [Decimalish](./lib-base-u.decimalish.md) | Current borrowing rate. |

<b>Returns:</b>

[TroveAdjustmentParams](./lib-base-u.troveadjustmentparams.md)<!-- -->&lt;[Decimal](./lib-base-u.decimal.md)<!-- -->&gt;

