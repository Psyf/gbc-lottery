/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ethers } from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "IGBCLab",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGBCLab__factory>;
    getContractFactory(
      name: "IRandomizer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRandomizer__factory>;
    getContractFactory(
      name: "Lottery",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Lottery__factory>;
    getContractFactory(
      name: "LotteryEvents",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LotteryEvents__factory>;
    getContractFactory(
      name: "LotteryHouseKeeping",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LotteryHouseKeeping__factory>;
    getContractFactory(
      name: "MockRandomizer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockRandomizer__factory>;
    getContractFactory(
      name: "Auth",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Auth__factory>;
    getContractFactory(
      name: "Authority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authority__factory>;
    getContractFactory(
      name: "RolesAuthority",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RolesAuthority__factory>;
    getContractFactory(
      name: "ERC721",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721__factory>;
    getContractFactory(
      name: "ERC721TokenReceiver",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC721TokenReceiver__factory>;

    getContractAt(
      name: "IGBCLab",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGBCLab>;
    getContractAt(
      name: "IRandomizer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRandomizer>;
    getContractAt(
      name: "Lottery",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Lottery>;
    getContractAt(
      name: "LotteryEvents",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LotteryEvents>;
    getContractAt(
      name: "LotteryHouseKeeping",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LotteryHouseKeeping>;
    getContractAt(
      name: "MockRandomizer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockRandomizer>;
    getContractAt(
      name: "Auth",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Auth>;
    getContractAt(
      name: "Authority",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authority>;
    getContractAt(
      name: "RolesAuthority",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RolesAuthority>;
    getContractAt(
      name: "ERC721",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721>;
    getContractAt(
      name: "ERC721TokenReceiver",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC721TokenReceiver>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
