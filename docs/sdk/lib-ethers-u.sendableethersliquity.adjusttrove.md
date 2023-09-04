<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [SendableEthersLiquity](./lib-ethers-u.sendableethersliquity.md) &gt; [adjustTrove](./lib-ethers-u.sendableethersliquity.adjusttrove.md)

## SendableEthersLiquity.adjustTrove() method

Adjust existing Trove by changing its collateral, debt, or both.

<b>Signature:</b>

```typescript
adjustTrove(params: TroveAdjustmentParams<Decimalish>, maxBorrowingRateOrOptionalParams?: Decimalish | BorrowingOperationOptionalParams, overrides?: EthersTransactionOverrides): Promise<SentEthersLiquityTransaction<TroveAdjustmentDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveAdjustmentParams](./lib-base-u.troveadjustmentparams.md)<!-- -->&lt;[Decimalish](./lib-base-u.decimalish.md)<!-- -->&gt; | Parameters of the adjustment. |
|  maxBorrowingRateOrOptionalParams | [Decimalish](./lib-base-u.decimalish.md) \| [BorrowingOperationOptionalParams](./lib-ethers-u.borrowingoperationoptionalparams.md) |  |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[SentEthersLiquityTransaction](./lib-ethers-u.sentethersliquitytransaction.md)<!-- -->&lt;[TroveAdjustmentDetails](./lib-base-u.troveadjustmentdetails.md)<!-- -->&gt;&gt;

## Remarks

The transaction will fail if the Trove's debt would fall below [LUSD\_MINIMUM\_DEBT](./lib-base-u.lusd_minimum_debt.md)<!-- -->.

If `maxBorrowingRate` is omitted, the current borrowing rate plus 0.5% is used as maximum acceptable rate.
