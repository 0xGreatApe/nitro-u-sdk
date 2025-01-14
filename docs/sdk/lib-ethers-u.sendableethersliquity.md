<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [SendableEthersLiquity](./lib-ethers-u.sendableethersliquity.md)

## SendableEthersLiquity class

Ethers-based implementation of [SendableLiquity](./lib-base-u.sendableliquity.md)<!-- -->.

<b>Signature:</b>

```typescript
export declare class SendableEthersLiquity implements SendableLiquity<EthersTransactionReceipt, EthersTransactionResponse> 
```
<b>Implements:</b> [SendableLiquity](./lib-base-u.sendableliquity.md)<!-- -->&lt;[EthersTransactionReceipt](./lib-ethers-u.etherstransactionreceipt.md)<!-- -->, [EthersTransactionResponse](./lib-ethers-u.etherstransactionresponse.md)<!-- -->&gt;

## Constructors

|  Constructor | Modifiers | Description |
|  --- | --- | --- |
|  [(constructor)(populatable)](./lib-ethers-u.sendableethersliquity._constructor_.md) |  | Constructs a new instance of the <code>SendableEthersLiquity</code> class |

## Methods

|  Method | Modifiers | Description |
|  --- | --- | --- |
|  [adjustTrove(params, maxBorrowingRateOrOptionalParams, overrides)](./lib-ethers-u.sendableethersliquity.adjusttrove.md) |  | Adjust existing Trove by changing its collateral, debt, or both. |
|  [borrowLUSD(amount, maxBorrowingRate, overrides)](./lib-ethers-u.sendableethersliquity.borrowlusd.md) |  | Adjust existing Trove by borrowing more LUSD. |
|  [claimCollateralSurplus(overrides)](./lib-ethers-u.sendableethersliquity.claimcollateralsurplus.md) |  | Claim leftover collateral after a liquidation or redemption. |
|  [closeTrove(overrides)](./lib-ethers-u.sendableethersliquity.closetrove.md) |  | Close existing Trove by repaying all debt and withdrawing all collateral. |
|  [depositCollateral(amount, overrides)](./lib-ethers-u.sendableethersliquity.depositcollateral.md) |  | Adjust existing Trove by depositing more collateral. |
|  [depositLUSDInStabilityPool(amount, frontendTag, overrides)](./lib-ethers-u.sendableethersliquity.depositlusdinstabilitypool.md) |  | Make a new Stability Deposit, or top up existing one. |
|  [exitLiquidityMining(overrides)](./lib-ethers-u.sendableethersliquity.exitliquiditymining.md) |  | Withdraw all staked LP tokens from liquidity mining and claim reward. |
|  [liquidate(address, overrides)](./lib-ethers-u.sendableethersliquity.liquidate.md) |  | Liquidate one or more undercollateralized Troves. |
|  [liquidateUpTo(maximumNumberOfTrovesToLiquidate, overrides)](./lib-ethers-u.sendableethersliquity.liquidateupto.md) |  | Liquidate the least collateralized Troves up to a maximum number. |
|  [openTrove(params, maxBorrowingRateOrOptionalParams, overrides)](./lib-ethers-u.sendableethersliquity.opentrove.md) |  | Open a new Trove by depositing collateral and borrowing LUSD. |
|  [redeemLUSD(amount, maxRedemptionRate, overrides)](./lib-ethers-u.sendableethersliquity.redeemlusd.md) |  | Redeem LUSD to native currency (e.g. Ether) at face value. |
|  [repayLUSD(amount, overrides)](./lib-ethers-u.sendableethersliquity.repaylusd.md) |  | Adjust existing Trove by repaying some of its debt. |
|  [sendLQTY(toAddress, amount, overrides)](./lib-ethers-u.sendableethersliquity.sendlqty.md) |  | Send LQTY tokens to an address. |
|  [sendLUSD(toAddress, amount, overrides)](./lib-ethers-u.sendableethersliquity.sendlusd.md) |  | Send LUSD tokens to an address. |
|  [stakeLQTY(amount, overrides)](./lib-ethers-u.sendableethersliquity.stakelqty.md) |  | Stake LQTY to start earning fee revenue or increase existing stake. |
|  [transferCollateralGainToTrove(overrides)](./lib-ethers-u.sendableethersliquity.transfercollateralgaintotrove.md) |  | Transfer [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) from Stability Deposit to Trove. |
|  [unstakeLQTY(amount, overrides)](./lib-ethers-u.sendableethersliquity.unstakelqty.md) |  | Withdraw LQTY from staking. |
|  [withdrawCollateral(amount, overrides)](./lib-ethers-u.sendableethersliquity.withdrawcollateral.md) |  | Adjust existing Trove by withdrawing some of its collateral. |
|  [withdrawGainsFromStabilityPool(overrides)](./lib-ethers-u.sendableethersliquity.withdrawgainsfromstabilitypool.md) |  | Withdraw [collateral gain](./lib-base-u.stabilitydeposit.collateralgain.md) and [LQTY reward](./lib-base-u.stabilitydeposit.lqtyreward.md) from Stability Deposit. |
|  [withdrawGainsFromStaking(overrides)](./lib-ethers-u.sendableethersliquity.withdrawgainsfromstaking.md) |  | Withdraw [collateral gain](./lib-base-u.lqtystake.collateralgain.md) and [LUSD gain](./lib-base-u.lqtystake.lusdgain.md) from LQTY stake. |
|  [withdrawLQTYRewardFromLiquidityMining(overrides)](./lib-ethers-u.sendableethersliquity.withdrawlqtyrewardfromliquiditymining.md) |  | Withdraw LQTY that has been earned by mining liquidity. |
|  [withdrawLUSDFromStabilityPool(amount, overrides)](./lib-ethers-u.sendableethersliquity.withdrawlusdfromstabilitypool.md) |  | Withdraw LUSD from Stability Deposit. |

