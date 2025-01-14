<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [SendableLiquity](./lib-base-u.sendableliquity.md)

## SendableLiquity interface

Send Liquity transactions.

<b>Signature:</b>

```typescript
export interface SendableLiquity<R = unknown, S = unknown> extends _SendableFrom<TransactableLiquity, R, S> 
```
<b>Extends:</b> \_SendableFrom&lt;[TransactableLiquity](./lib-base-u.transactableliquity.md)<!-- -->, R, S&gt;

## Remarks

The functions return an object implementing [SentLiquityTransaction](./lib-base-u.sentliquitytransaction.md)<!-- -->, which can be used to monitor the transaction and get its details when it succeeds.

Implemented by [SendableEthersLiquity](./lib-ethers-u.sendableethersliquity.md)<!-- -->.

## Methods

|  Method | Description |
|  --- | --- |
|  [adjustTrove(params, maxBorrowingRate)](./lib-base-u.sendableliquity.adjusttrove.md) | Adjust existing Trove by changing its collateral, debt, or both. |
|  [borrowLUSD(amount, maxBorrowingRate)](./lib-base-u.sendableliquity.borrowlusd.md) | Adjust existing Trove by borrowing more LUSD. |
|  [claimCollateralSurplus()](./lib-base-u.sendableliquity.claimcollateralsurplus.md) | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove()](./lib-base-u.sendableliquity.closetrove.md) | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount)](./lib-base-u.sendableliquity.depositcollateral.md) | Adjust existing Trove by depositing more collateral. |
|  [depositLUSDInStabilityPool(amount, frontendTag)](./lib-base-u.sendableliquity.depositlusdinstabilitypool.md) | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining()](./lib-base-u.sendableliquity.exitliquiditymining.md) | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address)](./lib-base-u.sendableliquity.liquidate.md) | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate)](./lib-base-u.sendableliquity.liquidateupto.md) | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRate)](./lib-base-u.sendableliquity.opentrove.md) | Open a new Trove by depositing collateral and borrowing LUSD. |
|  [redeemLUSD(amount, maxRedemptionRate)](./lib-base-u.sendableliquity.redeemlusd.md) | Redeem LUSD to native currency (e.g. Ether) at face value. |
|  [repayLUSD(amount)](./lib-base-u.sendableliquity.repaylusd.md) | Adjust existing Trove by repaying some of its debt. |
|  [sendLQTY(toAddress, amount)](./lib-base-u.sendableliquity.sendlqty.md) | Send LQTY tokens to an address. |
|  [sendLUSD(toAddress, amount)](./lib-base-u.sendableliquity.sendlusd.md) | Send LUSD tokens to an address. |
|  [stakeLQTY(amount)](./lib-base-u.sendableliquity.stakelqty.md) | Stake LQTY to start earning fee revenue or increase existing stake. |
|  [transferCollateralGainToTrove()](./lib-base-u.sendableliquity.transfercollateralgaintotrove.md) | Transfer [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeLQTY(amount)](./lib-base-u.sendableliquity.unstakelqty.md) | Withdraw LQTY from staking. |
|  [withdrawCollateral(amount)](./lib-base-u.sendableliquity.withdrawcollateral.md) | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool()](./lib-base-u.sendableliquity.withdrawgainsfromstabilitypool.md) | Withdraw [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) and [LQTY reward](./lib-base-u.stabilitydeposit.lqtyreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking()](./lib-base-u.sendableliquity.withdrawgainsfromstaking.md) | Withdraw [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md) from LQTY stake. |
|  [withdrawLQTYRewardFromLiquidityMining()](./lib-base-u.sendableliquity.withdrawlqtyrewardfromliquiditymining.md) | Withdraw LQTY that has been earned by mining liquidity. |
|  [withdrawLUSDFromStabilityPool(amount)](./lib-base-u.sendableliquity.withdrawlusdfromstabilitypool.md) | Withdraw LUSD from Stability Deposit. |

