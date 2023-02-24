const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Acting with address", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const lotteryAddr = ""; // get from console output of 00_deploy_lottery.js
  const lottery_admin_addr = deployer.address; // configure as necessary

  const gbcLabsAddr = "0x17f4BAa9D35Ee54fFbCb2608e20786473c7aa49f";

  const GBCLABS_MINTER_ROLE_NUMBER = 1;
  const LOTTERY_ADMIN_ROLE_NUMBER = 2;
  const policeAddr = "0x575F40E8422EfA696108dAFD12cD8d6366982416"; // roleAuthority aka Police
  POLICE_ABI = [
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
  const police = await ethers.getContractAt(POLICE_ABI, policeAddr);

  // Set permissions

  // -- MINTER -- //
  // Make a minter role
  await police.setRoleCapability(
    GBCLABS_MINTER_ROLE_NUMBER,
    gbcLabsAddr,
    "0x731133e9", // msg.sig of mint()
    true
  );

  // Make lotteryAddr a minter
  await police.setUserRole(lotteryAddr, GBCLABS_MINTER_ROLE_NUMBER, true);

  // ---------- //

  // -- LOTTERY_ADMIN -- //
  await police.setRoleCapability(
    LOTTERY_ADMIN_ROLE_NUMBER,
    lotteryAddr,
    "0x0", // msg.sig of createSale()
    true
  );
  await police.setRoleCapability(
    LOTTERY_ADMIN_ROLE_NUMBER,
    lotteryAddr,
    "0x0", // msg.sig of sweep()
    true
  );
  await police.setRoleCapability(
    LOTTERY_ADMIN_ROLE_NUMBER,
    lotteryAddr,
    "0x0", // msg.sig of fundRandomizer()
    true
  );
  await police.setRoleCapability(
    LOTTERY_ADMIN_ROLE_NUMBER,
    lotteryAddr,
    "0x0", // msg.sig of withdrawRandomizer()
    true
  );

  await police.setUserRole(lottery_admin_addr, LOTTERY_ADMIN_ROLE_NUMBER, true);
  // ---------- //
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
