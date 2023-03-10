/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface LotteryHouseKeepingInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "changeFundReceiver(address)": FunctionFragment;
    "changeRandomizerAddr(address)": FunctionFragment;
    "fundRandomizer()": FunctionFragment;
    "fundReceiver()": FunctionFragment;
    "modifyRandomizerCallbackGas(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "randomizer()": FunctionFragment;
    "randomizerCallbackGas()": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdrawRandomizer(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "changeFundReceiver"
      | "changeRandomizerAddr"
      | "fundRandomizer"
      | "fundReceiver"
      | "modifyRandomizerCallbackGas"
      | "owner"
      | "randomizer"
      | "randomizerCallbackGas"
      | "setAuthority"
      | "transferOwnership"
      | "withdrawRandomizer"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeFundReceiver",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "changeRandomizerAddr",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "fundRandomizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundReceiver",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "modifyRandomizerCallbackGas",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "randomizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomizerCallbackGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setAuthority",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawRandomizer",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "authority", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "changeFundReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeRandomizerAddr",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundRandomizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fundReceiver",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "modifyRandomizerCallbackGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "randomizer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomizerCallbackGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRandomizer",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
}

export interface AuthorityUpdatedEventObject {
  user: string;
  newAuthority: string;
}
export type AuthorityUpdatedEvent = TypedEvent<
  [string, string],
  AuthorityUpdatedEventObject
>;

export type AuthorityUpdatedEventFilter =
  TypedEventFilter<AuthorityUpdatedEvent>;

export interface OwnershipTransferredEventObject {
  user: string;
  newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export interface LotteryHouseKeeping extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryHouseKeepingInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    authority(overrides?: CallOverrides): Promise<[string]>;

    changeFundReceiver(
      newReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    changeRandomizerAddr(
      newAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundReceiver(overrides?: CallOverrides): Promise<[string]>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    randomizer(overrides?: CallOverrides): Promise<[string]>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawRandomizer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  authority(overrides?: CallOverrides): Promise<string>;

  changeFundReceiver(
    newReceiver: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  changeRandomizerAddr(
    newAddr: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundRandomizer(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundReceiver(overrides?: CallOverrides): Promise<string>;

  modifyRandomizerCallbackGas(
    newLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  randomizer(overrides?: CallOverrides): Promise<string>;

  randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

  setAuthority(
    newAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawRandomizer(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    authority(overrides?: CallOverrides): Promise<string>;

    changeFundReceiver(
      newReceiver: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    changeRandomizerAddr(
      newAddr: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundRandomizer(overrides?: CallOverrides): Promise<void>;

    fundReceiver(overrides?: CallOverrides): Promise<string>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    randomizer(overrides?: CallOverrides): Promise<string>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawRandomizer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AuthorityUpdated(address,address)"(
      user?: PromiseOrValue<string> | null,
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;
    AuthorityUpdated(
      user?: PromiseOrValue<string> | null,
      newAuthority?: PromiseOrValue<string> | null
    ): AuthorityUpdatedEventFilter;

    "OwnershipTransferred(address,address)"(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      user?: PromiseOrValue<string> | null,
      newOwner?: PromiseOrValue<string> | null
    ): OwnershipTransferredEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    changeFundReceiver(
      newReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    changeRandomizerAddr(
      newAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    randomizer(overrides?: CallOverrides): Promise<BigNumber>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawRandomizer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    authority(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    changeFundReceiver(
      newReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    changeRandomizerAddr(
      newAddr: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomizerCallbackGas(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawRandomizer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
