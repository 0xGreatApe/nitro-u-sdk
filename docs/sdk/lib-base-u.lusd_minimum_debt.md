<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [LUSD\_MINIMUM\_DEBT](./lib-base-u.lusd_minimum_debt.md)

## LUSD\_MINIMUM\_DEBT variable

A Trove must always have at least this much debt.

<b>Signature:</b>

```typescript
LUSD_MINIMUM_DEBT: Decimal
```

## Remarks

Any transaction that would result in a Trove with less debt than this will be reverted.

