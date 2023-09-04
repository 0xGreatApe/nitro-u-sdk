<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [EthersLiquityConnectionOptionalParams](./lib-ethers-u.ethersliquityconnectionoptionalparams.md) &gt; [frontendTag](./lib-ethers-u.ethersliquityconnectionoptionalparams.frontendtag.md)

## EthersLiquityConnectionOptionalParams.frontendTag property

Address that will receive LQTY rewards from newly created Stability Deposits by default.

<b>Signature:</b>

```typescript
readonly frontendTag?: string;
```

## Remarks

For example [depositLUSDInStabilityPool(amount, frontendTag?)](./lib-ethers-u.ethersliquity.depositlusdinstabilitypool.md) will tag newly made Stability Deposits with this address when its `frontendTag` parameter is omitted.
