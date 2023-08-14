
import { BigNumber, BigNumberish } from "@ethersproject/bignumber";
import { Log } from "@ethersproject/abstract-provider";
import { BytesLike } from "@ethersproject/bytes";
import {
  Overrides,
  CallOverrides,
  PayableOverrides,
  EventFilter
} from "@ethersproject/contracts";

import { _TypedLiquityContract, _TypedLogDescription } from "../src/contracts";

interface ActivePoolCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  defaultPool(_overrides?: CallOverrides): Promise<string>;
  getAssetBalance(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getUDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  redemptionManagerAddress(_overrides?: CallOverrides): Promise<string>;
  stabilityPoolManager(_overrides?: CallOverrides): Promise<string>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface ActivePoolTransactions {
  decreaseUDebt(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseUDebt(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  receivedERC20(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  sendAsset(_asset: string, _account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  setAddresses(_borrowerOperationsAddress: string, _troveManagerAddress: string, _stabilityManagerAddress: string, _defaultPoolAddress: string, _collSurplusPoolAddress: string, _redemptionAddress: string, _wstETHAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface ActivePool
  extends _TypedLiquityContract<ActivePoolCalls, ActivePoolTransactions> {
  readonly filters: {
    ActivePoolAddressChanged(_newActivePoolAddress?: null): EventFilter;
    ActivePoolAssetBalanceUpdated(_asset?: null, _balance?: null): EventFilter;
    ActivePoolUDebtUpdated(_asset?: null, _UDebt?: null): EventFilter;
    AssetAddressChanged(_assetAddress?: null): EventFilter;
    AssetBalanceUpdated(_newBalance?: null): EventFilter;
    AssetSent(_to?: null, _asset?: string | null, _amount?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    DefaultPoolAddressChanged(_newDefaultPoolAddress?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    StabilityPoolAddressChanged(_newStabilityPoolAddress?: null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
    UBalanceUpdated(_newBalance?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolAddressChanged"): _TypedLogDescription<{ _newActivePoolAddress: string }>[];
  extractEvents(logs: Log[], name: "ActivePoolAssetBalanceUpdated"): _TypedLogDescription<{ _asset: string; _balance: BigNumber }>[];
  extractEvents(logs: Log[], name: "ActivePoolUDebtUpdated"): _TypedLogDescription<{ _asset: string; _UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "AssetAddressChanged"): _TypedLogDescription<{ _assetAddress: string }>[];
  extractEvents(logs: Log[], name: "AssetBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "AssetSent"): _TypedLogDescription<{ _to: string; _asset: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "DefaultPoolAddressChanged"): _TypedLogDescription<{ _newDefaultPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _newStabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "UBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
}

interface BorrowerOperationsCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETH_REF_ADDRESS(_overrides?: CallOverrides): Promise<string>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  UToken(_overrides?: CallOverrides): Promise<string>;
  YOUStaking(_overrides?: CallOverrides): Promise<string>;
  YOUStakingAddress(_overrides?: CallOverrides): Promise<string>;
  getCompositeDebt(_asset: string, _debt: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  vestaParams(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface BorrowerOperationsTransactions {
  addColl(_asset: string, _assetSent: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: PayableOverrides): Promise<void>;
  adjustTrove(_asset: string, _assetSent: BigNumberish, _maxFeePercentage: BigNumberish, _collWithdrawal: BigNumberish, _UChange: BigNumberish, _isDebtIncrease: boolean, _upperHint: string, _lowerHint: string, _overrides?: PayableOverrides): Promise<void>;
  claimCollateral(_asset: string, _overrides?: Overrides): Promise<void>;
  closeTrove(_asset: string, _overrides?: Overrides): Promise<void>;
  moveETHGainToTrove(_asset: string, _amountMoved: BigNumberish, _borrower: string, _upperHint: string, _lowerHint: string, _overrides?: PayableOverrides): Promise<void>;
  openTrove(_asset: string, _tokenAmount: BigNumberish, _maxFeePercentage: BigNumberish, _YOUmount: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: PayableOverrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  repayU(_asset: string, _YOUmount: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  setAddresses(_troveManagerAddress: string, _stabilityPoolManagerAddress: string, _gasPoolAddress: string, _collSurplusPoolAddress: string, _sortedTrovesAddress: string, _uTokenAddress: string, _YOUStakingAddress: string, _vestaParamsAddress: string, _overrides?: Overrides): Promise<void>;
  setVestaParameters(_vaultParams: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
  withdrawColl(_asset: string, _collWithdrawal: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  withdrawU(_asset: string, _maxFeePercentage: BigNumberish, _YOUmount: BigNumberish, _upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
}

export interface BorrowerOperations
  extends _TypedLiquityContract<BorrowerOperationsCalls, BorrowerOperationsTransactions> {
  readonly filters: {
    CollSurplusPoolAddressChanged(_collSurplusPoolAddress?: null): EventFilter;
    GasPoolAddressChanged(_gasPoolAddress?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    SortedTrovesAddressChanged(_sortedTrovesAddress?: null): EventFilter;
    StabilityPoolAddressChanged(_stabilityPoolAddress?: null): EventFilter;
    TroveCreated(_asset?: string | null, _borrower?: string | null, arrayIndex?: null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
    TroveUpdated(_asset?: string | null, _borrower?: string | null, _debt?: null, _coll?: null, stake?: null, operation?: null): EventFilter;
    UBorrowingFeePaid(_asset?: string | null, _borrower?: string | null, _UFee?: null): EventFilter;
    UTokenAddressChanged(_uTokenAddress?: null): EventFilter;
    VaultParametersBaseChanged(newAddress?: string | null): EventFilter;
    YOUStakingAddressChanged(_YOUStakingAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "CollSurplusPoolAddressChanged"): _TypedLogDescription<{ _collSurplusPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "GasPoolAddressChanged"): _TypedLogDescription<{ _gasPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _stabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveCreated"): _TypedLogDescription<{ _asset: string; _borrower: string; arrayIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveUpdated"): _TypedLogDescription<{ _asset: string; _borrower: string; _debt: BigNumber; _coll: BigNumber; stake: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "UBorrowingFeePaid"): _TypedLogDescription<{ _asset: string; _borrower: string; _UFee: BigNumber }>[];
  extractEvents(logs: Log[], name: "UTokenAddressChanged"): _TypedLogDescription<{ _uTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "VaultParametersBaseChanged"): _TypedLogDescription<{ newAddress: string }>[];
  extractEvents(logs: Log[], name: "YOUStakingAddressChanged"): _TypedLogDescription<{ _YOUStakingAddress: string }>[];
}

interface CollSurplusPoolCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  activePoolAddress(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  getAssetBalance(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getCollateral(_asset: string, _account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  redemptionManagerAddress(_overrides?: CallOverrides): Promise<string>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface CollSurplusPoolTransactions {
  accountSurplus(_asset: string, _account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  claimColl(_asset: string, _account: string, _overrides?: Overrides): Promise<void>;
  receivedERC20(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_borrowerOperationsAddress: string, _troveManagerAddress: string, _redemptionManagerAddress: string, _activePoolAddress: string, _wstETHAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface CollSurplusPool
  extends _TypedLiquityContract<CollSurplusPoolCalls, CollSurplusPoolTransactions> {
  readonly filters: {
    ActivePoolAddressChanged(_newActivePoolAddress?: null): EventFilter;
    AssetSent(_to?: null, _amount?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CollBalanceUpdated(_account?: string | null, _newBalance?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolAddressChanged"): _TypedLogDescription<{ _newActivePoolAddress: string }>[];
  extractEvents(logs: Log[], name: "AssetSent"): _TypedLogDescription<{ _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CollBalanceUpdated"): _TypedLogDescription<{ _account: string; _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
}

interface CommunityIssuanceCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  DISTRIBUTION_DURATION(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  YOUSupplyCaps(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  adminContract(_overrides?: CallOverrides): Promise<string>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  lastUpdateTime(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  stabilityPoolManager(_overrides?: CallOverrides): Promise<string>;
  totalYOUIssued(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  youDistributionsByPool(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  youToken(_overrides?: CallOverrides): Promise<string>;
}

interface CommunityIssuanceTransactions {
  addFundToStabilityPool(_pool: string, _assignedSupply: BigNumberish, _overrides?: Overrides): Promise<void>;
  addFundToStabilityPoolFrom(_pool: string, _assignedSupply: BigNumberish, _spender: string, _overrides?: Overrides): Promise<void>;
  issueYOU(_overrides?: Overrides): Promise<BigNumber>;
  removeFundFromStabilityPool(_pool: string, _fundToRemove: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  sendYOU(_account: string, _YOUamount: BigNumberish, _overrides?: Overrides): Promise<void>;
  setAddresses(_youTokenAddress: string, _stabilityPoolManagerAddress: string, _adminContract: string, _overrides?: Overrides): Promise<void>;
  setAdminContract(_admin: string, _overrides?: Overrides): Promise<void>;
  setWeeklyYouDistribution(_stabilityPool: string, _weeklyReward: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferFundToAnotherStabilityPool(_target: string, _receiver: string, _quantity: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface CommunityIssuance
  extends _TypedLiquityContract<CommunityIssuanceCalls, CommunityIssuanceTransactions> {
  readonly filters: {
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    StabilityPoolAddressSet(_stabilityPoolAddress?: null): EventFilter;
    TotalYOUIssuedUpdated(stabilityPool?: string | null, _totalYOUIssued?: null): EventFilter;
    YOUTokenAddressSet(_YOUTokenAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressSet"): _TypedLogDescription<{ _stabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "TotalYOUIssuedUpdated"): _TypedLogDescription<{ stabilityPool: string; _totalYOUIssued: BigNumber }>[];
  extractEvents(logs: Log[], name: "YOUTokenAddressSet"): _TypedLogDescription<{ _YOUTokenAddress: string }>[];
}

interface DefaultPoolCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  activePoolAddress(_overrides?: CallOverrides): Promise<string>;
  getAssetBalance(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getUDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  redemptionManagerAddress(_overrides?: CallOverrides): Promise<string>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface DefaultPoolTransactions {
  decreaseUDebt(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseUDebt(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  receivedERC20(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  sendAssetToActivePool(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  setAddresses(_troveManagerAddress: string, _redemptionManagerAddress: string, _activePoolAddress: string, _wstETHAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface DefaultPool
  extends _TypedLiquityContract<DefaultPoolCalls, DefaultPoolTransactions> {
  readonly filters: {
    ActivePoolAddressChanged(_newActivePoolAddress?: null): EventFilter;
    AssetAddressChanged(_assetAddress?: null): EventFilter;
    AssetBalanceUpdated(_newBalance?: null): EventFilter;
    AssetSent(_to?: null, _asset?: string | null, _amount?: null): EventFilter;
    DefaultPoolAddressChanged(_newDefaultPoolAddress?: null): EventFilter;
    DefaultPoolAssetBalanceUpdated(_asset?: null, _balance?: null): EventFilter;
    DefaultPoolUDebtUpdated(_asset?: null, _UDebt?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    StabilityPoolAddressChanged(_newStabilityPoolAddress?: null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
    UBalanceUpdated(_newBalance?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolAddressChanged"): _TypedLogDescription<{ _newActivePoolAddress: string }>[];
  extractEvents(logs: Log[], name: "AssetAddressChanged"): _TypedLogDescription<{ _assetAddress: string }>[];
  extractEvents(logs: Log[], name: "AssetBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "AssetSent"): _TypedLogDescription<{ _to: string; _asset: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "DefaultPoolAddressChanged"): _TypedLogDescription<{ _newDefaultPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "DefaultPoolAssetBalanceUpdated"): _TypedLogDescription<{ _asset: string; _balance: BigNumber }>[];
  extractEvents(logs: Log[], name: "DefaultPoolUDebtUpdated"): _TypedLogDescription<{ _asset: string; _UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _newStabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "UBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
}

interface ERC20MockCalls {
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  name(_overrides?: CallOverrides): Promise<string>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface ERC20MockTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  approveInternal(owner: string, spender: string, value: BigNumberish, _overrides?: Overrides): Promise<void>;
  burn(account: string, amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  mint(account: string, amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transfer(to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(from: string, to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferInternal(from: string, to: string, value: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface ERC20Mock
  extends _TypedLiquityContract<ERC20MockCalls, ERC20MockTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface GasPoolCalls {
}

interface GasPoolTransactions {
}

export interface GasPool
  extends _TypedLiquityContract<GasPoolCalls, GasPoolTransactions> {
  readonly filters: {
  };
}

interface HintHelpersCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETH_REF_ADDRESS(_overrides?: CallOverrides): Promise<string>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  computeCR(_coll: BigNumberish, _debt: BigNumberish, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  computeNominalCR(_coll: BigNumberish, _debt: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getApproxHint(_asset: string, _CR: BigNumberish, _numTrials: BigNumberish, _inputRandomSeed: BigNumberish, _overrides?: CallOverrides): Promise<{ hintAddress: string; diff: BigNumber; latestRandomSeed: BigNumber }>;
  getEntireSystemColl(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionHints(_asset: string, _Uamount: BigNumberish, _price: BigNumberish, _maxIterations: BigNumberish, _overrides?: CallOverrides): Promise<{ firstRedemptionHint: string; partialRedemptionHintNICR: BigNumber; truncatedUamount: BigNumber }>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  vestaParams(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface HintHelpersTransactions {
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_sortedTrovesAddress: string, _troveManagerAddress: string, _vaultParametersAddress: string, _overrides?: Overrides): Promise<void>;
  setVestaParameters(_vaultParams: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface HintHelpers
  extends _TypedLiquityContract<HintHelpersCalls, HintHelpersTransactions> {
  readonly filters: {
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    SortedTrovesAddressChanged(_sortedTrovesAddress?: null): EventFilter;
    TroveManagerAddressChanged(_troveManagerAddress?: null): EventFilter;
    VaultParametersBaseChanged(newAddress?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _troveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "VaultParametersBaseChanged"): _TypedLogDescription<{ newAddress: string }>[];
}

interface IERC20Calls {
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
}

interface IERC20Transactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transfer(to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(from: string, to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface IERC20
  extends _TypedLiquityContract<IERC20Calls, IERC20Transactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface LockupContractFactoryCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_YEAR(_overrides?: CallOverrides): Promise<BigNumber>;
  isOwner(_overrides?: CallOverrides): Promise<boolean>;
  isRegisteredLockup(_contractAddress: string, _overrides?: CallOverrides): Promise<boolean>;
  lockupContractToDeployer(arg0: string, _overrides?: CallOverrides): Promise<string>;
  lqtyTokenAddress(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
}

interface LockupContractFactoryTransactions {
  deployLockupContract(_beneficiary: string, _unlockTime: BigNumberish, _overrides?: Overrides): Promise<void>;
  setLQTYTokenAddress(_lqtyTokenAddress: string, _overrides?: Overrides): Promise<void>;
}

export interface LockupContractFactory
  extends _TypedLiquityContract<LockupContractFactoryCalls, LockupContractFactoryTransactions> {
  readonly filters: {
    LQTYTokenAddressSet(_lqtyTokenAddress?: null): EventFilter;
    LockupContractDeployedThroughFactory(_lockupContractAddress?: null, _beneficiary?: null, _unlockTime?: null, _deployer?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LQTYTokenAddressSet"): _TypedLogDescription<{ _lqtyTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "LockupContractDeployedThroughFactory"): _TypedLogDescription<{ _lockupContractAddress: string; _beneficiary: string; _unlockTime: BigNumber; _deployer: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
}

interface UTokenCalls {
  DEFAULT_PAYLOAD_SIZE_LIMIT(_overrides?: CallOverrides): Promise<BigNumber>;
  DOMAIN_SEPARATOR(_overrides?: CallOverrides): Promise<string>;
  NO_EXTRA_GAS(_overrides?: CallOverrides): Promise<BigNumber>;
  PERMIT_TYPEHASH(_overrides?: CallOverrides): Promise<string>;
  PT_SEND(_overrides?: CallOverrides): Promise<number>;
  PT_SEND_AND_CALL(_overrides?: CallOverrides): Promise<number>;
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  chainId(_overrides?: CallOverrides): Promise<BigNumber>;
  circulatingSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  creditedPackets(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, _overrides?: CallOverrides): Promise<boolean>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  emergencyStopMintingCollateral(arg0: string, _overrides?: CallOverrides): Promise<boolean>;
  estimateSendAndCallFee(_dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _payload: BytesLike, _dstGasForCall: BigNumberish, _useZro: boolean, _adapterParams: BytesLike, _overrides?: CallOverrides): Promise<{ nativeFee: BigNumber; zroFee: BigNumber }>;
  estimateSendFee(_dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _useZro: boolean, _adapterParams: BytesLike, _overrides?: CallOverrides): Promise<{ nativeFee: BigNumber; zroFee: BigNumber }>;
  failedMessages(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getConfig(_version: BigNumberish, _chainId: BigNumberish, arg2: string, _configType: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getTrustedRemoteAddress(_remoteChainId: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  isTrustedRemote(_srcChainId: BigNumberish, _srcAddress: BytesLike, _overrides?: CallOverrides): Promise<boolean>;
  lzEndpoint(_overrides?: CallOverrides): Promise<string>;
  minDstGasLookup(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  name(_overrides?: CallOverrides): Promise<string>;
  nonces(owner: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  payloadSizeLimitLookup(arg0: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  precrime(_overrides?: CallOverrides): Promise<string>;
  redemptionManagerAddress(_overrides?: CallOverrides): Promise<string>;
  sharedDecimals(_overrides?: CallOverrides): Promise<number>;
  stabilityPoolManager(_overrides?: CallOverrides): Promise<string>;
  supportsInterface(interfaceId: BytesLike, _overrides?: CallOverrides): Promise<boolean>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  token(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  trustedRemoteLookup(arg0: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  useCustomAdapterParams(_overrides?: CallOverrides): Promise<boolean>;
}

interface UTokenTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  burn(_account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  callOnOFTReceived(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _from: BytesLike, _to: string, _amount: BigNumberish, _payload: BytesLike, _gasForCall: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  emergencyStopMinting(_asset: string, status: boolean, _overrides?: Overrides): Promise<void>;
  forceResumeReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _overrides?: Overrides): Promise<void>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  lzReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: Overrides): Promise<void>;
  mint(_asset: string, _account: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  nonblockingLzReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: Overrides): Promise<void>;
  permit(owner: string, spender: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  retryMessage(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: PayableOverrides): Promise<void>;
  returnFromPool(_poolAddress: string, _receiver: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  sendAndCall(_from: string, _dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _payload: BytesLike, _dstGasForCall: BigNumberish, _callParams: { refundAddress: string; zroPaymentAddress: string; adapterParams: BytesLike }, _overrides?: PayableOverrides): Promise<void>;
  sendFrom(_from: string, _dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _callParams: { refundAddress: string; zroPaymentAddress: string; adapterParams: BytesLike }, _overrides?: PayableOverrides): Promise<void>;
  sendToPool(_sender: string, _poolAddress: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  setConfig(_version: BigNumberish, _chainId: BigNumberish, _configType: BigNumberish, _config: BytesLike, _overrides?: Overrides): Promise<void>;
  setMinDstGas(_dstChainId: BigNumberish, _packetType: BigNumberish, _minGas: BigNumberish, _overrides?: Overrides): Promise<void>;
  setPayloadSizeLimit(_dstChainId: BigNumberish, _size: BigNumberish, _overrides?: Overrides): Promise<void>;
  setPrecrime(_precrime: string, _overrides?: Overrides): Promise<void>;
  setReceiveVersion(_version: BigNumberish, _overrides?: Overrides): Promise<void>;
  setSendVersion(_version: BigNumberish, _overrides?: Overrides): Promise<void>;
  setTrustedRemote(_remoteChainId: BigNumberish, _path: BytesLike, _overrides?: Overrides): Promise<void>;
  setTrustedRemoteAddress(_remoteChainId: BigNumberish, _remoteAddress: BytesLike, _overrides?: Overrides): Promise<void>;
  setUseCustomAdapterParams(_useCustomAdapterParams: boolean, _overrides?: Overrides): Promise<void>;
  transfer(recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(sender: string, recipient: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface UToken
  extends _TypedLiquityContract<UTokenCalls, UTokenTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CallOFTReceivedSuccess(_srcChainId?: BigNumberish | null, _srcAddress?: null, _nonce?: null, _hash?: null): EventFilter;
    EmergencyStopMintingCollateral(_asset?: null, state?: null): EventFilter;
    MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): EventFilter;
    NonContractAddress(_address?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    ReceiveFromChain(_srcChainId?: BigNumberish | null, _to?: string | null, _amount?: null): EventFilter;
    RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): EventFilter;
    SendToChain(_dstChainId?: BigNumberish | null, _from?: string | null, _toAddress?: BytesLike | null, _amount?: null): EventFilter;
    SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): EventFilter;
    SetPrecrime(precrime?: null): EventFilter;
    SetTrustedRemote(_remoteChainId?: null, _path?: null): EventFilter;
    SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): EventFilter;
    SetUseCustomAdapterParams(_useCustomAdapterParams?: null): EventFilter;
    StabilityPoolAddressChanged(_newStabilityPoolAddress?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
    TroveManagerAddressChanged(_troveManagerAddress?: null): EventFilter;
    UTokenBalanceUpdated(_user?: null, _amount?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CallOFTReceivedSuccess"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _hash: string }>[];
  extractEvents(logs: Log[], name: "EmergencyStopMintingCollateral"): _TypedLogDescription<{ _asset: string; state: boolean }>[];
  extractEvents(logs: Log[], name: "MessageFailed"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _payload: string; _reason: string }>[];
  extractEvents(logs: Log[], name: "NonContractAddress"): _TypedLogDescription<{ _address: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "ReceiveFromChain"): _TypedLogDescription<{ _srcChainId: number; _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "RetryMessageSuccess"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _payloadHash: string }>[];
  extractEvents(logs: Log[], name: "SendToChain"): _TypedLogDescription<{ _dstChainId: number; _from: string; _toAddress: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "SetMinDstGas"): _TypedLogDescription<{ _dstChainId: number; _type: number; _minDstGas: BigNumber }>[];
  extractEvents(logs: Log[], name: "SetPrecrime"): _TypedLogDescription<{ precrime: string }>[];
  extractEvents(logs: Log[], name: "SetTrustedRemote"): _TypedLogDescription<{ _remoteChainId: number; _path: string }>[];
  extractEvents(logs: Log[], name: "SetTrustedRemoteAddress"): _TypedLogDescription<{ _remoteChainId: number; _remoteAddress: string }>[];
  extractEvents(logs: Log[], name: "SetUseCustomAdapterParams"): _TypedLogDescription<{ _useCustomAdapterParams: boolean }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _newStabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _troveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "UTokenBalanceUpdated"): _TypedLogDescription<{ _user: string; _amount: BigNumber }>[];
}

interface YOUStakingCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  F_ASSETS(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  F_U(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  activePoolAddress(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  getPendingAssetGain(_asset: string, _user: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingUGain(_user: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  paused(_overrides?: CallOverrides): Promise<boolean>;
  sentToTreasuryTracker(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  snapshots(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  stakes(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalYOUStaked(_overrides?: CallOverrides): Promise<BigNumber>;
  treasury(_overrides?: CallOverrides): Promise<string>;
  troveManagerAddress(_overrides?: CallOverrides): Promise<string>;
  uToken(_overrides?: CallOverrides): Promise<string>;
  youToken(_overrides?: CallOverrides): Promise<string>;
}

interface YOUStakingTransactions {
  changeTreasuryAddress(_treasury: string, _overrides?: Overrides): Promise<void>;
  increaseF_Asset(_asset: string, _AssetFee: BigNumberish, _overrides?: Overrides): Promise<void>;
  increaseF_U(_UFee: BigNumberish, _overrides?: Overrides): Promise<void>;
  pause(_overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_youTokenAddress: string, _uTokenAddress: string, _troveManagerAddress: string, _borrowerOperationsAddress: string, _activePoolAddress: string, _treasury: string, _overrides?: Overrides): Promise<void>;
  stake(_YOUamount: BigNumberish, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
  unpause(_overrides?: Overrides): Promise<void>;
  unstake(_YOUamount: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface YOUStaking
  extends _TypedLiquityContract<YOUStakingCalls, YOUStakingTransactions> {
  readonly filters: {
    ActivePoolAddressSet(_activePoolAddress?: null): EventFilter;
    AssetSent(_asset?: string | null, _account?: string | null, _amount?: null): EventFilter;
    BorrowerOperationsAddressSet(_borrowerOperationsAddress?: null): EventFilter;
    F_AssetUpdated(_asset?: string | null, _F_ASSET?: null): EventFilter;
    F_UUpdated(_F_U?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    Paused(account?: null): EventFilter;
    SentToTreasury(_asset?: string | null, _amount?: null): EventFilter;
    StakeChanged(staker?: string | null, newStake?: null): EventFilter;
    StakerSnapshotsUpdated(_staker?: null, _F_Asset?: null, _F_U?: null): EventFilter;
    StakingGainsAssetWithdrawn(staker?: string | null, asset?: string | null, AssetGain?: null): EventFilter;
    StakingGainsUWithdrawn(staker?: string | null, UGain?: null): EventFilter;
    TotalYOUStakedUpdated(_totalYOUStaked?: null): EventFilter;
    TreasuryAddressChanged(_treausury?: null): EventFilter;
    TroveManagerAddressSet(_troveManager?: null): EventFilter;
    UTokenAddressSet(_uTokenAddress?: null): EventFilter;
    Unpaused(account?: null): EventFilter;
    YOUTokenAddressSet(_YOUTokenAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "ActivePoolAddressSet"): _TypedLogDescription<{ _activePoolAddress: string }>[];
  extractEvents(logs: Log[], name: "AssetSent"): _TypedLogDescription<{ _asset: string; _account: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressSet"): _TypedLogDescription<{ _borrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "F_AssetUpdated"): _TypedLogDescription<{ _asset: string; _F_ASSET: BigNumber }>[];
  extractEvents(logs: Log[], name: "F_UUpdated"): _TypedLogDescription<{ _F_U: BigNumber }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "Paused"): _TypedLogDescription<{ account: string }>[];
  extractEvents(logs: Log[], name: "SentToTreasury"): _TypedLogDescription<{ _asset: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakeChanged"): _TypedLogDescription<{ staker: string; newStake: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakerSnapshotsUpdated"): _TypedLogDescription<{ _staker: string; _F_Asset: BigNumber; _F_U: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakingGainsAssetWithdrawn"): _TypedLogDescription<{ staker: string; asset: string; AssetGain: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakingGainsUWithdrawn"): _TypedLogDescription<{ staker: string; UGain: BigNumber }>[];
  extractEvents(logs: Log[], name: "TotalYOUStakedUpdated"): _TypedLogDescription<{ _totalYOUStaked: BigNumber }>[];
  extractEvents(logs: Log[], name: "TreasuryAddressChanged"): _TypedLogDescription<{ _treausury: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressSet"): _TypedLogDescription<{ _troveManager: string }>[];
  extractEvents(logs: Log[], name: "UTokenAddressSet"): _TypedLogDescription<{ _uTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "Unpaused"): _TypedLogDescription<{ account: string }>[];
  extractEvents(logs: Log[], name: "YOUTokenAddressSet"): _TypedLogDescription<{ _YOUTokenAddress: string }>[];
}

interface YOUTokenCalls {
  DEFAULT_PAYLOAD_SIZE_LIMIT(_overrides?: CallOverrides): Promise<BigNumber>;
  DOMAIN_SEPARATOR(_overrides?: CallOverrides): Promise<string>;
  NO_EXTRA_GAS(_overrides?: CallOverrides): Promise<BigNumber>;
  PERMIT_TYPEHASH(_overrides?: CallOverrides): Promise<string>;
  PT_SEND(_overrides?: CallOverrides): Promise<number>;
  PT_SEND_AND_CALL(_overrides?: CallOverrides): Promise<number>;
  allowance(owner: string, spender: string, _overrides?: CallOverrides): Promise<BigNumber>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  chainId(_overrides?: CallOverrides): Promise<BigNumber>;
  circulatingSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  creditedPackets(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, _overrides?: CallOverrides): Promise<boolean>;
  decimals(_overrides?: CallOverrides): Promise<number>;
  estimateSendAndCallFee(_dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _payload: BytesLike, _dstGasForCall: BigNumberish, _useZro: boolean, _adapterParams: BytesLike, _overrides?: CallOverrides): Promise<{ nativeFee: BigNumber; zroFee: BigNumber }>;
  estimateSendFee(_dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _useZro: boolean, _adapterParams: BytesLike, _overrides?: CallOverrides): Promise<{ nativeFee: BigNumber; zroFee: BigNumber }>;
  failedMessages(arg0: BigNumberish, arg1: BytesLike, arg2: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getConfig(_version: BigNumberish, _chainId: BigNumberish, arg2: string, _configType: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getTrustedRemoteAddress(_remoteChainId: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  isTrustedRemote(_srcChainId: BigNumberish, _srcAddress: BytesLike, _overrides?: CallOverrides): Promise<boolean>;
  lzEndpoint(_overrides?: CallOverrides): Promise<string>;
  minDstGasLookup(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  name(_overrides?: CallOverrides): Promise<string>;
  nonces(owner: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  payloadSizeLimitLookup(arg0: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  precrime(_overrides?: CallOverrides): Promise<string>;
  sharedDecimals(_overrides?: CallOverrides): Promise<number>;
  supportsInterface(interfaceId: BytesLike, _overrides?: CallOverrides): Promise<boolean>;
  symbol(_overrides?: CallOverrides): Promise<string>;
  token(_overrides?: CallOverrides): Promise<string>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  treasury(_overrides?: CallOverrides): Promise<string>;
  trustedRemoteLookup(arg0: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  useCustomAdapterParams(_overrides?: CallOverrides): Promise<boolean>;
}

interface YOUTokenTransactions {
  approve(spender: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  callOnOFTReceived(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _from: BytesLike, _to: string, _amount: BigNumberish, _payload: BytesLike, _gasForCall: BigNumberish, _overrides?: Overrides): Promise<void>;
  decreaseAllowance(spender: string, subtractedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  forceResumeReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _overrides?: Overrides): Promise<void>;
  increaseAllowance(spender: string, addedValue: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  lzReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: Overrides): Promise<void>;
  nonblockingLzReceive(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: Overrides): Promise<void>;
  permit(owner: string, spender: string, amount: BigNumberish, deadline: BigNumberish, v: BigNumberish, r: BytesLike, s: BytesLike, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  retryMessage(_srcChainId: BigNumberish, _srcAddress: BytesLike, _nonce: BigNumberish, _payload: BytesLike, _overrides?: PayableOverrides): Promise<void>;
  sendAndCall(_from: string, _dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _payload: BytesLike, _dstGasForCall: BigNumberish, _callParams: { refundAddress: string; zroPaymentAddress: string; adapterParams: BytesLike }, _overrides?: PayableOverrides): Promise<void>;
  sendFrom(_from: string, _dstChainId: BigNumberish, _toAddress: BytesLike, _amount: BigNumberish, _callParams: { refundAddress: string; zroPaymentAddress: string; adapterParams: BytesLike }, _overrides?: PayableOverrides): Promise<void>;
  setConfig(_version: BigNumberish, _chainId: BigNumberish, _configType: BigNumberish, _config: BytesLike, _overrides?: Overrides): Promise<void>;
  setMinDstGas(_dstChainId: BigNumberish, _packetType: BigNumberish, _minGas: BigNumberish, _overrides?: Overrides): Promise<void>;
  setPayloadSizeLimit(_dstChainId: BigNumberish, _size: BigNumberish, _overrides?: Overrides): Promise<void>;
  setPrecrime(_precrime: string, _overrides?: Overrides): Promise<void>;
  setReceiveVersion(_version: BigNumberish, _overrides?: Overrides): Promise<void>;
  setSendVersion(_version: BigNumberish, _overrides?: Overrides): Promise<void>;
  setTrustedRemote(_remoteChainId: BigNumberish, _path: BytesLike, _overrides?: Overrides): Promise<void>;
  setTrustedRemoteAddress(_remoteChainId: BigNumberish, _remoteAddress: BytesLike, _overrides?: Overrides): Promise<void>;
  setUseCustomAdapterParams(_useCustomAdapterParams: boolean, _overrides?: Overrides): Promise<void>;
  transfer(to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferFrom(from: string, to: string, amount: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface YOUToken
  extends _TypedLiquityContract<YOUTokenCalls, YOUTokenTransactions> {
  readonly filters: {
    Approval(owner?: string | null, spender?: string | null, value?: null): EventFilter;
    CallOFTReceivedSuccess(_srcChainId?: BigNumberish | null, _srcAddress?: null, _nonce?: null, _hash?: null): EventFilter;
    MessageFailed(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payload?: null, _reason?: null): EventFilter;
    NonContractAddress(_address?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    ReceiveFromChain(_srcChainId?: BigNumberish | null, _to?: string | null, _amount?: null): EventFilter;
    RetryMessageSuccess(_srcChainId?: null, _srcAddress?: null, _nonce?: null, _payloadHash?: null): EventFilter;
    SendToChain(_dstChainId?: BigNumberish | null, _from?: string | null, _toAddress?: BytesLike | null, _amount?: null): EventFilter;
    SetMinDstGas(_dstChainId?: null, _type?: null, _minDstGas?: null): EventFilter;
    SetPrecrime(precrime?: null): EventFilter;
    SetTrustedRemote(_remoteChainId?: null, _path?: null): EventFilter;
    SetTrustedRemoteAddress(_remoteChainId?: null, _remoteAddress?: null): EventFilter;
    SetUseCustomAdapterParams(_useCustomAdapterParams?: null): EventFilter;
    Transfer(from?: string | null, to?: string | null, value?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Approval"): _TypedLogDescription<{ owner: string; spender: string; value: BigNumber }>[];
  extractEvents(logs: Log[], name: "CallOFTReceivedSuccess"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _hash: string }>[];
  extractEvents(logs: Log[], name: "MessageFailed"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _payload: string; _reason: string }>[];
  extractEvents(logs: Log[], name: "NonContractAddress"): _TypedLogDescription<{ _address: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "ReceiveFromChain"): _TypedLogDescription<{ _srcChainId: number; _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "RetryMessageSuccess"): _TypedLogDescription<{ _srcChainId: number; _srcAddress: string; _nonce: BigNumber; _payloadHash: string }>[];
  extractEvents(logs: Log[], name: "SendToChain"): _TypedLogDescription<{ _dstChainId: number; _from: string; _toAddress: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "SetMinDstGas"): _TypedLogDescription<{ _dstChainId: number; _type: number; _minDstGas: BigNumber }>[];
  extractEvents(logs: Log[], name: "SetPrecrime"): _TypedLogDescription<{ precrime: string }>[];
  extractEvents(logs: Log[], name: "SetTrustedRemote"): _TypedLogDescription<{ _remoteChainId: number; _path: string }>[];
  extractEvents(logs: Log[], name: "SetTrustedRemoteAddress"): _TypedLogDescription<{ _remoteChainId: number; _remoteAddress: string }>[];
  extractEvents(logs: Log[], name: "SetUseCustomAdapterParams"): _TypedLogDescription<{ _useCustomAdapterParams: boolean }>[];
  extractEvents(logs: Log[], name: "Transfer"): _TypedLogDescription<{ from: string; to: string; value: BigNumber }>[];
}

interface MultiTroveGetterCalls {
  getMultipleSortedTroves(_asset: string, _startIdx: BigNumberish, _count: BigNumberish, _overrides?: CallOverrides): Promise<{ owner: string; asset: string; debt: BigNumber; coll: BigNumber; stake: BigNumber; snapshotAsset: BigNumber; snapshotUDebt: BigNumber }[]>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface MultiTroveGetterTransactions {
}

export interface MultiTroveGetter
  extends _TypedLiquityContract<MultiTroveGetterCalls, MultiTroveGetterTransactions> {
  readonly filters: {
  };
}

interface PriceFeedCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  FLAG_ARBITRUM_SEQ_OFFLINE(_overrides?: CallOverrides): Promise<string>;
  MAX_PRICE_DEVIATION_FROM_PREVIOUS_ROUND(_overrides?: CallOverrides): Promise<BigNumber>;
  MAX_PRICE_DIFFERENCE_BETWEEN_ORACLES(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  TARGET_DIGITS(_overrides?: CallOverrides): Promise<BigNumber>;
  TELLOR_DIGITS(_overrides?: CallOverrides): Promise<BigNumber>;
  TIMEOUT(_overrides?: CallOverrides): Promise<BigNumber>;
  adminContract(_overrides?: CallOverrides): Promise<string>;
  chainlinkFlags(_overrides?: CallOverrides): Promise<string>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  lastGoodPrice(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  registeredOracles(arg0: string, _overrides?: CallOverrides): Promise<{ chainLinkOracle: string; isRegistered: boolean; tellorId: string }>;
  sequencerUptimeFeed(_overrides?: CallOverrides): Promise<string>;
  status(_overrides?: CallOverrides): Promise<number>;
  tellorCaller(_overrides?: CallOverrides): Promise<string>;
}

interface PriceFeedTransactions {
  addOracle(_token: string, _chainlinkOracle: string, _tellorId: BytesLike, _overrides?: Overrides): Promise<void>;
  fetchPrice(_token: string, _overrides?: Overrides): Promise<BigNumber>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_sequencerUptimeFeed: string, _adminContract: string, _tellorCaller: string, _overrides?: Overrides): Promise<void>;
  setAdminContract(_admin: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface PriceFeed
  extends _TypedLiquityContract<PriceFeedCalls, PriceFeedTransactions> {
  readonly filters: {
    Initialized(version?: null): EventFilter;
    LastGoodIndexUpdated(token?: string | null, _lastGoodIndex?: null): EventFilter;
    LastGoodPriceUpdated(token?: string | null, _lastGoodPrice?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    PriceFeedStatusChanged(newStatus?: null): EventFilter;
    RegisteredNewOracle(token?: null, chainLinkAggregator?: null, tellorId?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "LastGoodIndexUpdated"): _TypedLogDescription<{ token: string; _lastGoodIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "LastGoodPriceUpdated"): _TypedLogDescription<{ token: string; _lastGoodPrice: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "PriceFeedStatusChanged"): _TypedLogDescription<{ newStatus: number }>[];
  extractEvents(logs: Log[], name: "RegisteredNewOracle"): _TypedLogDescription<{ token: string; chainLinkAggregator: string; tellorId: string }>[];
}

interface PriceFeedTestnetCalls {
  getIndex(_overrides?: CallOverrides): Promise<BigNumber>;
  getPrice(_overrides?: CallOverrides): Promise<BigNumber>;
  oracles(arg0: string, _overrides?: CallOverrides): Promise<{ chainLinkOracle: string; tellorId: string; registed: boolean }>;
}

interface PriceFeedTestnetTransactions {
  addOracle(_token: string, _chainlinkOracle: string, _tellorId: BytesLike, _overrides?: Overrides): Promise<void>;
  fetchPrice(_asset: string, _overrides?: Overrides): Promise<BigNumber>;
  setIndex(index: BigNumberish, _overrides?: Overrides): Promise<boolean>;
  setPrice(price: BigNumberish, _overrides?: Overrides): Promise<boolean>;
}

export interface PriceFeedTestnet
  extends _TypedLiquityContract<PriceFeedTestnetCalls, PriceFeedTestnetTransactions> {
  readonly filters: {
    LastGoodIndexUpdated(token?: string | null, _lastGoodIndex?: null): EventFilter;
    LastGoodPriceUpdated(token?: string | null, _lastGoodPrice?: null): EventFilter;
    PriceFeedStatusChanged(newStatus?: null): EventFilter;
    RegisteredNewOracle(token?: null, chainLinkAggregator?: null, tellorId?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LastGoodIndexUpdated"): _TypedLogDescription<{ token: string; _lastGoodIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "LastGoodPriceUpdated"): _TypedLogDescription<{ token: string; _lastGoodPrice: BigNumber }>[];
  extractEvents(logs: Log[], name: "PriceFeedStatusChanged"): _TypedLogDescription<{ newStatus: number }>[];
  extractEvents(logs: Log[], name: "RegisteredNewOracle"): _TypedLogDescription<{ token: string; chainLinkAggregator: string; tellorId: string }>[];
}

interface SortedTrovesCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  contains(_asset: string, _id: string, _overrides?: CallOverrides): Promise<boolean>;
  data(arg0: string, _overrides?: CallOverrides): Promise<{ head: string; tail: string; maxSize: BigNumber; size: BigNumber }>;
  findInsertPosition(_asset: string, _NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: CallOverrides): Promise<[string, string]>;
  getFirst(_asset: string, _overrides?: CallOverrides): Promise<string>;
  getLast(_asset: string, _overrides?: CallOverrides): Promise<string>;
  getMaxSize(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getNext(_asset: string, _id: string, _overrides?: CallOverrides): Promise<string>;
  getPrev(_asset: string, _id: string, _overrides?: CallOverrides): Promise<string>;
  getSize(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isEmpty(_asset: string, _overrides?: CallOverrides): Promise<boolean>;
  isFull(_asset: string, _overrides?: CallOverrides): Promise<boolean>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  validInsertPosition(_asset: string, _NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: CallOverrides): Promise<boolean>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface SortedTrovesTransactions {
  insert(_asset: string, _id: string, _NICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: Overrides): Promise<void>;
  reInsert(_asset: string, _id: string, _newNICR: BigNumberish, _prevId: string, _nextId: string, _overrides?: Overrides): Promise<void>;
  remove(_asset: string, _id: string, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setParams(_troveManagerAddress: string, _borrowerOperationsAddress: string, _wstETHAddress: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface SortedTroves
  extends _TypedLiquityContract<SortedTrovesCalls, SortedTrovesTransactions> {
  readonly filters: {
    BorrowerOperationsAddressChanged(_borrowerOperationsAddress?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    NodeAdded(_asset?: string | null, _id?: null, _NICR?: null): EventFilter;
    NodeRemoved(_asset?: string | null, _id?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    SortedTrovesAddressChanged(_sortedDoublyLLAddress?: null): EventFilter;
    TroveManagerAddressChanged(_troveManagerAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _borrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "NodeAdded"): _TypedLogDescription<{ _asset: string; _id: string; _NICR: BigNumber }>[];
  extractEvents(logs: Log[], name: "NodeRemoved"): _TypedLogDescription<{ _asset: string; _id: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedDoublyLLAddress: string }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _troveManagerAddress: string }>[];
}

interface StabilityPoolCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETH_REF_ADDRESS(_overrides?: CallOverrides): Promise<string>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  P(_overrides?: CallOverrides): Promise<BigNumber>;
  SCALE_FACTOR(_overrides?: CallOverrides): Promise<BigNumber>;
  STABILITY_POOL_NAME_BYTES(_overrides?: CallOverrides): Promise<string>;
  YOUExchangeRate(_overrides?: CallOverrides): Promise<BigNumber>;
  borrowerOperations(_overrides?: CallOverrides): Promise<string>;
  communityIssuance(_overrides?: CallOverrides): Promise<string>;
  currentEpoch(_overrides?: CallOverrides): Promise<BigNumber>;
  currentScale(_overrides?: CallOverrides): Promise<BigNumber>;
  depositSnapshots(arg0: string, _overrides?: CallOverrides): Promise<{ S: BigNumber; P: BigNumber; G: BigNumber; scale: BigNumber; epoch: BigNumber }>;
  deposits(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  epochToScaleToG(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  epochToScaleToSum(arg0: BigNumberish, arg1: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getAssetBalance(_overrides?: CallOverrides): Promise<BigNumber>;
  getAssetType(_overrides?: CallOverrides): Promise<string>;
  getCompoundedTotalStake(_overrides?: CallOverrides): Promise<BigNumber>;
  getCompoundedUDeposit(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getDepositorAssetGain(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getDepositorAssetGain1e18(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getDepositorYOUGain(_depositor: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemColl(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getNameBytes(_overrides?: CallOverrides): Promise<string>;
  getTotalUDeposits(_overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  isPreYOU(_overrides?: CallOverrides): Promise<boolean>;
  lastAssetError_Offset(_overrides?: CallOverrides): Promise<BigNumber>;
  lastULossError_Offset(_overrides?: CallOverrides): Promise<BigNumber>;
  lastYOUError(_overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  systemSnapshots(_overrides?: CallOverrides): Promise<{ S: BigNumber; P: BigNumber; G: BigNumber; scale: BigNumber; epoch: BigNumber }>;
  totalStakes(_overrides?: CallOverrides): Promise<BigNumber>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  uToken(_overrides?: CallOverrides): Promise<string>;
  vestaParams(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface StabilityPoolTransactions {
  offset(_debtToOffset: BigNumberish, _collToAdd: BigNumberish, _overrides?: Overrides): Promise<void>;
  provideToSP(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  receivedERC20(_asset: string, _amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_assetAddress: string, _borrowerOperationsAddress: string, _troveManagerAddress: string, _uTokenAddress: string, _sortedTrovesAddress: string, _communityIssuanceAddress: string, _vestaParamsAddress: string, _YOUExchangeRate: BigNumberish, _overrides?: Overrides): Promise<void>;
  setVestaParameters(_vaultParams: string, _overrides?: Overrides): Promise<void>;
  togglePreYOU(_overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
  withdrawAssetGainToTrove(_upperHint: string, _lowerHint: string, _overrides?: Overrides): Promise<void>;
  withdrawFromSP(_amount: BigNumberish, _overrides?: Overrides): Promise<void>;
}

export interface StabilityPool
  extends _TypedLiquityContract<StabilityPoolCalls, StabilityPoolTransactions> {
  readonly filters: {
    AssetGainWithdrawn(_depositor?: string | null, _Asset?: null, _ULoss?: null): EventFilter;
    AssetSent(_to?: null, _amount?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CommunityIssuanceAddressChanged(_newCommunityIssuanceAddress?: null): EventFilter;
    DefaultPoolAddressChanged(_newDefaultPoolAddress?: null): EventFilter;
    DepositSnapshotUpdated(_depositor?: string | null, _P?: null, _S?: null, _G?: null): EventFilter;
    EpochUpdated(_currentEpoch?: null): EventFilter;
    G_Updated(_G?: null, _epoch?: null, _scale?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    IsPreYOUToggled(isPreYOU?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    P_Updated(_P?: null): EventFilter;
    S_Updated(_S?: null, _epoch?: null, _scale?: null): EventFilter;
    ScaleUpdated(_currentScale?: null): EventFilter;
    SortedTrovesAddressChanged(_newSortedTrovesAddress?: null): EventFilter;
    StabilityPoolAssetBalanceUpdated(_newBalance?: null): EventFilter;
    StabilityPoolUBalanceUpdated(_newBalance?: null): EventFilter;
    StakeChanged(_newSystemStake?: null, _depositor?: null): EventFilter;
    SystemSnapshotUpdated(_P?: null, _G?: null): EventFilter;
    TroveManagerAddressChanged(_newTroveManagerAddress?: null): EventFilter;
    UPaidToDepositorPreYOU(depositor?: null, U?: null): EventFilter;
    UTokenAddressChanged(_newUTokenAddress?: null): EventFilter;
    UserDepositChanged(_depositor?: string | null, _newDeposit?: null): EventFilter;
    VaultParametersBaseChanged(newAddress?: string | null): EventFilter;
    YOUPaidToDepositor(_depositor?: string | null, _YOU?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "AssetGainWithdrawn"): _TypedLogDescription<{ _depositor: string; _Asset: BigNumber; _ULoss: BigNumber }>[];
  extractEvents(logs: Log[], name: "AssetSent"): _TypedLogDescription<{ _to: string; _amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CommunityIssuanceAddressChanged"): _TypedLogDescription<{ _newCommunityIssuanceAddress: string }>[];
  extractEvents(logs: Log[], name: "DefaultPoolAddressChanged"): _TypedLogDescription<{ _newDefaultPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "DepositSnapshotUpdated"): _TypedLogDescription<{ _depositor: string; _P: BigNumber; _S: BigNumber; _G: BigNumber }>[];
  extractEvents(logs: Log[], name: "EpochUpdated"): _TypedLogDescription<{ _currentEpoch: BigNumber }>[];
  extractEvents(logs: Log[], name: "G_Updated"): _TypedLogDescription<{ _G: BigNumber; _epoch: BigNumber; _scale: BigNumber }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "IsPreYOUToggled"): _TypedLogDescription<{ isPreYOU: boolean }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "P_Updated"): _TypedLogDescription<{ _P: BigNumber }>[];
  extractEvents(logs: Log[], name: "S_Updated"): _TypedLogDescription<{ _S: BigNumber; _epoch: BigNumber; _scale: BigNumber }>[];
  extractEvents(logs: Log[], name: "ScaleUpdated"): _TypedLogDescription<{ _currentScale: BigNumber }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _newSortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAssetBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "StabilityPoolUBalanceUpdated"): _TypedLogDescription<{ _newBalance: BigNumber }>[];
  extractEvents(logs: Log[], name: "StakeChanged"): _TypedLogDescription<{ _newSystemStake: BigNumber; _depositor: string }>[];
  extractEvents(logs: Log[], name: "SystemSnapshotUpdated"): _TypedLogDescription<{ _P: BigNumber; _G: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveManagerAddressChanged"): _TypedLogDescription<{ _newTroveManagerAddress: string }>[];
  extractEvents(logs: Log[], name: "UPaidToDepositorPreYOU"): _TypedLogDescription<{ depositor: string; U: BigNumber }>[];
  extractEvents(logs: Log[], name: "UTokenAddressChanged"): _TypedLogDescription<{ _newUTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "UserDepositChanged"): _TypedLogDescription<{ _depositor: string; _newDeposit: BigNumber }>[];
  extractEvents(logs: Log[], name: "VaultParametersBaseChanged"): _TypedLogDescription<{ newAddress: string }>[];
  extractEvents(logs: Log[], name: "YOUPaidToDepositor"): _TypedLogDescription<{ _depositor: string; _YOU: BigNumber }>[];
}

interface TroveManagerCalls {
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETH_REF_ADDRESS(_overrides?: CallOverrides): Promise<string>;
  L_ASSETS(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  L_UDebts(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  MINUTE_DECAY_FACTOR(_overrides?: CallOverrides): Promise<BigNumber>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  SECONDS_IN_ONE_MINUTE(_overrides?: CallOverrides): Promise<BigNumber>;
  TroveOwners(arg0: string, arg1: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  Troves(arg0: string, arg1: string, _overrides?: CallOverrides): Promise<{ asset: string; debt: BigNumber; coll: BigNumber; stake: BigNumber; status: number; arrayIndex: BigNumber }>;
  baseRate(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  borrowerOperationsAddress(_overrides?: CallOverrides): Promise<string>;
  calcDecayedBaseRate(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  checkRecoveryMode(_asset: string, _price: BigNumberish, _overrides?: CallOverrides): Promise<boolean>;
  collSurplusPool(_overrides?: CallOverrides): Promise<string>;
  gasPoolAddress(_overrides?: CallOverrides): Promise<string>;
  getBorrowingFee(_asset: string, _UDebt: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingFeeWithDecay(_asset: string, _UDebt: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingRate(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getBorrowingRateWithDecay(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getCurrentICR(_asset: string, _borrower: string, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireDebtAndColl(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<{ debt: BigNumber; coll: BigNumber; pendingUDebtReward: BigNumber; pendingAssetReward: BigNumber }>;
  getEntireSystemColl(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getNominalICR(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingAssetReward(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getPendingUDebtReward(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTCR(_asset: string, _price: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getTrove(_borrower: string, _asset: string, _overrides?: CallOverrides): Promise<{ asset: string; debt: BigNumber; coll: BigNumber; stake: BigNumber; status: number; arrayIndex: BigNumber }>;
  getTroveColl(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveDebt(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveFromTroveOwnersArray(_asset: string, _index: BigNumberish, _overrides?: CallOverrides): Promise<string>;
  getTroveOwnersCount(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveStake(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getTroveStatus(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<BigNumber>;
  hasPendingRewards(_asset: string, _borrower: string, _overrides?: CallOverrides): Promise<boolean>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  lastETHError_Redistribution(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  lastFeeOperationTime(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  lastUDebtError_Redistribution(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  owner(_overrides?: CallOverrides): Promise<string>;
  redemptionManagerAddress(_overrides?: CallOverrides): Promise<string>;
  rewardSnapshots(arg0: string, arg1: string, _overrides?: CallOverrides): Promise<{ asset: BigNumber; UDebt: BigNumber }>;
  sortedTroves(_overrides?: CallOverrides): Promise<string>;
  stabilityPoolManager(_overrides?: CallOverrides): Promise<string>;
  totalCollateralSnapshot(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalStakes(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalStakesSnapshot(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  uToken(_overrides?: CallOverrides): Promise<string>;
  vestaParams(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
  youStaking(_overrides?: CallOverrides): Promise<string>;
}

interface TroveManagerTransactions {
  addTroveOwnerToArray(_asset: string, _borrower: string, _overrides?: Overrides): Promise<BigNumber>;
  applyPendingRewards(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  applyPendingRewardsForRedemption(_asset: string, _activePool: string, _defaultPool: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  batchLiquidateTroves(_asset: string, _troveArray: string[], _overrides?: Overrides): Promise<void>;
  closeTrove(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  closeTroveByRedemption(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  decayBaseRateFromBorrowing(_asset: string, _overrides?: Overrides): Promise<void>;
  decreaseTroveColl(_asset: string, _borrower: string, _collDecrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  decreaseTroveDebt(_asset: string, _borrower: string, _debtDecrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  increaseTroveColl(_asset: string, _borrower: string, _collIncrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  increaseTroveDebt(_asset: string, _borrower: string, _debtIncrease: BigNumberish, _overrides?: Overrides): Promise<BigNumber>;
  liquidate(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  liquidateTroves(_asset: string, _n: BigNumberish, _overrides?: Overrides): Promise<void>;
  removeStake(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_borrowerOperationsAddress: string, _stabilityPoolManagerAddress: string, _gasPoolAddress: string, _collSurplusPoolAddress: string, _uTokenAddress: string, _sortedTrovesAddress: string, _youStakingAddress: string, _vestaParamsAddress: string, _overrides?: Overrides): Promise<void>;
  setRedemptionManager(_redemptionManagerAddress: string, _overrides?: Overrides): Promise<void>;
  setTrove(_borrower: string, _asset: string, _trove: { asset: string; debt: BigNumberish; coll: BigNumberish; stake: BigNumberish; status: BigNumberish; arrayIndex: BigNumberish }, _overrides?: Overrides): Promise<void>;
  setTroveStatus(_asset: string, _borrower: string, _num: BigNumberish, _overrides?: Overrides): Promise<void>;
  setVestaParameters(_vaultParams: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
  updateBaseRateAndLastFeeOpTime(_asset: string, _rate: BigNumberish, _overrides?: Overrides): Promise<void>;
  updateStakeAndTotalStakes(_asset: string, _borrower: string, _overrides?: Overrides): Promise<BigNumber>;
  updateTroveRewardSnapshots(_asset: string, _borrower: string, _overrides?: Overrides): Promise<void>;
}

export interface TroveManager
  extends _TypedLiquityContract<TroveManagerCalls, TroveManagerTransactions> {
  readonly filters: {
    BaseRateUpdated(_asset?: string | null, _baseRate?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CollSurplusPoolAddressChanged(_collSurplusPoolAddress?: null): EventFilter;
    GasPoolAddressChanged(_gasPoolAddress?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    LTermsUpdated(_asset?: string | null, _L_ETH?: null, _L_UDebt?: null): EventFilter;
    LastFeeOpTimeUpdated(_asset?: string | null, _lastFeeOpTime?: null): EventFilter;
    Liquidation(_asset?: string | null, _liquidatedDebt?: null, _liquidatedColl?: null, _collGasCompensation?: null, _UGasCompensation?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    Redemption(_asset?: string | null, _attemptedYOUmount?: null, _actualYOUmount?: null, _AssetSent?: null, _AssetFee?: null): EventFilter;
    SortedTrovesAddressChanged(_sortedTrovesAddress?: null): EventFilter;
    StabilityPoolAddressChanged(_stabilityPoolAddress?: null): EventFilter;
    SystemSnapshotsUpdated(_asset?: string | null, _totalStakesSnapshot?: null, _totalCollateralSnapshot?: null): EventFilter;
    TotalStakesUpdated(_asset?: string | null, _newTotalStakes?: null): EventFilter;
    TroveIndexUpdated(_asset?: string | null, _borrower?: null, _newIndex?: null): EventFilter;
    TroveLiquidated(_asset?: string | null, _borrower?: string | null, _debt?: null, _coll?: null, operation?: null): EventFilter;
    TroveSnapshotsUpdated(_asset?: string | null, _L_ETH?: null, _L_UDebt?: null): EventFilter;
    TroveUpdated(_asset?: string | null, _borrower?: string | null, _debt?: null, _coll?: null, stake?: null, operation?: null): EventFilter;
    UTokenAddressChanged(_newUTokenAddress?: null): EventFilter;
    VaultParametersBaseChanged(newAddress?: string | null): EventFilter;
    YOUStakingAddressChanged(_YOUStakingAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BaseRateUpdated"): _TypedLogDescription<{ _asset: string; _baseRate: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CollSurplusPoolAddressChanged"): _TypedLogDescription<{ _collSurplusPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "GasPoolAddressChanged"): _TypedLogDescription<{ _gasPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "LTermsUpdated"): _TypedLogDescription<{ _asset: string; _L_ETH: BigNumber; _L_UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "LastFeeOpTimeUpdated"): _TypedLogDescription<{ _asset: string; _lastFeeOpTime: BigNumber }>[];
  extractEvents(logs: Log[], name: "Liquidation"): _TypedLogDescription<{ _asset: string; _liquidatedDebt: BigNumber; _liquidatedColl: BigNumber; _collGasCompensation: BigNumber; _UGasCompensation: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "Redemption"): _TypedLogDescription<{ _asset: string; _attemptedYOUmount: BigNumber; _actualYOUmount: BigNumber; _AssetSent: BigNumber; _AssetFee: BigNumber }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _stabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "SystemSnapshotsUpdated"): _TypedLogDescription<{ _asset: string; _totalStakesSnapshot: BigNumber; _totalCollateralSnapshot: BigNumber }>[];
  extractEvents(logs: Log[], name: "TotalStakesUpdated"): _TypedLogDescription<{ _asset: string; _newTotalStakes: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveIndexUpdated"): _TypedLogDescription<{ _asset: string; _borrower: string; _newIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveLiquidated"): _TypedLogDescription<{ _asset: string; _borrower: string; _debt: BigNumber; _coll: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "TroveSnapshotsUpdated"): _TypedLogDescription<{ _asset: string; _L_ETH: BigNumber; _L_UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveUpdated"): _TypedLogDescription<{ _asset: string; _borrower: string; _debt: BigNumber; _coll: BigNumber; stake: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "UTokenAddressChanged"): _TypedLogDescription<{ _newUTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "VaultParametersBaseChanged"): _TypedLogDescription<{ newAddress: string }>[];
  extractEvents(logs: Log[], name: "YOUStakingAddressChanged"): _TypedLogDescription<{ _YOUStakingAddress: string }>[];
}

interface UnipoolCalls {
  NAME(_overrides?: CallOverrides): Promise<string>;
  balanceOf(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  duration(_overrides?: CallOverrides): Promise<BigNumber>;
  earned(account: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isOwner(_overrides?: CallOverrides): Promise<boolean>;
  lastTimeRewardApplicable(_overrides?: CallOverrides): Promise<BigNumber>;
  lastUpdateTime(_overrides?: CallOverrides): Promise<BigNumber>;
  lqtyToken(_overrides?: CallOverrides): Promise<string>;
  owner(_overrides?: CallOverrides): Promise<string>;
  periodFinish(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardPerToken(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardPerTokenStored(_overrides?: CallOverrides): Promise<BigNumber>;
  rewardRate(_overrides?: CallOverrides): Promise<BigNumber>;
  rewards(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
  totalSupply(_overrides?: CallOverrides): Promise<BigNumber>;
  uniToken(_overrides?: CallOverrides): Promise<string>;
  userRewardPerTokenPaid(arg0: string, _overrides?: CallOverrides): Promise<BigNumber>;
}

interface UnipoolTransactions {
  claimReward(_overrides?: Overrides): Promise<void>;
  setParams(_lqtyTokenAddress: string, _uniTokenAddress: string, _duration: BigNumberish, _overrides?: Overrides): Promise<void>;
  stake(amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  withdraw(amount: BigNumberish, _overrides?: Overrides): Promise<void>;
  withdrawAndClaim(_overrides?: Overrides): Promise<void>;
}

export interface Unipool
  extends _TypedLiquityContract<UnipoolCalls, UnipoolTransactions> {
  readonly filters: {
    LQTYTokenAddressChanged(_lqtyTokenAddress?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    RewardAdded(reward?: null): EventFilter;
    RewardPaid(user?: string | null, reward?: null): EventFilter;
    Staked(user?: string | null, amount?: null): EventFilter;
    UniTokenAddressChanged(_uniTokenAddress?: null): EventFilter;
    Withdrawn(user?: string | null, amount?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "LQTYTokenAddressChanged"): _TypedLogDescription<{ _lqtyTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "RewardAdded"): _TypedLogDescription<{ reward: BigNumber }>[];
  extractEvents(logs: Log[], name: "RewardPaid"): _TypedLogDescription<{ user: string; reward: BigNumber }>[];
  extractEvents(logs: Log[], name: "Staked"): _TypedLogDescription<{ user: string; amount: BigNumber }>[];
  extractEvents(logs: Log[], name: "UniTokenAddressChanged"): _TypedLogDescription<{ _uniTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "Withdrawn"): _TypedLogDescription<{ user: string; amount: BigNumber }>[];
}

interface RedemptionManagerCalls {
  BETA(_overrides?: CallOverrides): Promise<BigNumber>;
  DECIMAL_PRECISION(_overrides?: CallOverrides): Promise<BigNumber>;
  ETH_REF_ADDRESS(_overrides?: CallOverrides): Promise<string>;
  NAME(_overrides?: CallOverrides): Promise<string>;
  getEntireSystemColl(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getEntireSystemDebt(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionFeeWithDecay(_asset: string, _assetDraw: BigNumberish, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionRate(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  getRedemptionRateWithDecay(_asset: string, _overrides?: CallOverrides): Promise<BigNumber>;
  isInitialized(_overrides?: CallOverrides): Promise<boolean>;
  isRedemptionWhitelisted(_overrides?: CallOverrides): Promise<boolean>;
  owner(_overrides?: CallOverrides): Promise<string>;
  redemptionWhitelist(arg0: string, _overrides?: CallOverrides): Promise<boolean>;
  troveManager(_overrides?: CallOverrides): Promise<string>;
  vestaParams(_overrides?: CallOverrides): Promise<string>;
  wstETH(_overrides?: CallOverrides): Promise<string>;
}

interface RedemptionManagerTransactions {
  addUserToWhitelistRedemption(_user: string, _overrides?: Overrides): Promise<void>;
  redeemCollateral(_asset: string, _Uamount: BigNumberish, _firstRedemptionHint: string, _upperPartialRedemptionHint: string, _lowerPartialRedemptionHint: string, _partialRedemptionHintNICR: BigNumberish, _maxIterations: BigNumberish, _maxFeePercentage: BigNumberish, _overrides?: Overrides): Promise<void>;
  removeUserFromWhitelistRedemption(_user: string, _overrides?: Overrides): Promise<void>;
  renounceOwnership(_overrides?: Overrides): Promise<void>;
  setAddresses(_troveManager: string, _overrides?: Overrides): Promise<void>;
  setRedemptionWhitelistStatus(_status: boolean, _overrides?: Overrides): Promise<void>;
  setVestaParameters(_vaultParams: string, _overrides?: Overrides): Promise<void>;
  transferOwnership(newOwner: string, _overrides?: Overrides): Promise<void>;
}

export interface RedemptionManager
  extends _TypedLiquityContract<RedemptionManagerCalls, RedemptionManagerTransactions> {
  readonly filters: {
    BaseRateUpdated(_asset?: string | null, _baseRate?: null): EventFilter;
    BorrowerOperationsAddressChanged(_newBorrowerOperationsAddress?: null): EventFilter;
    CollSurplusPoolAddressChanged(_collSurplusPoolAddress?: null): EventFilter;
    GasPoolAddressChanged(_gasPoolAddress?: null): EventFilter;
    Initialized(version?: null): EventFilter;
    LTermsUpdated(_asset?: string | null, _L_ETH?: null, _L_UDebt?: null): EventFilter;
    LastFeeOpTimeUpdated(_asset?: string | null, _lastFeeOpTime?: null): EventFilter;
    Liquidation(_asset?: string | null, _liquidatedDebt?: null, _liquidatedColl?: null, _collGasCompensation?: null, _UGasCompensation?: null): EventFilter;
    OwnershipTransferred(previousOwner?: string | null, newOwner?: string | null): EventFilter;
    Redemption(_asset?: string | null, _attemptedYOUmount?: null, _actualYOUmount?: null, _AssetSent?: null, _AssetFee?: null): EventFilter;
    SortedTrovesAddressChanged(_sortedTrovesAddress?: null): EventFilter;
    StabilityPoolAddressChanged(_stabilityPoolAddress?: null): EventFilter;
    SystemSnapshotsUpdated(_asset?: string | null, _totalStakesSnapshot?: null, _totalCollateralSnapshot?: null): EventFilter;
    TotalStakesUpdated(_asset?: string | null, _newTotalStakes?: null): EventFilter;
    TroveIndexUpdated(_asset?: string | null, _borrower?: null, _newIndex?: null): EventFilter;
    TroveLiquidated(_asset?: string | null, _borrower?: string | null, _debt?: null, _coll?: null, operation?: null): EventFilter;
    TroveSnapshotsUpdated(_asset?: string | null, _L_ETH?: null, _L_UDebt?: null): EventFilter;
    TroveUpdated(_asset?: string | null, _borrower?: string | null, _debt?: null, _coll?: null, stake?: null, operation?: null): EventFilter;
    UTokenAddressChanged(_newUTokenAddress?: null): EventFilter;
    VaultParametersBaseChanged(newAddress?: string | null): EventFilter;
    YOUStakingAddressChanged(_YOUStakingAddress?: null): EventFilter;
  };
  extractEvents(logs: Log[], name: "BaseRateUpdated"): _TypedLogDescription<{ _asset: string; _baseRate: BigNumber }>[];
  extractEvents(logs: Log[], name: "BorrowerOperationsAddressChanged"): _TypedLogDescription<{ _newBorrowerOperationsAddress: string }>[];
  extractEvents(logs: Log[], name: "CollSurplusPoolAddressChanged"): _TypedLogDescription<{ _collSurplusPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "GasPoolAddressChanged"): _TypedLogDescription<{ _gasPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "Initialized"): _TypedLogDescription<{ version: number }>[];
  extractEvents(logs: Log[], name: "LTermsUpdated"): _TypedLogDescription<{ _asset: string; _L_ETH: BigNumber; _L_UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "LastFeeOpTimeUpdated"): _TypedLogDescription<{ _asset: string; _lastFeeOpTime: BigNumber }>[];
  extractEvents(logs: Log[], name: "Liquidation"): _TypedLogDescription<{ _asset: string; _liquidatedDebt: BigNumber; _liquidatedColl: BigNumber; _collGasCompensation: BigNumber; _UGasCompensation: BigNumber }>[];
  extractEvents(logs: Log[], name: "OwnershipTransferred"): _TypedLogDescription<{ previousOwner: string; newOwner: string }>[];
  extractEvents(logs: Log[], name: "Redemption"): _TypedLogDescription<{ _asset: string; _attemptedYOUmount: BigNumber; _actualYOUmount: BigNumber; _AssetSent: BigNumber; _AssetFee: BigNumber }>[];
  extractEvents(logs: Log[], name: "SortedTrovesAddressChanged"): _TypedLogDescription<{ _sortedTrovesAddress: string }>[];
  extractEvents(logs: Log[], name: "StabilityPoolAddressChanged"): _TypedLogDescription<{ _stabilityPoolAddress: string }>[];
  extractEvents(logs: Log[], name: "SystemSnapshotsUpdated"): _TypedLogDescription<{ _asset: string; _totalStakesSnapshot: BigNumber; _totalCollateralSnapshot: BigNumber }>[];
  extractEvents(logs: Log[], name: "TotalStakesUpdated"): _TypedLogDescription<{ _asset: string; _newTotalStakes: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveIndexUpdated"): _TypedLogDescription<{ _asset: string; _borrower: string; _newIndex: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveLiquidated"): _TypedLogDescription<{ _asset: string; _borrower: string; _debt: BigNumber; _coll: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "TroveSnapshotsUpdated"): _TypedLogDescription<{ _asset: string; _L_ETH: BigNumber; _L_UDebt: BigNumber }>[];
  extractEvents(logs: Log[], name: "TroveUpdated"): _TypedLogDescription<{ _asset: string; _borrower: string; _debt: BigNumber; _coll: BigNumber; stake: BigNumber; operation: number }>[];
  extractEvents(logs: Log[], name: "UTokenAddressChanged"): _TypedLogDescription<{ _newUTokenAddress: string }>[];
  extractEvents(logs: Log[], name: "VaultParametersBaseChanged"): _TypedLogDescription<{ newAddress: string }>[];
  extractEvents(logs: Log[], name: "YOUStakingAddressChanged"): _TypedLogDescription<{ _YOUStakingAddress: string }>[];
}
