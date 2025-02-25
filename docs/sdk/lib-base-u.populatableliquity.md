<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-base-u](./lib-base-u.md) &gt; [PopulatableLiquity](./lib-base-u.populatableliquity.md)

## PopulatableLiquity interface

Prepare Liquity transactions for sending.

<b>Signature:</b>

```typescript
export interface PopulatableLiquity<R = unknown, S = unknown, P = unknown> extends _PopulatableFrom<SendableLiquity<R, S>, P> 
```
<b>Extends:</b> \_PopulatableFrom&lt;[SendableLiquity](./lib-base-u.sendableliquity.md)<!-- -->&lt;R, S&gt;, P&gt;

## Remarks

The functions return an object implementing [PopulatedLiquityTransaction](./lib-base-u.populatedliquitytransaction.md)<!-- -->, which can be used to send the transaction and get a [SentLiquityTransaction](./lib-base-u.sentliquitytransaction.md)<!-- -->.

Implemented by [PopulatableEthersLiquity](./lib-ethers-u.populatableethersliquity.md)<!-- -->.

## Methods

|  Method | Description |
|  --- | --- |
|  [adjustTrove(params, maxBorrowingRate)](./lib-base-u.populatableliquity.adjusttrove.md) | Adjust existing Trove by changing its collateral, debt, or both. |
|  [borrowLUSD(amount, maxBorrowingRate)](./lib-base-u.populatableliquity.borrowlusd.md) | Adjust existing Trove by borrowing more LUSD. |
|  [claimCollateralSurplus()](./lib-base-u.populatableliquity.claimcollateralsurplus.md) | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove()](./lib-base-u.populatableliquity.closetrove.md) | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount)](./lib-base-u.populatableliquity.depositcollateral.md) | Adjust existing Trove by depositing more collateral. |
|  [depositLUSDInStabilityPool(amount, frontendTag)](./lib-base-u.populatableliquity.depositlusdinstabilitypool.md) | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining()](./lib-base-u.populatableliquity.exitliquiditymining.md) | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address)](./lib-base-u.populatableliquity.liquidate.md) | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate)](./lib-base-u.populatableliquity.liquidateupto.md) | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRate)](./lib-base-u.populatableliquity.opentrove.md) | Open a new Trove by depositing collateral and borrowing LUSD. |
|  [redeemLUSD(amount, maxRedemptionRate)](./lib-base-u.populatableliquity.redeemlusd.md) | Redeem LUSD to native currency (e.g. Ether) at face value. |
|  [repayLUSD(amount)](./lib-base-u.populatableliquity.repaylusd.md) | Adjust existing Trove by repaying some of its debt. |
|  [sendLQTY(toAddress, amount)](./lib-base-u.populatableliquity.sendlqty.md) | Send LQTY tokens to an address. |
|  [sendLUSD(toAddress, amount)](./lib-base-u.populatableliquity.sendlusd.md) | Send LUSD tokens to an address. |
|  [stakeLQTY(amount)](./lib-base-u.populatableliquity.stakelqty.md) | Stake LQTY to start earning fee revenue or increase existing stake. |
|  [transferCollateralGainToTrove()](./lib-base-u.populatableliquity.transfercollateralgaintotrove.md) | Transfer [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeLQTY(amount)](./lib-base-u.populatableliquity.unstakelqty.md) | Withdraw LQTY from staking. |
|  [withdrawCollateral(amount)](./lib-base-u.populatableliquity.withdrawcollateral.md) | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool()](./lib-base-u.populatableliquity.withdrawgainsfromstabilitypool.md) | Withdraw [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) and [LQTY reward](./lib-base-u.stabilitydeposit.lqtyreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking()](./lib-base-u.populatableliquity.withdrawgainsfromstaking.md) | Withdraw [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md) from LQTY stake. |
|  [withdrawLQTYRewardFromLiquidityMining()](./lib-base-u.populatableliquity.withdrawlqtyrewardfromliquiditymining.md) | Withdraw LQTY that has been earned by mining liquidity. |
|  [withdrawLUSDFromStabilityPool(amount)](./lib-base-u.populatableliquity.withdrawlusdfromstabilitypool.md) | Withdraw LUSD from Stability Deposit. |

