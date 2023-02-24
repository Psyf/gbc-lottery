const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Acting with address", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());

  const lotteryAddr = ""; // get from console output of 00_deploy_lottery.js
  const lottery = await ethers.getContractAt("Lottery", lotteryAddr);
  const amount = ethers.utils.parseEther(NULL); // amount to fund Randomizer with - configure on every run
  const isDirect = NULL; // whether you're sending ether directly from deployer or not - configure on every run

  try {
    var tx;
    if (isDirect) {
      tx = await lottery.fundRandomizer(amount, { value: amount });
    } else {
      tx = await lottery.fundRandomizer(amount);
    }

    const receipt = await tx.wait();
    console.log("Receipt:", receipt);

    console.log(
      "Don't forget to set an alert for the Randomizer's balance and top up before another sale ends!"
    );
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
