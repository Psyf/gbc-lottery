/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  LotteryHouseKeeping,
  LotteryHouseKeepingInterface,
} from "../../contracts/LotteryHouseKeeping";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract RolesAuthority",
        name: "police",
        type: "address",
      },
      {
        internalType: "address",
        name: "_randomizer",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "AuthorityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "authority",
    outputs: [
      {
        internalType: "contract Authority",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newReceiver",
        type: "address",
      },
    ],
    name: "changeFundReceiver",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newAddr",
        type: "address",
      },
    ],
    name: "changeRandomizerAddr",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundRandomizer",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "fundReceiver",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newLimit",
        type: "uint256",
      },
    ],
    name: "modifyRandomizerCallbackGas",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomizer",
    outputs: [
      {
        internalType: "contract IRandomizer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomizerCallbackGas",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Authority",
        name: "newAuthority",
        type: "address",
      },
    ],
    name: "setAuthority",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawRandomizer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526001600255621e84806004553480156200001d57600080fd5b506040516200144838038062001448833981810160405281019062000043919062000397565b8173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200008f573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000b59190620003de565b82816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a38073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a3505080600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff16638da5cb5b6040518163ffffffff1660e01b8152600401602060405180830381865afa1580156200027a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002a09190620003de565b600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550505062000410565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200031a82620002ed565b9050919050565b60006200032e826200030d565b9050919050565b620003408162000321565b81146200034c57600080fd5b50565b600081519050620003608162000335565b92915050565b62000371816200030d565b81146200037d57600080fd5b50565b600081519050620003918162000366565b92915050565b60008060408385031215620003b157620003b0620002e8565b5b6000620003c1858286016200034f565b9250506020620003d48582860162000380565b9150509250929050565b600060208284031215620003f757620003f6620002e8565b5b6000620004078482850162000380565b91505092915050565b61102880620004206000396000f3fe6080604052600436106100a75760003560e01c80638da5cb5b116100645780638da5cb5b14610185578063bf7e214f146101b0578063c03634ff146101db578063f10fb58414610204578063f2fde38b1461022f578063fb4aa0a114610258576100a7565b806308e31fe2146100ac5780631ca9741b146100d557806326feb174146100fe578063374dd7e41461010857806364006b69146101335780637a9e5e4b1461015c575b600080fd5b3480156100b857600080fd5b506100d360048036038101906100ce9190610bdc565b610283565b005b3480156100e157600080fd5b506100fc60048036038101906100f79190610c67565b6102fa565b005b6101066103ab565b005b34801561011457600080fd5b5061011d61048f565b60405161012a9190610ca3565b60405180910390f35b34801561013f57600080fd5b5061015a60048036038101906101559190610c67565b610495565b005b34801561016857600080fd5b50610183600480360381019061017e9190610cfc565b610546565b005b34801561019157600080fd5b5061019a610707565b6040516101a79190610d38565b60405180910390f35b3480156101bc57600080fd5b506101c561072b565b6040516101d29190610db2565b60405180910390f35b3480156101e757600080fd5b5061020260048036038101906101fd9190610bdc565b610751565b005b34801561021057600080fd5b5061021961090d565b6040516102269190610dee565b60405180910390f35b34801561023b57600080fd5b5061025660048036038101906102519190610c67565b610933565b005b34801561026457600080fd5b5061026d610a3d565b60405161027a9190610d38565b60405180910390f35b6102b1336000357fffffffff0000000000000000000000000000000000000000000000000000000016610a63565b6102f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102e790610e66565b60405180910390fd5b8060048190555050565b610328336000357fffffffff0000000000000000000000000000000000000000000000000000000016610a63565b610367576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161035e90610e66565b60405180910390fd5b80600360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6001600254146103f0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103e790610ed2565b60405180910390fd5b60028081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ffd2e4334306040518363ffffffff1660e01b81526004016104539190610d38565b6000604051808303818588803b15801561046c57600080fd5b505af1158015610480573d6000803e3d6000fd5b50505050506001600281905550565b60045481565b6104c3336000357fffffffff0000000000000000000000000000000000000000000000000000000016610a63565b610502576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104f990610e66565b60405180910390fd5b80600560006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806106605750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b700961333306000357fffffffff00000000000000000000000000000000000000000000000000000000166040518463ffffffff1660e01b815260040161061e93929190610f2d565b602060405180830381865afa15801561063b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061065f9190610f9c565b5b61066957600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a350565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61077f336000357fffffffff0000000000000000000000000000000000000000000000000000000016610a63565b6107be576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107b590610e66565b60405180910390fd5b600160025414610803576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107fa90610ed2565b60405180910390fd5b60028081905550600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632465f8f530836040518363ffffffff1660e01b8152600401610867929190610fc9565b600060405180830381600087803b15801561088157600080fd5b505af1158015610895573d6000803e3d6000fd5b50505050600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f19350505050158015610901573d6000803e3d6000fd5b50600160028190555050565b600360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610961336000357fffffffff0000000000000000000000000000000000000000000000000000000016610a63565b6109a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161099790610e66565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b600560009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610b4257508073ffffffffffffffffffffffffffffffffffffffff1663b70096138530866040518463ffffffff1660e01b8152600401610b0093929190610f2d565b602060405180830381865afa158015610b1d573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b419190610f9c565b5b80610b98575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b600080fd5b6000819050919050565b610bb981610ba6565b8114610bc457600080fd5b50565b600081359050610bd681610bb0565b92915050565b600060208284031215610bf257610bf1610ba1565b5b6000610c0084828501610bc7565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610c3482610c09565b9050919050565b610c4481610c29565b8114610c4f57600080fd5b50565b600081359050610c6181610c3b565b92915050565b600060208284031215610c7d57610c7c610ba1565b5b6000610c8b84828501610c52565b91505092915050565b610c9d81610ba6565b82525050565b6000602082019050610cb86000830184610c94565b92915050565b6000610cc982610c29565b9050919050565b610cd981610cbe565b8114610ce457600080fd5b50565b600081359050610cf681610cd0565b92915050565b600060208284031215610d1257610d11610ba1565b5b6000610d2084828501610ce7565b91505092915050565b610d3281610c29565b82525050565b6000602082019050610d4d6000830184610d29565b92915050565b6000819050919050565b6000610d78610d73610d6e84610c09565b610d53565b610c09565b9050919050565b6000610d8a82610d5d565b9050919050565b6000610d9c82610d7f565b9050919050565b610dac81610d91565b82525050565b6000602082019050610dc76000830184610da3565b92915050565b6000610dd882610d7f565b9050919050565b610de881610dcd565b82525050565b6000602082019050610e036000830184610ddf565b92915050565b600082825260208201905092915050565b7f554e415554484f52495a45440000000000000000000000000000000000000000600082015250565b6000610e50600c83610e09565b9150610e5b82610e1a565b602082019050919050565b60006020820190508181036000830152610e7f81610e43565b9050919050565b7f5245454e5452414e435900000000000000000000000000000000000000000000600082015250565b6000610ebc600a83610e09565b9150610ec782610e86565b602082019050919050565b60006020820190508181036000830152610eeb81610eaf565b9050919050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b610f2781610ef2565b82525050565b6000606082019050610f426000830186610d29565b610f4f6020830185610d29565b610f5c6040830184610f1e565b949350505050565b60008115159050919050565b610f7981610f64565b8114610f8457600080fd5b50565b600081519050610f9681610f70565b92915050565b600060208284031215610fb257610fb1610ba1565b5b6000610fc084828501610f87565b91505092915050565b6000604082019050610fde6000830185610d29565b610feb6020830184610c94565b939250505056fea26469706673582212203e0bb67c751570355c542cd18a8fe033ceb2a8f3cbae058e0f48fdd61c270a5064736f6c63430008110033";

type LotteryHouseKeepingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LotteryHouseKeepingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LotteryHouseKeeping__factory extends ContractFactory {
  constructor(...args: LotteryHouseKeepingConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    police: PromiseOrValue<string>,
    _randomizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LotteryHouseKeeping> {
    return super.deploy(
      police,
      _randomizer,
      overrides || {}
    ) as Promise<LotteryHouseKeeping>;
  }
  override getDeployTransaction(
    police: PromiseOrValue<string>,
    _randomizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(police, _randomizer, overrides || {});
  }
  override attach(address: string): LotteryHouseKeeping {
    return super.attach(address) as LotteryHouseKeeping;
  }
  override connect(signer: Signer): LotteryHouseKeeping__factory {
    return super.connect(signer) as LotteryHouseKeeping__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LotteryHouseKeepingInterface {
    return new utils.Interface(_abi) as LotteryHouseKeepingInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LotteryHouseKeeping {
    return new Contract(address, _abi, signerOrProvider) as LotteryHouseKeeping;
  }
}
