import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import Project from '../../models/Projects'
import { createHash } from 'crypto';



const MONGODB_URI = process.env.MONGODB_URI;

const hashUUID = (uuid) => {
    return createHash('sha256').update(uuid).digest('hex');

};

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export async function POST(request) {
    await connectToDatabase();
    
    const { name, shortDescription,fullDescription, website, creator, creatorName, categories } = await request.json();
    console.log(name,shortDescription, fullDescription, website, creator, creatorName, categories);  
    const hashedProjectId = hashUUID(uuidv4()); // Hash the UUID
    const projectId = parseInt(hashedProjectId.slice(0, 16), 16);
    const newProject = new Project({
        id: projectId,
        name,
        shortDescription,
        fullDescription,
        website,
        creator, 
        creatorName,
        categories
    });

    await newProject.save();

    return new Response(JSON.stringify(newProject), { status: 201 });
}

export async function GET() {
    await connectToDatabase();
    try {
        const projects = await Project.find({});
        return new Response(JSON.stringify(projects), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to fetch project' + error }), { status: 500 });
    }
    
}

export async function PUT(request) {
    await connectToDatabase();
    
    const { projectId } = await request.json();
    
    try {
        const project = await Project.findOneAndUpdate(
            { id: projectId },
            { $inc: { upvotes: 1 } },
            { new: true } // Return the updated document
        );

        if (!project) {
            return new Response(JSON.stringify({ error: 'Project not found' }), { status: 404 });
        }

        return new Response(JSON.stringify(project), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to upvote project' + error }), { status: 500 });
    }
}