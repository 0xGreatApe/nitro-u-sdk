<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [SendableLiquity](./lib-base-u.sendableliquity.md) &gt; [unstakeLQTY](./lib-base-u.sendableliquity.unstakelqty.md)

## SendableLiquity.unstakeLQTY() method

Withdraw LQTY from staking.

<b>Signature:</b>

```typescript
unstakeLQTY(amount: Decimalish): Promise<SentLiquityTransaction<S, LiquityReceipt<R, void>>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  amount | [Decimalish](./lib-base-u.decimalish.md) | Amount of LQTY to withdraw. |

<b>Returns:</b>

Promise&lt;[SentLiquityTransaction](./lib-base-u.sentliquitytransaction.md)<!-- -->&lt;S, [LiquityReceipt](./lib-base-u.liquityreceipt.md)<!-- -->&lt;R, void&gt;&gt;&gt;

## Remarks

As a side-effect, the transaction will also pay out the LQTY stake's [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md)<!-- -->.

