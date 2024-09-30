// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract ProjectVoting {
    struct Project {
        uint256 projectId; // Unique project ID
        uint8 upvotes; // Number of upvotes
        uint8 downvotes; // Number of downvotes
        address payable creator; // Creator's address
        uint256 totalDonations; // Total donations received
        bool exists; // Existence flag
    }

    mapping(uint256 => Project) public projects;
    mapping(address => mapping(uint256 => bool)) public hasVoted; // Tracks user votes per project
    uint256 public projectCount;

    event ProjectRegistered(uint256 indexed projectId, address indexed creator);
    event Voted(uint256 indexed projectId, address indexed voter, bool isUpvote);
    event DonationReceived(uint256 indexed projectId, address indexed donor, uint256 amount);

    // Register a project by its ID and creator
    function registerProject(uint256 _projectId) public returns (uint256) {
        require(!projects[_projectId].exists, "Project already registered.");

        projects[_projectId] = Project({
            projectId: _projectId,
            upvotes: 0,
            downvotes: 0,
            creator: payable(msg.sender),
            totalDonations: 0,
            exists: true
        });

        emit ProjectRegistered(_projectId, msg.sender);
        return _projectId; // Return the registered project ID
    }

    function vote(uint256 _projectId, bool isUpvote) public {
        require(projects[_projectId].exists, "Project does not exist.");
        require(!hasVoted[msg.sender][_projectId], "You have already voted on this project.");

        hasVoted[msg.sender][_projectId] = true;
        if (isUpvote) {
            projects[_projectId].upvotes++;
        } else {
            projects[_projectId].downvotes++;
        }

        emit Voted(_projectId, msg.sender, isUpvote);
    }

    function donate(uint256 _projectId) public payable {
        require(projects[_projectId].exists, "Project does not exist.");
        require(msg.value > 0, "Donation must be greater than zero.");

        projects[_projectId].creator.transfer(msg.value);
        projects[_projectId].totalDonations += msg.value;

        emit DonationReceived(_projectId, msg.sender, msg.value);
    }
}
