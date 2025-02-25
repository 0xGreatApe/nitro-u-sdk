<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [PopulatableEthersLiquity](./lib-ethers-u.populatableethersliquity.md) &gt; [openTrove](./lib-ethers-u.populatableethersliquity.opentrove.md)

## PopulatableEthersLiquity.openTrove() method

Open a new Trove by depositing collateral and borrowing LUSD.

<b>Signature:</b>

```typescript
openTrove(params: TroveCreationParams<Decimalish>, maxBorrowingRateOrOptionalParams?: Decimalish | BorrowingOperationOptionalParams, overrides?: EthersTransactionOverrides): Promise<PopulatedEthersLiquityTransaction<TroveCreationDetails>>;
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  params | [TroveCreationParams](./lib-base-u.trovecreationparams.md)<!-- -->&lt;[Decimalish](./lib-base-u.decimalish.md)<!-- -->&gt; | How much to deposit and borrow. |
|  maxBorrowingRateOrOptionalParams | [Decimalish](./lib-base-u.decimalish.md) \| [BorrowingOperationOptionalParams](./lib-ethers-u.borrowingoperationoptionalparams.md) |  |
|  overrides | [EthersTransactionOverrides](./lib-ethers-u.etherstransactionoverrides.md) |  |

<b>Returns:</b>

Promise&lt;[PopulatedEthersLiquityTransaction](./lib-ethers-u.populatedethersliquitytransaction.md)<!-- -->&lt;[TroveCreationDetails](./lib-base-u.trovecreationdetails.md)<!-- -->&gt;&gt;

## Remarks

If `maxBorrowingRate` is omitted, the current borrowing rate plus 0.5% is used as maximum acceptable rate.

