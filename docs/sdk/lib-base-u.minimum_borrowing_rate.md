<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [MINIMUM\_BORROWING\_RATE](./lib-base-u.minimum_borrowing_rate.md)

## MINIMUM\_BORROWING\_RATE variable

Value that the [borrowing rate](./lib-base-u.fees.borrowingrate.md) will never decay below.

<b>Signature:</b>

```typescript
MINIMUM_BORROWING_RATE: Decimal
```

## Remarks

Note that the borrowing rate can still be lower than this during recovery mode, when it's overridden by zero.
