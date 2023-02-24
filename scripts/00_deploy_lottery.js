const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  // 0x9E7f78EafAEBaf1094202FFA0835157fC5C3ADe0 is owner of Police, so probably mock this guy here

  console.log("Deploying Lottery with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const ownerAddr = ethers.constants.AddressZero; // owner
  const authorityAddr = "0x575F40E8422EfA696108dAFD12cD8d6366982416"; // roleAuthority aka Police
  const randomizerAddr = "0x5b8bB80f2d72D0C85caB8fB169e8170A05C94bAF";

  console.log("ownerAddr:", ownerAddr);
  console.log("authorityAddr:", authorityAddr);
  console.log("randomizerAddr:", randomizerAddr);

  const Lottery = await ethers.getContractFactory("Lottery");
  const lottery = await Lottery.deploy(
    ownerAddr,
    authorityAddr,
    randomizerAddr
  );

  await lottery.deployed();

  console.log("Lottery address:", lottery.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
