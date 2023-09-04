<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [Trove](./lib-base-u.trove.md) &gt; [adjust](./lib-base-u.trove.adjust.md)

## Trove.adjust() method

Calculate the result of an [adjustTrove()](./lib-base-u.transactableliquity.adjusttrove.md) transaction on this Trove.

<b>Signature:</b>

```typescript
adjust(params: TroveAdjustmentParams<Decimalish>, borrowingRate?: Decimalish): Trove;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveAdjustmentParams](./lib-base-u.troveadjustmentparams.md)<!-- -->&lt;[Decimalish](./lib-base-u.decimalish.md)<!-- -->&gt; | Parameters of the transaction. |
|  borrowingRate | [Decimalish](./lib-base-u.decimalish.md) | Borrowing rate to use when adding to the Trove's debt. |

<b>Returns:</b>

[Trove](./lib-base-u.trove.md)
