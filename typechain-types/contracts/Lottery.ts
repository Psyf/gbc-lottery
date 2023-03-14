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

export interface LotteryInterface extends utils.Interface {
  functions: {
    "authority()": FunctionFragment;
    "changeFundReceiver(address)": FunctionFragment;
    "createSale(address,address,uint256,uint256,uint256,uint256)": FunctionFragment;
    "executeAirdropForWinners(bytes32)": FunctionFragment;
    "executeAirdropForWinnersAndRefundForLosers(bytes32)": FunctionFragment;
    "executeRefundAllOnFailedSale(bytes32)": FunctionFragment;
    "executeRefundForLosers(bytes32)": FunctionFragment;
    "fundRandomizer()": FunctionFragment;
    "fundReceiver()": FunctionFragment;
    "getRandomNumber(bytes32)": FunctionFragment;
    "getState(bytes32)": FunctionFragment;
    "modifyRandomizerCallbackGas(uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "participate(bytes32,uint256)": FunctionFragment;
    "randomizer()": FunctionFragment;
    "randomizerCallback(uint256,bytes32)": FunctionFragment;
    "randomizerCallbackGas()": FunctionFragment;
    "randomizerIdToSalesId(uint256)": FunctionFragment;
    "sales(bytes32)": FunctionFragment;
    "setAuthority(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "withdraw(bytes32,address)": FunctionFragment;
    "withdrawMulti(bytes32,address[])": FunctionFragment;
    "withdrawRandomizer(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "authority"
      | "changeFundReceiver"
      | "createSale"
      | "executeAirdropForWinners"
      | "executeAirdropForWinnersAndRefundForLosers"
      | "executeRefundAllOnFailedSale"
      | "executeRefundForLosers"
      | "fundRandomizer"
      | "fundReceiver"
      | "getRandomNumber"
      | "getState"
      | "modifyRandomizerCallbackGas"
      | "owner"
      | "participate"
      | "randomizer"
      | "randomizerCallback"
      | "randomizerCallbackGas"
      | "randomizerIdToSalesId"
      | "sales"
      | "setAuthority"
      | "transferOwnership"
      | "withdraw"
      | "withdrawMulti"
      | "withdrawRandomizer"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "authority", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "changeFundReceiver",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createSale",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAirdropForWinners",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeAirdropForWinnersAndRefundForLosers",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRefundAllOnFailedSale",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "executeRefundForLosers",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "getRandomNumber",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getState",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "modifyRandomizerCallbackGas",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "participate",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "randomizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomizerCallback",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "randomizerCallbackGas",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "randomizerIdToSalesId",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "sales",
    values: [PromiseOrValue<BytesLike>]
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
    functionFragment: "withdraw",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawMulti",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>[]]
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
  decodeFunctionResult(functionFragment: "createSale", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeAirdropForWinners",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeAirdropForWinnersAndRefundForLosers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRefundAllOnFailedSale",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "executeRefundForLosers",
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
    functionFragment: "getRandomNumber",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getState", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "modifyRandomizerCallbackGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "participate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "randomizer", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "randomizerCallback",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "randomizerCallbackGas",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "randomizerIdToSalesId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "sales", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setAuthority",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawMulti",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawRandomizer",
    data: BytesLike
  ): Result;

  events: {
    "AuthorityUpdated(address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Participation(bytes32,address,uint256)": EventFragment;
    "SaleCreation(bytes32,address,address,uint256,uint256,uint256,uint256)": EventFragment;
    "Withdrawal(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AuthorityUpdated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Participation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "SaleCreation"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Withdrawal"): EventFragment;
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

export interface ParticipationEventObject {
  saleId: string;
  participant: string;
  markTokenId: BigNumber;
}
export type ParticipationEvent = TypedEvent<
  [string, string, BigNumber],
  ParticipationEventObject
>;

export type ParticipationEventFilter = TypedEventFilter<ParticipationEvent>;

export interface SaleCreationEventObject {
  saleId: string;
  markToken: string;
  rewardToken: string;
  rewardTokenId: BigNumber;
  supply: BigNumber;
  price: BigNumber;
  endTime: BigNumber;
}
export type SaleCreationEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber, BigNumber, BigNumber],
  SaleCreationEventObject
>;

export type SaleCreationEventFilter = TypedEventFilter<SaleCreationEvent>;

export interface WithdrawalEventObject {
  saleId: string;
  participant: string;
}
export type WithdrawalEvent = TypedEvent<
  [string, string],
  WithdrawalEventObject
>;

export type WithdrawalEventFilter = TypedEventFilter<WithdrawalEvent>;

export interface Lottery extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: LotteryInterface;

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

    createSale(
      _markToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardTokenId: PromiseOrValue<BigNumberish>,
      _supply: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeAirdropForWinners(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeAirdropForWinnersAndRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeRefundAllOnFailedSale(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundReceiver(overrides?: CallOverrides): Promise<[string]>;

    getRandomNumber(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getState(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[number]>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    participate(
      saleId: PromiseOrValue<BytesLike>,
      _markTokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    randomizer(overrides?: CallOverrides): Promise<[string]>;

    randomizerCallback(
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<[BigNumber]>;

    randomizerIdToSalesId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    sales(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        markToken: string;
        rewardToken: string;
        rewardTokenId: BigNumber;
        supply: BigNumber;
        price: BigNumber;
        endTime: BigNumber;
        randomizerId: BigNumber;
      }
    >;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdraw(
      saleId: PromiseOrValue<BytesLike>,
      participant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    withdrawMulti(
      saleId: PromiseOrValue<BytesLike>,
      participants: PromiseOrValue<string>[],
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

  createSale(
    _markToken: PromiseOrValue<string>,
    _rewardToken: PromiseOrValue<string>,
    _rewardTokenId: PromiseOrValue<BigNumberish>,
    _supply: PromiseOrValue<BigNumberish>,
    _price: PromiseOrValue<BigNumberish>,
    _endTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeAirdropForWinners(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeAirdropForWinnersAndRefundForLosers(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeRefundAllOnFailedSale(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeRefundForLosers(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundRandomizer(
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundReceiver(overrides?: CallOverrides): Promise<string>;

  getRandomNumber(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getState(
    saleId: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<number>;

  modifyRandomizerCallbackGas(
    newLimit: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  participate(
    saleId: PromiseOrValue<BytesLike>,
    _markTokenId: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  randomizer(overrides?: CallOverrides): Promise<string>;

  randomizerCallback(
    _id: PromiseOrValue<BigNumberish>,
    _value: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

  randomizerIdToSalesId(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  sales(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber, BigNumber] & {
      markToken: string;
      rewardToken: string;
      rewardTokenId: BigNumber;
      supply: BigNumber;
      price: BigNumber;
      endTime: BigNumber;
      randomizerId: BigNumber;
    }
  >;

  setAuthority(
    newAuthority: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdraw(
    saleId: PromiseOrValue<BytesLike>,
    participant: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  withdrawMulti(
    saleId: PromiseOrValue<BytesLike>,
    participants: PromiseOrValue<string>[],
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

    createSale(
      _markToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardTokenId: PromiseOrValue<BigNumberish>,
      _supply: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAirdropForWinners(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeAirdropForWinnersAndRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeRefundAllOnFailedSale(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    fundRandomizer(overrides?: CallOverrides): Promise<void>;

    fundReceiver(overrides?: CallOverrides): Promise<string>;

    getRandomNumber(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    getState(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<number>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    participate(
      saleId: PromiseOrValue<BytesLike>,
      _markTokenId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    randomizer(overrides?: CallOverrides): Promise<string>;

    randomizerCallback(
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

    randomizerIdToSalesId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    sales(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber
      ] & {
        markToken: string;
        rewardToken: string;
        rewardTokenId: BigNumber;
        supply: BigNumber;
        price: BigNumber;
        endTime: BigNumber;
        randomizerId: BigNumber;
      }
    >;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdraw(
      saleId: PromiseOrValue<BytesLike>,
      participant: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    withdrawMulti(
      saleId: PromiseOrValue<BytesLike>,
      participants: PromiseOrValue<string>[],
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

    "Participation(bytes32,address,uint256)"(
      saleId?: PromiseOrValue<BytesLike> | null,
      participant?: PromiseOrValue<string> | null,
      markTokenId?: null
    ): ParticipationEventFilter;
    Participation(
      saleId?: PromiseOrValue<BytesLike> | null,
      participant?: PromiseOrValue<string> | null,
      markTokenId?: null
    ): ParticipationEventFilter;

    "SaleCreation(bytes32,address,address,uint256,uint256,uint256,uint256)"(
      saleId?: PromiseOrValue<BytesLike> | null,
      markToken?: null,
      rewardToken?: null,
      rewardTokenId?: null,
      supply?: null,
      price?: null,
      endTime?: null
    ): SaleCreationEventFilter;
    SaleCreation(
      saleId?: PromiseOrValue<BytesLike> | null,
      markToken?: null,
      rewardToken?: null,
      rewardTokenId?: null,
      supply?: null,
      price?: null,
      endTime?: null
    ): SaleCreationEventFilter;

    "Withdrawal(bytes32,address)"(
      saleId?: PromiseOrValue<BytesLike> | null,
      participant?: PromiseOrValue<string> | null
    ): WithdrawalEventFilter;
    Withdrawal(
      saleId?: PromiseOrValue<BytesLike> | null,
      participant?: PromiseOrValue<string> | null
    ): WithdrawalEventFilter;
  };

  estimateGas: {
    authority(overrides?: CallOverrides): Promise<BigNumber>;

    changeFundReceiver(
      newReceiver: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createSale(
      _markToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardTokenId: PromiseOrValue<BigNumberish>,
      _supply: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeAirdropForWinners(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeAirdropForWinnersAndRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeRefundAllOnFailedSale(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundReceiver(overrides?: CallOverrides): Promise<BigNumber>;

    getRandomNumber(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getState(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    participate(
      saleId: PromiseOrValue<BytesLike>,
      _markTokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    randomizer(overrides?: CallOverrides): Promise<BigNumber>;

    randomizerCallback(
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    randomizerCallbackGas(overrides?: CallOverrides): Promise<BigNumber>;

    randomizerIdToSalesId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    sales(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAuthority(
      newAuthority: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdraw(
      saleId: PromiseOrValue<BytesLike>,
      participant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    withdrawMulti(
      saleId: PromiseOrValue<BytesLike>,
      participants: PromiseOrValue<string>[],
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

    createSale(
      _markToken: PromiseOrValue<string>,
      _rewardToken: PromiseOrValue<string>,
      _rewardTokenId: PromiseOrValue<BigNumberish>,
      _supply: PromiseOrValue<BigNumberish>,
      _price: PromiseOrValue<BigNumberish>,
      _endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeAirdropForWinners(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeAirdropForWinnersAndRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeRefundAllOnFailedSale(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeRefundForLosers(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundRandomizer(
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundReceiver(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getRandomNumber(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getState(
      saleId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    modifyRandomizerCallbackGas(
      newLimit: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    participate(
      saleId: PromiseOrValue<BytesLike>,
      _markTokenId: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    randomizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    randomizerCallback(
      _id: PromiseOrValue<BigNumberish>,
      _value: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    randomizerCallbackGas(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    randomizerIdToSalesId(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    sales(
      arg0: PromiseOrValue<BytesLike>,
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

    withdraw(
      saleId: PromiseOrValue<BytesLike>,
      participant: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawMulti(
      saleId: PromiseOrValue<BytesLike>,
      participants: PromiseOrValue<string>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    withdrawRandomizer(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
