import { Decimal } from "@liquity/lib-base";
import {
  BLUSDLPZap,
  BLUSDLPZap__factory,
  BLUSDToken,
  BondNFT,
  ChickenBondManager,
  ERC20Faucet,
  ERC20Faucet__factory
} from "@liquity/chicken-bonds/lusd/types";
import {
  CurveCryptoSwap2ETH,
  CurveLiquidityGaugeV5__factory
} from "@liquity/chicken-bonds/lusd/types/external";
import { CurveCryptoSwap2ETH__factory } from "@liquity/chicken-bonds/lusd/types/external";
import {
  BLUSDToken__factory,
  BondNFT__factory,
  ChickenBondManager__factory
} from "@liquity/chicken-bonds/lusd/types";
import type { UToken } from "@liquity/lib-ethers/dist/types";
import UTokenAbi from "@liquity/lib-ethers/abi/UToken.json";
import { useContract } from "../../../hooks/useContract";
import { useLiquity } from "../../../hooks/LiquityContext";
import { useCallback } from "react";
import type { BondsApi } from "./api";
import type { BLusdLpRewards, Bond, ProtocolInfo, Stats } from "./transitions";
import { BLusdAmmTokenIndex } from "./transitions";
import type { Addresses } from "./transitions";
import { useChainId } from "wagmi";
import { useBondAddresses } from "./BondAddressesContext";
import type { CurveLiquidityGaugeV5 } from "@liquity/chicken-bonds/lusd/types/external/CurveLiquidityGaugeV5";

type BondsInformation = {
  protocolInfo: ProtocolInfo;
  bonds: Bond[];
  stats: Stats;
  bLusdBalance: Decimal;
  uBalance: Decimal;
  lpTokenBalance: Decimal;
  stakedLpTokenBalance: Decimal;
  lpTokenSupply: Decimal;
  bLusdAmmBLusdBalance: Decimal;
  bLusdAmmLusdBalance: Decimal;
  lpRewards: BLusdLpRewards;
};

type BondContracts = {
  addresses: Addresses;
  uToken: UToken | undefined;
  bLusdToken: BLUSDToken | undefined;
  bondNft: BondNFT | undefined;
  chickenBondManager: ChickenBondManager | undefined;
  bLusdAmm: CurveCryptoSwap2ETH | undefined;
  bLusdAmmZapper: BLUSDLPZap | undefined;
  bLusdGauge: CurveLiquidityGaugeV5 | undefined;
  hasFoundContracts: boolean;
  getLatestData: (account: string, api: BondsApi) => Promise<BondsInformation | undefined>;
};

