<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [LQTYStake](./lib-base-u.lqtystake.md) &gt; [whatChanged](./lib-base-u.lqtystake.whatchanged.md)

## LQTYStake.whatChanged() method

Calculate the difference between this `LQTYStake` and `thatStakedLQTY`<!-- -->.

<b>Signature:</b>

```typescript
whatChanged(thatStakedLQTY: Decimalish): LQTYStakeChange<Decimal> | undefined;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  thatStakedLQTY | [Decimalish](./lib-base-u.decimalish.md) |  |

<b>Returns:</b>

[LQTYStakeChange](./lib-base-u.lqtystakechange.md)<!-- -->&lt;[Decimal](./lib-base-u.decimal.md)<!-- -->&gt; \| undefined

An object representing the change, or `undefined` if the staked amounts are equal.

