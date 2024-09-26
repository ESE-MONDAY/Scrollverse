Here’s the complete README in markdown format:
markdown
# Scrollverse

Scrollverse is a public good project that allows users to list their projects, gather community feedback, and raise funds through donations. It empowers creators to showcase their ideas while enabling the community to support and engage with innovative initiatives.

**This project is a submission for the Scroll - Alchemy Level Up Hackathon.**

## Project Structure

```
scrollverse/
├── contracts/       # Contains the Hardhat project for smart contracts
└── frontend/        # Contains the frontend application
```

## Features

- **Project Registration:** Register unique projects with detailed descriptions.
- **Voting System:** Upvote and downvote projects to provide community feedback.
- **Donation Mechanism:** Directly support projects by donating to creators.
- **Transparent Tracking:** All votes and donations are recorded on the blockchain.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Hardhat](https://hardhat.org/) (for smart contract development)
- [MetaMask](https://metamask.io/) (for interacting with the Ethereum network)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/scrollverse.git
   cd scrollverse
   ```

2. **Install dependencies for the contracts:**
   ```bash
   cd contracts
   npm install
   ```

3. **Compile the smart contracts:**
   ```bash
   npx hardhat compile
   ```

4. **Deploy the contracts:**
   ```bash
   npx hardhat run scripts/deploy.js --network <your_network>
   ```

5. **Install dependencies for the frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

6. **Run the frontend application:**
   ```bash
   npm start
   ```

## Usage

### Smart Contract Functions

- **Register a Project:** Call the `registerProject` function with the project name, description, and website.
- **Vote on a Project:** Use the `upvote` or `downvote` functions to provide feedback.
- **Donate to a Project:** Use the `donate` function to send Ether to support the project.
- **Get Project Details:** Retrieve project information using the `getProject` function.

### Frontend

The frontend application allows users to interact with the smart contracts easily. Users can register projects, vote, and make donations through a user-friendly interface.

## Contributing

Scrollverse is an open-source project, and contributions are encouraged! Here’s how you can help:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add some feature"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

Thank you to all contributors and the open-source community for their support.

## Contact

For any inquiries, please reach out at [your-email@example.com].
```

