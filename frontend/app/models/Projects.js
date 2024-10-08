// models/Project.js
import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    shortDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    website: { type: String, required: true },
    projectImg: { type: String },
    upvotes: { type: Number, default: 0 }, // Number of upvotes
    downvotes: { type: Number, default: 0 }, // Number of downvotes
    creator: { type: String, required: true }, // Creator's address (as a string)
    totalDonations: { type: Number, default: 0 }, // Total donations received
    creatorName: { type: String, required: true },
    exists: { type: Boolean, default: true }, // Existence flag
    categories: { type: [String], default: [] } // Array of categories
});


const Project = mongoose.models.Project || mongoose.model('Project', ProjectSchema);

export default Project;
