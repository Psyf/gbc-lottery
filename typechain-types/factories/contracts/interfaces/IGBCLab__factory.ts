/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGBCLab,
  IGBCLabInterface,
} from "../../../contracts/interfaces/IGBCLab";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IGBCLab__factory {
  static readonly abi = _abi;
  static createInterface(): IGBCLabInterface {
    return new utils.Interface(_abi) as IGBCLabInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IGBCLab {
    return new Contract(address, _abi, signerOrProvider) as IGBCLab;
  }
}
