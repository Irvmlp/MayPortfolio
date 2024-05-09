import React, { useState } from 'react';
import LlamaProject from '../llamaEduProject';
import FinturoProject from '../FinturoProject';

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
        <div className="Btn_container mt-40 px-16 justify-center">
            <div className='flex flex-col text-2xl w-5/6 overflow-x-hidden md:w-full md:flex-row justify-center '>
               <div className='flex flex-row w-full'>
                 <div className={`button1 w-full ${openProject !== 'Project 1' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 1')}>
                    LlamaEdu.com
                </div>
                <div className={`button1 w-full ${openProject !== 'Project 2' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 2')}>
                    Finturo.com
                </div>
                
               </div>
               <div className='flex flex-row gap-4 w-full'>
                 <div className={`button1 w-full ${openProject !== 'Project 3' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 3')}>
                    Jamipainting.com
                </div>
                <div className={`button1 w-full ${openProject !== 'Project 4' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 4')}>
                    JounreyGenie.io
                </div> 
               
               </div>
               <div className='flex flex-row gap-4 w-full'>
                <div className={`button1 w-full ${openProject !== 'Project 5' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 5')}>
                    PelosCoco.com
                </div>
                <div className={`button1 w-full ${openProject !== 'Project 6' ? '' : 'line-through'}`} onClick={() => handleProjectClick('Project 6')}>
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
