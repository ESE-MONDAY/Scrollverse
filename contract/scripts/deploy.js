// scripts/deploy.js
const { ethers } = require("hardhat");

async function main() {
    // Get the ContractFactory and Signers here.
    const ProjectVoting = await ethers.getContractFactory("ProjectVoting");
    const projectVoting = await ProjectVoting.deploy();

    // Wait for the contract to be deployed.
    await projectVoting.deployed();

    console.log("ProjectVoting contract deployed to:", projectVoting.address);
}

// Run the main function and catch any errors
main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
