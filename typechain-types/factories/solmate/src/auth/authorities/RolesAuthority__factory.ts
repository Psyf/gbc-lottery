/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  RolesAuthority,
  RolesAuthorityInterface,
} from "../../../../../solmate/src/auth/authorities/RolesAuthority";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract Authority",
        name: "_authority",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "PublicCapabilityUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "RoleCapabilityUpdated",
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
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "UserRoleUpdated",
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
        name: "user",
        type: "address",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
    ],
    name: "canCall",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
    ],
    name: "doesRoleHaveCapability",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
    ],
    name: "doesUserHaveRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "getRolesWithCapability",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "getUserRoles",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    name: "isCapabilityPublic",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
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
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setPublicCapability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        internalType: "bytes4",
        name: "functionSig",
        type: "bytes4",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setRoleCapability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint8",
        name: "role",
        type: "uint8",
      },
      {
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "setUserRole",
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
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620017f6380380620017f6833981810160405281019062000037919062000227565b8181816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a38073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a3505050506200026e565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001aa826200017d565b9050919050565b620001bc816200019d565b8114620001c857600080fd5b50565b600081519050620001dc81620001b1565b92915050565b6000620001ef826200019d565b9050919050565b6200020181620001e2565b81146200020d57600080fd5b50565b6000815190506200022181620001f6565b92915050565b6000806040838503121562000241576200024062000178565b5b60006200025185828601620001cb565b9250506020620002648582860162000210565b9150509250929050565b611578806200027e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638da5cb5b1161008c578063bf7e214f11610066578063bf7e214f14610236578063c6b0263e14610254578063ea7ca27614610270578063f2fde38b146102a0576100cf565b80638da5cb5b146101b8578063b4bad06a146101d6578063b700961314610206576100cf565b806306a36aee146100d45780632f47571f1461010457806367aff484146101345780637917b794146101505780637a9e5e4b146101805780637d40583d1461019c575b600080fd5b6100ee60048036038101906100e99190610fa7565b6102bc565b6040516100fb9190610fed565b60405180910390f35b61011e60048036038101906101199190611060565b6102d4565b60405161012b91906110bb565b60405180910390f35b61014e6004803603810190610149919061113b565b610303565b005b61016a60048036038101906101659190611060565b610482565b6040516101779190610fed565b60405180910390f35b61019a600480360381019061019591906111cc565b6104a7565b005b6101b660048036038101906101b191906111f9565b610668565b005b6101c06108a6565b6040516101cd919061126f565b60405180910390f35b6101f060048036038101906101eb919061128a565b6108ca565b6040516101fd91906110bb565b60405180910390f35b610220600480360381019061021b91906112dd565b610973565b60405161022d91906110bb565b60405180910390f35b61023e610af7565b60405161024b919061138f565b60405180910390f35b61026e600480360381019061026991906113aa565b610b1d565b005b61028a600480360381019061028591906113fd565b610ca3565b60405161029791906110bb565b60405180910390f35b6102ba60048036038101906102b59190610fa7565b610cfc565b005b60026020528060005260406000206000915090505481565b60036020528160005260406000206020528060005260406000206000915091509054906101000a900460ff1681565b610331336000357fffffffff0000000000000000000000000000000000000000000000000000000016610e06565b610370576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103679061149a565b60405180910390fd5b80156103d2578160ff166001901b60001b600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254179250508190555061042b565b8160ff166001901b60001b19600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825416925050819055505b8160ff168373ffffffffffffffffffffffffffffffffffffffff167f4c9bdd0c8e073eb5eda2250b18d8e5121ff27b62064fbeeeed4869bb99bc5bf28360405161047591906110bb565b60405180910390a3505050565b6004602052816000526040600020602052806000526040600020600091509150505481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105c15750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b700961333306000357fffffffff00000000000000000000000000000000000000000000000000000000166040518463ffffffff1660e01b815260040161057f939291906114c9565b602060405180830381865afa15801561059c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105c09190611515565b5b6105ca57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a350565b610696336000357fffffffff0000000000000000000000000000000000000000000000000000000016610e06565b6106d5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106cc9061149a565b60405180910390fd5b8015610786578360ff166001901b60001b600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000206000828254179250508190555061082e565b8360ff166001901b60001b19600460008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168152602001908152602001600020600082825416925050819055505b817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff168560ff167fa52ea92e6e955aa8ac66420b86350f7139959adfcc7e6a14eee1bd116d09860e8460405161089891906110bb565b60405180910390a450505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060018560ff16600460008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000867bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191681526020019081526020016000205460001c901c16141590509392505050565b6000600360008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060009054906101000a900460ff1680610aee5750600460008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002054600260008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054166000801b14155b90509392505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610b4b336000357fffffffff0000000000000000000000000000000000000000000000000000000016610e06565b610b8a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b819061149a565b60405180910390fd5b80600360008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000847bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916815260200190815260200160002060006101000a81548160ff021916908315150217905550817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19168373ffffffffffffffffffffffffffffffffffffffff167f950a343f5d10445e82a71036d3f4fb3016180a25805141932543b83e2078a93e83604051610c9691906110bb565b60405180910390a3505050565b60008060018360ff16600260008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205460001c901c161415905092915050565b610d2a336000357fffffffff0000000000000000000000000000000000000000000000000000000016610e06565b610d69576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d609061149a565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610ee557508073ffffffffffffffffffffffffffffffffffffffff1663b70096138530866040518463ffffffff1660e01b8152600401610ea3939291906114c9565b602060405180830381865afa158015610ec0573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610ee49190611515565b5b80610f3b575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610f7482610f49565b9050919050565b610f8481610f69565b8114610f8f57600080fd5b50565b600081359050610fa181610f7b565b92915050565b600060208284031215610fbd57610fbc610f44565b5b6000610fcb84828501610f92565b91505092915050565b6000819050919050565b610fe781610fd4565b82525050565b60006020820190506110026000830184610fde565b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b61103d81611008565b811461104857600080fd5b50565b60008135905061105a81611034565b92915050565b6000806040838503121561107757611076610f44565b5b600061108585828601610f92565b92505060206110968582860161104b565b9150509250929050565b60008115159050919050565b6110b5816110a0565b82525050565b60006020820190506110d060008301846110ac565b92915050565b600060ff82169050919050565b6110ec816110d6565b81146110f757600080fd5b50565b600081359050611109816110e3565b92915050565b611118816110a0565b811461112357600080fd5b50565b6000813590506111358161110f565b92915050565b60008060006060848603121561115457611153610f44565b5b600061116286828701610f92565b9350506020611173868287016110fa565b925050604061118486828701611126565b9150509250925092565b600061119982610f69565b9050919050565b6111a98161118e565b81146111b457600080fd5b50565b6000813590506111c6816111a0565b92915050565b6000602082840312156111e2576111e1610f44565b5b60006111f0848285016111b7565b91505092915050565b6000806000806080858703121561121357611212610f44565b5b6000611221878288016110fa565b945050602061123287828801610f92565b93505060406112438782880161104b565b925050606061125487828801611126565b91505092959194509250565b61126981610f69565b82525050565b60006020820190506112846000830184611260565b92915050565b6000806000606084860312156112a3576112a2610f44565b5b60006112b1868287016110fa565b93505060206112c286828701610f92565b92505060406112d38682870161104b565b9150509250925092565b6000806000606084860312156112f6576112f5610f44565b5b600061130486828701610f92565b935050602061131586828701610f92565b92505060406113268682870161104b565b9150509250925092565b6000819050919050565b600061135561135061134b84610f49565b611330565b610f49565b9050919050565b60006113678261133a565b9050919050565b60006113798261135c565b9050919050565b6113898161136e565b82525050565b60006020820190506113a46000830184611380565b92915050565b6000806000606084860312156113c3576113c2610f44565b5b60006113d186828701610f92565b93505060206113e28682870161104b565b92505060406113f386828701611126565b9150509250925092565b6000806040838503121561141457611413610f44565b5b600061142285828601610f92565b9250506020611433858286016110fa565b9150509250929050565b600082825260208201905092915050565b7f554e415554484f52495a45440000000000000000000000000000000000000000600082015250565b6000611484600c8361143d565b915061148f8261144e565b602082019050919050565b600060208201905081810360008301526114b381611477565b9050919050565b6114c381611008565b82525050565b60006060820190506114de6000830186611260565b6114eb6020830185611260565b6114f860408301846114ba565b949350505050565b60008151905061150f8161110f565b92915050565b60006020828403121561152b5761152a610f44565b5b600061153984828501611500565b9150509291505056fea264697066735822122085c863c991b4d1179a87b9134f788a281cdde0f9d84d4dc43861ad2ffb03f98b64736f6c63430008110033";

type RolesAuthorityConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RolesAuthorityConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RolesAuthority__factory extends ContractFactory {
  constructor(...args: RolesAuthorityConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RolesAuthority> {
    return super.deploy(
      _owner,
      _authority,
      overrides || {}
    ) as Promise<RolesAuthority>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_owner, _authority, overrides || {});
  }
  override attach(address: string): RolesAuthority {
    return super.attach(address) as RolesAuthority;
  }
  override connect(signer: Signer): RolesAuthority__factory {
    return super.connect(signer) as RolesAuthority__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RolesAuthorityInterface {
    return new utils.Interface(_abi) as RolesAuthorityInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RolesAuthority {
    return new Contract(address, _abi, signerOrProvider) as RolesAuthority;
  }
}