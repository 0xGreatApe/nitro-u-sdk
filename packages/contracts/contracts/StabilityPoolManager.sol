// SPDX-License-Identifier: MIT

pragma solidity ^0.8.10;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "./Dependencies/CheckContract.sol";
import "./Dependencies/ArbitroveBase.sol";
import "./Interfaces/IStabilityPoolManager.sol";

contract StabilityPoolManager is
	OwnableUpgradeable,
	CheckContract,
	ArbitroveBase,
	IStabilityPoolManager
{
	mapping(address => address) stabilityPools;
	mapping(address => bool) validStabilityPools;

	string public constant NAME = "StabilityPoolManager";

	bool public isInitialized;
	address public adminContract;

	modifier isController() {
		require(msg.sender == owner() || msg.sender == adminContract, "Invalid permissions");
		_;
	}

	function setAddresses(address _adminContract, address _wstETHAddress) external initializer {
		require(!isInitialized, "Already initialized");
		checkContract(_adminContract);
		checkContract(_wstETHAddress);
		isInitialized = true;

		__Ownable_init();

		wstETH = _wstETHAddress;
		adminContract = _adminContract;
	}

	function setAdminContract(address _admin) external onlyOwner {
		require(_admin != address(0), "Admin cannot be empty address");
		adminContract = _admin;
	}

	function isStabilityPool(address stabilityPool) external view override returns (bool) {
		return validStabilityPools[stabilityPool];
	}

	function addStabilityPool(
		address asset,
		address stabilityPool
	) external override isController {
		CheckContract(asset);
		CheckContract(stabilityPool);
		require(!validStabilityPools[stabilityPool], "StabilityPool already created.");
		require(
			IStabilityPool(stabilityPool).getAssetType() == asset,
			"Stability Pool doesn't have the same asset type. Is it initialized?"
		);

		stabilityPools[asset] = stabilityPool;
		validStabilityPools[stabilityPool] = true;
	}

	function removeStabilityPool(address asset) external isController {
		delete validStabilityPools[stabilityPools[asset]];
		delete stabilityPools[asset];
	}

	function getAssetStabilityPool(
		address asset
	) external view override onlyWstETH(asset) returns (IStabilityPool) {
		require(stabilityPools[asset] != address(0), "Invalid asset StabilityPool");
		return IStabilityPool(stabilityPools[asset]);
	}

	function unsafeGetAssetStabilityPool(
		address _asset
	) external view override onlyWstETH(_asset) returns (address) {
		return stabilityPools[_asset];
	}
}