export const useBondContracts = (): BondContracts => {
  const { liquity } = useLiquity();
  const chainId = useChainId();
  const isMainnet = chainId === 1;

  const addresses = useBondAddresses();

  const {
    BLUSD_AMM_ADDRESS,
    BLUSD_TOKEN_ADDRESS,
    BOND_NFT_ADDRESS,
    CHICKEN_BOND_MANAGER_ADDRESS,
    LUSD_OVERRIDE_ADDRESS,
    BLUSD_LP_ZAP_ADDRESS,
    BLUSD_AMM_STAKING_ADDRESS
  } = addresses;

  const [uTokenDefault, uTokenDefaultStatus] = useContract<UToken>(
    liquity.connection.addresses.uToken,
    UTokenAbi
  );

  const [uTokenOverride, uTokenOverrideStatus] = useContract<ERC20Faucet>(
    LUSD_OVERRIDE_ADDRESS,
    ERC20Faucet__factory.abi
  );

  const [uToken, uTokenStatus] =
    LUSD_OVERRIDE_ADDRESS === null
      ? [uTokenDefault, uTokenDefaultStatus]
      : [(uTokenOverride as unknown) as UToken, uTokenOverrideStatus];

  const [bLusdToken, bLusdTokenStatus] = useContract<BLUSDToken>(
    BLUSD_TOKEN_ADDRESS,
    BLUSDToken__factory.abi
  );

  const [bondNft, bondNftStatus] = useContract<BondNFT>(BOND_NFT_ADDRESS, BondNFT__factory.abi);
  const [chickenBondManager, chickenBondManagerStatus] = useContract<ChickenBondManager>(
    CHICKEN_BOND_MANAGER_ADDRESS,
    ChickenBondManager__factory.abi
  );

  const [bLusdAmm, bLusdAmmStatus] = useContract<CurveCryptoSwap2ETH>(
    BLUSD_AMM_ADDRESS,
    CurveCryptoSwap2ETH__factory.abi
  );

  const [bLusdAmmZapper, bLusdAmmZapperStatus] = useContract<BLUSDLPZap>(
    BLUSD_LP_ZAP_ADDRESS,
    BLUSDLPZap__factory.abi
  );

  const [bLusdGauge, bLusdGaugeStatus] = useContract<CurveLiquidityGaugeV5>(
    BLUSD_AMM_STAKING_ADDRESS,
    CurveLiquidityGaugeV5__factory.abi
  );

  const hasFoundContracts =
    [
      uTokenStatus,
      bondNftStatus,
      chickenBondManagerStatus,
      bLusdTokenStatus,
      bLusdAmmStatus,
      ...(isMainnet ? [bLusdAmmZapperStatus] : []),
      bLusdGaugeStatus
    ].find(status => status === "FAILED") === undefined;

  const getLatestData = useCallback(
    async (account: string, api: BondsApi): Promise<BondsInformation | undefined> => {
      if (
        uToken === undefined ||
        bondNft === undefined ||
        chickenBondManager === undefined ||
        bLusdToken === undefined ||
        bLusdAmm === undefined ||
        bLusdGauge === undefined
      ) {
        return undefined;
      }

      const protocolInfoPromise = api.getProtocolInfo(
        bLusdToken,
        bLusdAmm,
        chickenBondManager,
        isMainnet
      );

      const bondsPromise = api.getAccountBonds(
        account,
        bondNft,
        chickenBondManager,
        await protocolInfoPromise
      );

      const [protocolInfo, stats, lpToken] = await Promise.all([
        protocolInfoPromise,
        api.getStats(chickenBondManager),
        api.getLpToken(bLusdAmm)
      ]);

      const [
        bLusdBalance,
        uBalance,
        lpTokenBalance,
        stakedLpTokenBalance,
        lpTokenSupply,
        bLusdAmmCoinBalances,
        lpRewards
      ] = await Promise.all([
        api.getTokenBalance(account, bLusdToken),
        api.getTokenBalance(account, uToken),
        api.getTokenBalance(account, lpToken),
        isMainnet ? api.getTokenBalance(account, bLusdGauge) : Decimal.ZERO,
        api.getTokenTotalSupply(lpToken),
        api.getCoinBalances(bLusdAmm),
        isMainnet ? api.getLpRewards(account, bLusdGauge) : []
      ]);

      const bonds = await bondsPromise;

      return {
        protocolInfo,
        bonds,
        stats,
        bLusdBalance,
        uBalance,
        lpTokenBalance,
        stakedLpTokenBalance,
        lpTokenSupply,
        bLusdAmmBLusdBalance: bLusdAmmCoinBalances[BLusdAmmTokenIndex.BLUSD],
        bLusdAmmLusdBalance: bLusdAmmCoinBalances[BLusdAmmTokenIndex.LUSD],
        lpRewards
      };
    },
    [chickenBondManager, bondNft, bLusdToken, uToken, bLusdAmm, isMainnet, bLusdGauge]
  );

  return {
    addresses,
    uToken,
    bLusdToken,
    bondNft,
    chickenBondManager,
    bLusdAmm,
    bLusdAmmZapper,
    bLusdGauge,
    getLatestData,
    hasFoundContracts
  };
};
