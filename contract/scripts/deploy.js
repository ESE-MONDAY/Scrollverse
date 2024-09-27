




const hre = require("hardhat");

async function main() {
  console.log("Deploying contracts...");

  // Deploy Project
  const ProjectVoting  = await ethers.getContractFactory("ProjectVoting");
  const projectVoting = await ProjectVoting.deploy();

  console.log("Project deployed to:", await projectVoting.getAddress());
  console.log(`Block explorer URL: https://sepolia.scrollscan.com/address/${ await projectVoting.getAddress()}`);    
 

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });