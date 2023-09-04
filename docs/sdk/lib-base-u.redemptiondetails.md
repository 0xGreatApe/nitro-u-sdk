<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [RedemptionDetails](./lib-base-u.redemptiondetails.md)

## RedemptionDetails interface

Details of a [redeemLUSD()](./lib-base-u.transactableliquity.redeemlusd.md) transaction.

<b>Signature:</b>

```typescript
export interface RedemptionDetails 
```

## Properties

|  Property | Type | Description |
|  --- | --- | --- |
|  [actualLUSDAmount](./lib-base-u.redemptiondetails.actuallusdamount.md) | [Decimal](./lib-base-u.decimal.md) | Amount of LUSD that was actually redeemed by the transaction. |
|  [attemptedLUSDAmount](./lib-base-u.redemptiondetails.attemptedlusdamount.md) | [Decimal](./lib-base-u.decimal.md) | Amount of LUSD the redeemer tried to redeem. |
|  [collateralTaken](./lib-base-u.redemptiondetails.collateraltaken.md) | [Decimal](./lib-base-u.decimal.md) | Amount of collateral (e.g. Ether) taken from Troves by the transaction. |
|  [fee](./lib-base-u.redemptiondetails.fee.md) | [Decimal](./lib-base-u.decimal.md) | Amount of native currency (e.g. Ether) deducted as fee from collateral taken. |
