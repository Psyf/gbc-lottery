const { expect } = require("chai");
const hre = require("hardhat");
const { time } = require("@nomicfoundation/hardhat-network-helpers");

const POLICE_ABI = [
  {
    inputs: [
      { internalType: "uint8", name: "role", type: "uint8" },
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes4", name: "functionSig", type: "bytes4" },
    ],
    name: "doesRoleHaveCapability",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint8", name: "role", type: "uint8" },
    ],
    name: "doesUserHaveRole",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint8", name: "role", type: "uint8" },
      { internalType: "address", name: "target", type: "address" },
      { internalType: "bytes4", name: "functionSig", type: "bytes4" },
      { internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "setRoleCapability",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint8", name: "role", type: "uint8" },
      { internalType: "bool", name: "enabled", type: "bool" },
    ],
    name: "setUserRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
const authorityAddr = "0x575F40E8422EfA696108dAFD12cD8d6366982416"; // roleAuthority aka Police
const randomizerAddr = "0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF";
const policeOwnerAddr = "0x9E7f78EafAEBaf1094202FFA0835157fC5C3ADe0";
const gbcLabsAddr = "0xF4f935F4272e6FD9C779cF0036589A63b48d77A7";
const gbcAddr = "0x17f4BAa9D35Ee54fFbCb2608e20786473c7aa49f";
const policeAddr = "0x575F40E8422EfA696108dAFD12cD8d6366982416"; // roleAuthority aka Police
const GBCLABS_MINTER_ROLE_NUMBER = 1;
const LOTTERY_ADMIN_ROLE_NUMBER = 2;

describe("Main pathway", function () {
  async function deployFixture() {
    const Randomizer = await ethers.getContractFactory("MockRandomizer");
    const randomizer = await Randomizer.deploy();

    const Lottery = await ethers.getContractFactory("Lottery");
    const lottery = await Lottery.deploy(authorityAddr, randomizer.address);
    const [deployer] = await ethers.getSigners();
    return { lottery, deployer };
  }

  async function setPermissionsFixture() {
    const { lottery, deployer } = await deployFixture();
    const policeOwner = await hre.ethers.getImpersonatedSigner(policeOwnerAddr);
    const police = await ethers.getContractAt(POLICE_ABI, policeAddr);

    await police.connect(policeOwner).setRoleCapability(
      GBCLABS_MINTER_ROLE_NUMBER,
      gbcLabsAddr,
      "0x731133e9", // msg.sig of mint()
      true
    );

    // Make lotteryAddr a minter
    await police
      .connect(policeOwner)
      .setUserRole(lottery.address, GBCLABS_MINTER_ROLE_NUMBER, true);

    // ---------- //

    // -- LOTTERY_ADMIN -- //
    methods = [
      "createSale",
      "withdrawRandomizer",
      "changeFundReceiver",
      "modifyRandomizerCallbackGas",
    ];
    for (const method of methods) {
      const fragment = lottery.interface.getFunction(method);
      const selectorHash = lottery.interface.getSighash(fragment);
      await police
        .connect(policeOwner)
        .setRoleCapability(
          LOTTERY_ADMIN_ROLE_NUMBER,
          lottery.address,
          selectorHash,
          true
        );
    }

    await police
      .connect(policeOwner)
      .setUserRole(deployer.address, LOTTERY_ADMIN_ROLE_NUMBER, true);

    const admin = deployer;
    return { lottery, admin };
  }

  async function createSale(signer, lottery) {
    // get the saleId from the event

    const tx = await lottery.connect(signer).createSale(
      gbcAddr,
      gbcLabsAddr,
      420,
      2,
      await ethers.utils.parseEther("0.1"),
      (await ethers.provider.getBlock()).timestamp + 60 * 60 * 24 * 7 // 1 week from now
    );

    const receipt = await tx.wait();
    const event = receipt.events[0];
    const saleId = event.args[0];
    return saleId;
  }

  async function getHoldersToParticipate(lottery, admin, saleId) {
    const holder1 = await hre.ethers.getImpersonatedSigner(
      "0x4f30a0d841088bacddc7c179be06564fc4d0b7e7"
    );
    const holder2 = await hre.ethers.getImpersonatedSigner(
      "0x5edfa1d84e9bb67df816ff8380db056b6911b330"
    );
    const holder3 = await hre.ethers.getImpersonatedSigner(
      "0x787b4b7ffef8eddad54f311039acf4c36fec9593"
    );

    const holder4 = await hre.ethers.getImpersonatedSigner(
      "0x85B7fb279A888c56163275dF5A2CaA03cbE467fD"
    );

    const nonHolder = await hre.ethers.getImpersonatedSigner(
      "0xD39EaA072A272aBdBa849Bef6582BBFC3819b03d"
    );

    const price = (await lottery.sales(saleId)).price;

    // give them some ETH so they can participate
    await admin.sendTransaction({
      to: holder1.address,
      value: ethers.utils.parseEther("1"),
    });

    await admin.sendTransaction({
      to: holder2.address,
      value: ethers.utils.parseEther("1"),
    });

    await admin.sendTransaction({
      to: holder3.address,
      value: ethers.utils.parseEther("1"),
    });

    await admin.sendTransaction({
      to: holder4.address,
      value: ethers.utils.parseEther("1"),
    });

    // reverts because wrong deposit amount
    await expect(lottery.connect(holder1).participate(saleId, 6750)).to.be
      .reverted;
    await expect(
      lottery.connect(holder1).participate(saleId, 6750, { value: price + 1 })
    ).to.be.reverted;

    await expect(
      lottery.connect(holder1).participate(saleId, 6750, { value: price })
    ).to.not.be.reverted;

    // holder already participated
    await expect(
      lottery.connect(holder1).participate(saleId, 6734, { value: price })
    ).to.be.reverted;

    // non holder can't
    await expect(
      lottery.connect(nonHolder).participate(saleId, 1, { value: price })
    ).to.be.reverted;

    await expect(
      lottery.connect(holder2).participate(saleId, 1515, { value: price })
    ).to.not.be.reverted;
    await expect(
      lottery.connect(holder3).participate(saleId, 1102, { value: price })
    ).to.not.be.reverted;

    // sale is ended, can't participate anymore
    const endTime = (await lottery.sales(saleId)).endTime;
    await time.increaseTo(endTime);

    await expect(
      lottery.connect(holder4).participate(saleId, 602, { value: price })
    ).to.be.reverted;
  }

  it("Should set the right owner", async function () {
    const { lottery } = await deployFixture();
    expect(await lottery.owner()).to.equal(policeOwnerAddr);
  });

  it("Sets permissions correctly", async function () {
    const { lottery, admin } = await setPermissionsFixture();
  });

  it("only account with correct permission should be able to create a sale", async function () {
    const { lottery, admin } = await setPermissionsFixture();
    expect(await createSale(admin, lottery)).to.not.be.reverted;

    const [_, anotherPerson] = await ethers.getSigners();
    await expect(createSale(anotherPerson, lottery)).to.be.revertedWith(
      "UNAUTHORIZED"
    );
  });

  it("GBC holders can participate within bounds", async function () {
    const { lottery, admin } = await setPermissionsFixture();
    const saleId = await createSale(admin, lottery);
    await getHoldersToParticipate(lottery, admin, saleId);
  });

  it("Should disburse rewards and refunds properly", async function () {
    const { lottery, admin } = await setPermissionsFixture();
    const saleId = await createSale(admin, lottery);
    await getHoldersToParticipate(lottery, admin, saleId);

    // calling randomGen won't work because no fund in randomizer
    // await expect(lottery.getRandomNumber(saleId)).to.be.reverted;

    // fund the randomizer
    await lottery.fundRandomizer({
      value: ethers.utils.parseEther("1"),
    });

    await lottery.getRandomNumber(saleId);

    // mock a random number return
    const randomizerBot = await hre.ethers.getImpersonatedSigner(
      await lottery.randomizer()
    );
    await lottery
      .connect(randomizerBot)
      .randomizerCallback(429, ethers.utils.formatBytes32String("Hello World"));

    const winners = await lottery.getWinners(saleId);

    expect(winners).to.have.lengthOf((await lottery.sales(saleId)).supply);

    await lottery.executeAirdropForWinnersAndRefundForLosers(saleId);

    // TODO: check that the winners got their rewards

    // TODO: check that the losers got their refunds

    // TODO: check that fundReceiver got the funds
  });
});
