<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [Trove](./lib-base-u.trove.md) &gt; [whatChanged](./lib-base-u.trove.whatchanged.md)

## Trove.whatChanged() method

Calculate the difference between this Trove and another.

<b>Signature:</b>

```typescript
whatChanged(that: Trove, borrowingRate?: Decimalish): TroveChange<Decimal> | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  that | [Trove](./lib-base-u.trove.md) | The other Trove. |
|  borrowingRate | [Decimalish](./lib-base-u.decimalish.md) | Borrowing rate to use when calculating a borrowed amount. |

<b>Returns:</b>

[TroveChange](./lib-base-u.trovechange.md)<!-- -->&lt;[Decimal](./lib-base-u.decimal.md)<!-- -->&gt; \| undefined

An object representing the change, or `undefined` if the Troves are equal.
