<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [TransactableLiquity](./lib-base-u.transactableliquity.md)

## TransactableLiquity interface

Send Liquity transactions and wait for them to succeed.

<b>Signature:</b>

```typescript
export interface TransactableLiquity 
```

## Remarks

The functions return the details of the transaction (if any), or throw an implementation-specific subclass of [TransactionFailedError](./lib-base-u.transactionfailederror.md) in case of transaction failure.

Implemented by [EthersLiquity](./lib-ethers-u.ethersliquity.md)<!-- -->.

## Methods

|  Method | Description |
|  --- | --- |
|  [adjustTrove(params, maxBorrowingRate)](./lib-base-u.transactableliquity.adjusttrove.md) | Adjust existing Trove by changing its collateral, debt, or both. |
|  [borrowLUSD(amount, maxBorrowingRate)](./lib-base-u.transactableliquity.borrowlusd.md) | Adjust existing Trove by borrowing more LUSD. |
|  [claimCollateralSurplus()](./lib-base-u.transactableliquity.claimcollateralsurplus.md) | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove()](./lib-base-u.transactableliquity.closetrove.md) | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount)](./lib-base-u.transactableliquity.depositcollateral.md) | Adjust existing Trove by depositing more collateral. |
|  [depositLUSDInStabilityPool(amount, frontendTag)](./lib-base-u.transactableliquity.depositlusdinstabilitypool.md) | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining()](./lib-base-u.transactableliquity.exitliquiditymining.md) | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address)](./lib-base-u.transactableliquity.liquidate.md) | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate)](./lib-base-u.transactableliquity.liquidateupto.md) | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRate)](./lib-base-u.transactableliquity.opentrove.md) | Open a new Trove by depositing collateral and borrowing LUSD. |
|  [redeemLUSD(amount, maxRedemptionRate)](./lib-base-u.transactableliquity.redeemlusd.md) | Redeem LUSD to native currency (e.g. Ether) at face value. |
|  [repayLUSD(amount)](./lib-base-u.transactableliquity.repaylusd.md) | Adjust existing Trove by repaying some of its debt. |
|  [sendLQTY(toAddress, amount)](./lib-base-u.transactableliquity.sendlqty.md) | Send LQTY tokens to an address. |
|  [sendLUSD(toAddress, amount)](./lib-base-u.transactableliquity.sendlusd.md) | Send LUSD tokens to an address. |
|  [stakeLQTY(amount)](./lib-base-u.transactableliquity.stakelqty.md) | Stake LQTY to start earning fee revenue or increase existing stake. |
|  [transferCollateralGainToTrove()](./lib-base-u.transactableliquity.transfercollateralgaintotrove.md) | Transfer [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeLQTY(amount)](./lib-base-u.transactableliquity.unstakelqty.md) | Withdraw LQTY from staking. |
|  [withdrawCollateral(amount)](./lib-base-u.transactableliquity.withdrawcollateral.md) | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool()](./lib-base-u.transactableliquity.withdrawgainsfromstabilitypool.md) | Withdraw [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) and [LQTY reward](./lib-base-u.stabilitydeposit.lqtyreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking()](./lib-base-u.transactableliquity.withdrawgainsfromstaking.md) | Withdraw [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md) from LQTY stake. |
|  [withdrawLQTYRewardFromLiquidityMining()](./lib-base-u.transactableliquity.withdrawlqtyrewardfromliquiditymining.md) | Withdraw LQTY that has been earned by mining liquidity. |
|  [withdrawLUSDFromStabilityPool(amount)](./lib-base-u.transactableliquity.withdrawlusdfromstabilitypool.md) | Withdraw LUSD from Stability Deposit. |

