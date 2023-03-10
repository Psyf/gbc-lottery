/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockRandomizer,
  MockRandomizerInterface,
} from "../../../contracts/tests/MockRandomizer";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_for",
        type: "address",
      },
    ],
    name: "clientDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
    ],
    name: "clientWithdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "callbackGasLimit",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "confirmations",
        type: "uint256",
      },
    ],
    name: "request",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "callbackGasLimit",
        type: "uint256",
      },
    ],
    name: "request",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b506102f6806100206000396000f3fe60806040526004361061003f5760003560e01c80632465f8f5146100445780634ffd2e431461006d5780638bc802fb14610089578063d845a4b3146100c6575b600080fd5b34801561005057600080fd5b5061006b600480360381019061006691906101bc565b610103565b005b610087600480360381019061008291906101fc565b610107565b005b34801561009557600080fd5b506100b060048036038101906100ab9190610229565b61010a565b6040516100bd9190610278565b60405180910390f35b3480156100d257600080fd5b506100ed60048036038101906100e89190610293565b610117565b6040516100fa9190610278565b60405180910390f35b5050565b50565b60006101ad905092915050565b60006101ad9050919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061015382610128565b9050919050565b61016381610148565b811461016e57600080fd5b50565b6000813590506101808161015a565b92915050565b6000819050919050565b61019981610186565b81146101a457600080fd5b50565b6000813590506101b681610190565b92915050565b600080604083850312156101d3576101d2610123565b5b60006101e185828601610171565b92505060206101f2858286016101a7565b9150509250929050565b60006020828403121561021257610211610123565b5b600061022084828501610171565b91505092915050565b600080604083850312156102405761023f610123565b5b600061024e858286016101a7565b925050602061025f858286016101a7565b9150509250929050565b61027281610186565b82525050565b600060208201905061028d6000830184610269565b92915050565b6000602082840312156102a9576102a8610123565b5b60006102b7848285016101a7565b9150509291505056fea264697066735822122032ae2cd73e85060b843e75f3333d2bacc321525f1338c0d0f4e963f304c52d1964736f6c63430008110033";

type MockRandomizerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockRandomizerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockRandomizer__factory extends ContractFactory {
  constructor(...args: MockRandomizerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockRandomizer> {
    return super.deploy(overrides || {}) as Promise<MockRandomizer>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockRandomizer {
    return super.attach(address) as MockRandomizer;
  }
  override connect(signer: Signer): MockRandomizer__factory {
    return super.connect(signer) as MockRandomizer__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockRandomizerInterface {
    return new utils.Interface(_abi) as MockRandomizerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockRandomizer {
    return new Contract(address, _abi, signerOrProvider) as MockRandomizer;
  }
}
