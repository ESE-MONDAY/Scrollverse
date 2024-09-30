




// export async function POST(request) {
//     const { name, description, website } = await request.json();
//     const newProject = {
//         id: uuidv4(),
//         name,
//         description,
//         website,
//     };
//     projects.push(newProject);
//     return new Response(JSON.stringify(newProject), { status: 201 });
// }

// export async function GET() {
//     return new Response(JSON.stringify(projects), { status: 200 });
// }





import { v4 as uuidv4 } from 'uuid';
import mongoose from 'mongoose';
import Project from '../../models/Projects'

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
    if (mongoose.connection.readyState === 1) return;

    await mongoose.connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
}

export async function POST(request) {
    await connectToDatabase();
    
    const { name, description, website, creator } = await request.json();
    
    const newProject = new Project({
        id: uuidv4(),
        name,
        description,
        website,
        creator, 
    });

    await newProject.save();

    return new Response(JSON.stringify(newProject), { status: 201 });
}

export async function GET() {
    await connectToDatabase();
    
    const projects = await Project.find({});
    return new Response(JSON.stringify(projects), { status: 200 });
}
