import React, { useState } from 'react';


interface FormData {
    name: string;
    shortDescription: string;
    fullDescription: string;
    website: string;
    creatorName: string;
    categories?: string[];
}



interface FormProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    registerProject: (projectId: number) => Promise<any>;
    account: string; 
    closeModal: () => void;
    fetchProject: () => void;
}

const Form: React.FC<FormProps> = ({ registerProject, account, closeModal, fetchProject,  }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        shortDescription: '',
        fullDescription: '',
        website: '',
        creatorName: '',
        categories: [],
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: name === "categories" ? value.split(',').map(cat => cat.trim()) : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true); // Set loading to true
        await handleRegisterProject();
        setLoading(false); 
        fetchProject(); 
        closeModal(); 
    };

    const handleRegisterProject = async () => {
        const response = await fetch('/api/projects', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ 
                name: formData.name, 
                shortDescription: formData.shortDescription, 
                fullDescription: formData.fullDescription, 
                website: formData.website, 
                creator: account, 
                creatorName: formData.creatorName,
                categories: formData.categories
            }),
        });
        console.log({ 
            name: formData.name, 
            description: formData.shortDescription, 
            website: formData.website, 
            creator: account, 
            creatorName: formData.creatorName 
        })

        const data = await response.json();

        if (data.id) {
            try {
                const tx = await registerProject(data.id);
                const receipt = await tx.wait(); 

                if (receipt.status === 1) {
                    console.log('Project registered on the blockchain:', receipt);
                    const event = receipt.events?.find((e: { event: string }) => e.event === 'ProjectRegistered');
                    if (event) {
                        console.log('Project registration confirmed:', event.args);
                    }
                } else {
                    console.error('Transaction failed:', receipt);
                }
                console.log('Project registered on the blockchain successfully!');
            } catch (error) {
                console.error('Error registering project on the blockchain:', error);
            }
        } else {
            console.error('No project ID received from the database.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-[400px] mx-auto p-4'> 
            <h2 className='text-xl font-semibold'>Add a new Project</h2>
        
            <label className='text-sm flex flex-col gap-1'>
                Project Name:
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='p-1 border-[1px] border-scroll-black rounded-sm'
                    required
                />
            </label>
            <label className='text-sm flex flex-col gap-1'>
                Creator Name:
                <input
                    type="text"
                    name="creatorName"
                    value={formData.creatorName}
                    onChange={handleChange}
                    className='p-1 border-[1px] border-scroll-black rounded-sm'
                    required
                />
            </label>
            <label className='text-sm flex flex-col gap-1'>
                Short Description:
                <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleChange}
                    className='p-2 border-[1px] border-scroll-black rounded-sm'
                    required
                />
            </label>
            <label className='text-sm flex flex-col gap-1'>
                Full Description:
                <textarea
                    name="fullDescription"
                    value={formData.fullDescription}
                    onChange={handleChange}
                    className='p-2 border-[1px] border-scroll-black rounded-sm'
                    required
                />
            </label>
            <label className='text-sm flex flex-col gap-1'>
                Website:
                <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className='p-1 border-[1px] border-scroll-black rounded-sm'
                    required
                />
            </label>
            <label className='text-sm flex flex-col gap-1'>
                Categories (comma-separated):
                <input
                    type="text"
                    name="categories"
                    value={formData.categories}
                    onChange={handleChange}
                    className='p-1 border-[1px] border-scroll-black rounded-sm'
                    placeholder="e.g. Art, Technology"
                />
            </label>
            <button type="submit" disabled={loading} className='bg-scroll-orange p-2 rounded-md text-white disabled:cursor-not-allowed hover:shadow-md my-4'>
                {loading ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
};

export default Form;
