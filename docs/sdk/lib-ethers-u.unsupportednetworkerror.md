<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [lib-ethers-u](./lib-ethers-u.md) &gt; [UnsupportedNetworkError](./lib-ethers-u.unsupportednetworkerror.md)

## UnsupportedNetworkError class

Thrown when trying to connect to a network where Liquity is not deployed.

<b>Signature:</b>

```typescript
export declare class UnsupportedNetworkError extends Error 
```
<b>Extends:</b> Error

## Remarks

Thrown by [ReadableEthersLiquity.connect()](./lib-ethers-u.readableethersliquity.connect_1.md) and [EthersLiquity.connect()](./lib-ethers-u.ethersliquity.connect_1.md)<!-- -->.

The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the `UnsupportedNetworkError` class.

## Properties

|  Property | Modifiers | Type | Description |
|  --- | --- | --- | --- |
|  [chainId](./lib-ethers-u.unsupportednetworkerror.chainid.md) |  | number | Chain ID of the unsupported network. |

