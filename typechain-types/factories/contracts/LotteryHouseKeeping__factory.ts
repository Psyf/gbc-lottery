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
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "contract Authority",
        name: "_authority",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fundRandomizer",
    outputs: [],
    stateMutability: "payable",
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
    name: "reserves",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "sweep",
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
  "0x608060405260016002553480156200001657600080fd5b50604051620015513803806200155183398181016040528101906200003c919062000276565b8282816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a38073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a3505080600460006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506000600381905550505050620002d2565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620001f982620001cc565b9050919050565b6200020b81620001ec565b81146200021757600080fd5b50565b6000815190506200022b8162000200565b92915050565b60006200023e82620001ec565b9050919050565b620002508162000231565b81146200025c57600080fd5b50565b600081519050620002708162000245565b92915050565b600080600060608486031215620002925762000291620001c7565b5b6000620002a2868287016200021a565b9350506020620002b5868287016200025f565b9250506040620002c8868287016200021a565b9150509250925092565b61126f80620002e26000396000f3fe6080604052600436106100865760003560e01c8063aa60e73311610059578063aa60e73314610126578063bf7e214f1461014f578063c03634ff1461017a578063f10fb584146101a3578063f2fde38b146101ce57610086565b80634846ed9a1461008b57806375172a8b146100a75780637a9e5e4b146100d25780638da5cb5b146100fb575b600080fd5b6100a560048036038101906100a09190610c48565b6101f7565b005b3480156100b357600080fd5b506100bc610486565b6040516100c99190610c84565b60405180910390f35b3480156100de57600080fd5b506100f960048036038101906100f49190610d0f565b61048c565b005b34801561010757600080fd5b5061011061064d565b60405161011d9190610d4b565b60405180910390f35b34801561013257600080fd5b5061014d60048036038101906101489190610c48565b610671565b005b34801561015b57600080fd5b5061016461080d565b6040516101719190610dc5565b60405180910390f35b34801561018657600080fd5b506101a1600480360381019061019c9190610c48565b610833565b005b3480156101af57600080fd5b506101b861099f565b6040516101c59190610e01565b60405180910390f35b3480156101da57600080fd5b506101f560048036038101906101f09190610e48565b6109c5565b005b610225336000357fffffffff0000000000000000000000000000000000000000000000000000000016610acf565b610264576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161025b90610ed2565b60405180910390fd5b6001600254146102a9576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102a090610f3e565b60405180910390fd5b60028081905550600034111561038e573481146102fb576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102f290610faa565b60405180910390fd5b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ffd2e4334306040518363ffffffff1660e01b81526004016103579190610d4b565b6000604051808303818588803b15801561037057600080fd5b505af1158015610384573d6000803e3d6000fd5b505050505061047b565b8060035410156103d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016103ca90611016565b60405180910390fd5b80600360008282546103e59190611065565b92505081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16634ffd2e4382306040518363ffffffff1660e01b81526004016104489190610d4b565b6000604051808303818588803b15801561046157600080fd5b505af1158015610475573d6000803e3d6000fd5b50505050505b600160028190555050565b60035481565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614806105a65750600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b700961333306000357fffffffff00000000000000000000000000000000000000000000000000000000166040518463ffffffff1660e01b8152600401610564939291906110d4565b602060405180830381865afa158015610581573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105a59190611143565b5b6105af57600080fd5b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167fa3396fd7f6e0a21b50e5089d2da70d5ac0a3bbbd1f617a93f134b7638998019860405160405180910390a350565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61069f336000357fffffffff0000000000000000000000000000000000000000000000000000000016610acf565b6106de576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016106d590610ed2565b60405180910390fd5b600160025414610723576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161071a90610f3e565b60405180910390fd5b6002808190555080600354101561076f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161076690611016565b60405180910390fd5b80600360008282546107819190611065565b9250508190555060003373ffffffffffffffffffffffffffffffffffffffff166108fc839081150290604051600060405180830381858888f19350505050905080610801576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107f8906111bc565b60405180910390fd5b50600160028190555050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b610861336000357fffffffff0000000000000000000000000000000000000000000000000000000016610acf565b6108a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161089790610ed2565b60405180910390fd5b6001600254146108e5576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108dc90610f3e565b60405180910390fd5b6002808190555080600360008282546108fe91906111dc565b92505081905550600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16632465f8f530836040518363ffffffff1660e01b8152600401610962929190611210565b600060405180830381600087803b15801561097c57600080fd5b505af1158015610990573d6000803e3d6000fd5b50505050600160028190555050565b600460009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6109f3336000357fffffffff0000000000000000000000000000000000000000000000000000000016610acf565b610a32576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610a2990610ed2565b60405180910390fd5b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a350565b600080600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614158015610bae57508073ffffffffffffffffffffffffffffffffffffffff1663b70096138530866040518463ffffffff1660e01b8152600401610b6c939291906110d4565b602060405180830381865afa158015610b89573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bad9190611143565b5b80610c04575060008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff16145b91505092915050565b600080fd5b6000819050919050565b610c2581610c12565b8114610c3057600080fd5b50565b600081359050610c4281610c1c565b92915050565b600060208284031215610c5e57610c5d610c0d565b5b6000610c6c84828501610c33565b91505092915050565b610c7e81610c12565b82525050565b6000602082019050610c996000830184610c75565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610cca82610c9f565b9050919050565b6000610cdc82610cbf565b9050919050565b610cec81610cd1565b8114610cf757600080fd5b50565b600081359050610d0981610ce3565b92915050565b600060208284031215610d2557610d24610c0d565b5b6000610d3384828501610cfa565b91505092915050565b610d4581610cbf565b82525050565b6000602082019050610d606000830184610d3c565b92915050565b6000819050919050565b6000610d8b610d86610d8184610c9f565b610d66565b610c9f565b9050919050565b6000610d9d82610d70565b9050919050565b6000610daf82610d92565b9050919050565b610dbf81610da4565b82525050565b6000602082019050610dda6000830184610db6565b92915050565b6000610deb82610d92565b9050919050565b610dfb81610de0565b82525050565b6000602082019050610e166000830184610df2565b92915050565b610e2581610cbf565b8114610e3057600080fd5b50565b600081359050610e4281610e1c565b92915050565b600060208284031215610e5e57610e5d610c0d565b5b6000610e6c84828501610e33565b91505092915050565b600082825260208201905092915050565b7f554e415554484f52495a45440000000000000000000000000000000000000000600082015250565b6000610ebc600c83610e75565b9150610ec782610e86565b602082019050919050565b60006020820190508181036000830152610eeb81610eaf565b9050919050565b7f5245454e5452414e435900000000000000000000000000000000000000000000600082015250565b6000610f28600a83610e75565b9150610f3382610ef2565b602082019050919050565b60006020820190508181036000830152610f5781610f1b565b9050919050565b7f416d6f756e74206d757374206d61746368206d73672e76616c75650000000000600082015250565b6000610f94601b83610e75565b9150610f9f82610f5e565b602082019050919050565b60006020820190508181036000830152610fc381610f87565b9050919050565b7f496e73756666696369656e742072657365727665730000000000000000000000600082015250565b6000611000601583610e75565b915061100b82610fca565b602082019050919050565b6000602082019050818103600083015261102f81610ff3565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061107082610c12565b915061107b83610c12565b925082820390508181111561109357611092611036565b5b92915050565b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b6110ce81611099565b82525050565b60006060820190506110e96000830186610d3c565b6110f66020830185610d3c565b61110360408301846110c5565b949350505050565b60008115159050919050565b6111208161110b565b811461112b57600080fd5b50565b60008151905061113d81611117565b92915050565b60006020828403121561115957611158610c0d565b5b60006111678482850161112e565b91505092915050565b7f4661696c656420746f2073656e64207377656570000000000000000000000000600082015250565b60006111a6601483610e75565b91506111b182611170565b602082019050919050565b600060208201905081810360008301526111d581611199565b9050919050565b60006111e782610c12565b91506111f283610c12565b925082820190508082111561120a57611209611036565b5b92915050565b60006040820190506112256000830185610d3c565b6112326020830184610c75565b939250505056fea2646970667358221220085eaa1b64dd68b86de32ffd95f1d8406b97da5a95365bcd31c643177356f28f64736f6c63430008110033";

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
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    _randomizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<LotteryHouseKeeping> {
    return super.deploy(
      _owner,
      _authority,
      _randomizer,
      overrides || {}
    ) as Promise<LotteryHouseKeeping>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _authority: PromiseOrValue<string>,
    _randomizer: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _authority,
      _randomizer,
      overrides || {}
    );
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
