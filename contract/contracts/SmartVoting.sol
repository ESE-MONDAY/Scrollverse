// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProjectVoting {
    struct Project {
        string name;
        string description;
        string website;
        uint256 upvotes;
        uint256 downvotes;
        address payable creator; // Wallet address of the project creator
        uint256 totalDonations; // Total amount donated to the project
        bool exists;
    }

    mapping(uint256 => Project) public projects;
    mapping(address => mapping(uint256 => bool)) public hasVoted; // Tracks user votes per project
    mapping(string => bool) public projectNameExists; // Tracks existing project names
    uint256 public projectCount;

    event ProjectRegistered(uint256 indexed projectId, string name, address indexed creator);
    event Voted(uint256 indexed projectId, address indexed voter, bool isUpvote);
    event DonationReceived(uint256 indexed projectId, address indexed donor, uint256 amount);

    // Register a new project
    function registerProject(string memory _name, string memory _description, string memory _website) public returns (uint256) {
        require(!projectNameExists[_name], "Project name already exists."); // Check for unique project name

        projectCount++;
        projects[projectCount] = Project({
            name: _name,
            description: _description,
            website: _website,
            upvotes: 0,
            downvotes: 0,
            creator: payable(msg.sender), // Set the creator to the sender's address
            totalDonations: 0, // Initialize total donations to 0
            exists: true
        });

        projectNameExists[_name] = true; // Mark the name as used

        emit ProjectRegistered(projectCount, _name, msg.sender);
        return projectCount; // Return the newly registered project ID
    }

    // Upvote a project
    function upvote(uint256 _projectId) public {
        require(projects[_projectId].exists, "Project does not exist.");
        require(!hasVoted[msg.sender][_projectId], "You have already voted on this project.");

        hasVoted[msg.sender][_projectId] = true;
        projects[_projectId].upvotes++;

        emit Voted(_projectId, msg.sender, true);
    }

    // Downvote a project
    function downvote(uint256 _projectId) public {
        require(projects[_projectId].exists, "Project does not exist.");
        require(!hasVoted[msg.sender][_projectId], "You have already voted on this project.");

        hasVoted[msg.sender][_projectId] = true;
        projects[_projectId].downvotes++;

        emit Voted(_projectId, msg.sender, false);
    }

    // Donate to a project's creator
    function donate(uint256 _projectId) public payable {
        require(projects[_projectId].exists, "Project does not exist.");
        require(msg.value > 0, "Donation must be greater than zero.");

        projects[_projectId].creator.transfer(msg.value); // Transfer the donation to the creator
        projects[_projectId].totalDonations += msg.value; // Update total donations

        emit DonationReceived(_projectId, msg.sender, msg.value);
    }

    // Get project details
    function getProject(uint256 _projectId) public view returns (
        string memory name,
        string memory description,
        string memory website,
        uint256 upvotes,
        uint256 downvotes,
        uint256 totalDonations,
        address creator
    ) {
        require(projects[_projectId].exists, "Project does not exist.");
        Project memory project = projects[_projectId];
        return (project.name, project.description, project.website, project.upvotes, project.downvotes, project.totalDonations, project.creator);
    }
}
