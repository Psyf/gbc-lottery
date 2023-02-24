const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Acting with address", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const lotteryAddr = ""; // get from console output of 00_deploy_lottery.js
  const lottery = await ethers.getContractAt("Lottery", lotteryAddr);

  const markTokenAddr = "0x17f4BAa9D35Ee54fFbCb2608e20786473c7aa49f"; // GBCAddr
  const rewardTokenAddr = "0xF4f935F4272e6FD9C779cF0036589A63b48d77A7"; // GBCLabsAddr
  const rewardTokenId = NULL; // configure on every run
  const supply = NULL; // configure on every run
  const price = NULL; // configure on every run
  const endTime = NULL; // configure on every run

  try {
    const tx = await lottery.createSale(
      markTokenAddr,
      rewardTokenAddr,
      rewardTokenId,
      supply,
      price,
      endTime
    );
    const receipt = await tx.wait();
    console.log("Receipt:", receipt);
    const saleId = receipt.events[0].args[0];
    console.log("Sale ID:", saleId.toString());
  } catch (e) {
    console.log("Error:", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
