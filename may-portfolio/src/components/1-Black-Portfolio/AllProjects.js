import React, { useState } from 'react';
import LlamaProject from '../1-Black-Portfolio/llamaEduProject';
import FinturoProject from '../1-Black-Portfolio/FinturoProject';

const AllProjects = () => {
    const [openProject, setOpenProject] = useState("Project 1");

    const handleProjectClick = (title) => {
        setOpenProject(openProject === title ? null : title);
    };

    const ProjectSection = ({ title, children }) => (
        <div className={`project-section ${openProject === title ? 'open' : ''}`}>
            {openProject === title && children}
        </div>
    );

    return (
        <div className="Btn_container mt-40 px-16 items-center justify-center">
         <div className='flex flex-col px-2 font-bold text-l rounded-xl GtRegular text-white border-2 border-white w-full overflow-x-hidden md:w-full md:flex-row items-center justify-center '>
    <div className='flex flex-row w-full py-2 rounded-xl justify-center'>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 1' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 1')}>
            LlamaEdu.com
        </div>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 2' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 2')}>
            Finturo.com
        </div>
    </div>
    <div className='flex flex-row w-full py-2 rounded-xl justify-center'>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 3' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 3')}>
            Jamipainting.com
        </div>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 4' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 4')}>
            JounreyGenie.io
        </div> 
    </div>
    <div className='flex flex-row w-full py-2 rounded-xl justify-center'>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 5' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 5')}>
            PelosCoco.com
        </div>
        <div className={`button1 w-full text-center py-2 px-4 rounded-xl ${openProject !== 'Project 6' ? '' : 'bg-white text-black'}`} onClick={() => handleProjectClick('Project 6')}>
            Daisy Co
        </div>
    </div>


</div>

            <div className=''>
                <ProjectSection title="Project 1">
                    <LlamaProject />
                </ProjectSection>
                <ProjectSection title="Project 2">
                   <FinturoProject />
                </ProjectSection>
                <ProjectSection title="Project 3">
                   <LlamaProject />
                </ProjectSection>
                <ProjectSection title="Project 4">
                   <FinturoProject />
                </ProjectSection>
                <ProjectSection title="Project 5">
                   <LlamaProject />
                </ProjectSection>
                <ProjectSection title="Project 6">
                   <LlamaProject />
                </ProjectSection>
            </div>
        </div>
    );
};

export default AllProjects;
