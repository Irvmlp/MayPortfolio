import React, { useState, useEffect } from 'react';
import ProjectsList from './4a.Dropdown';
import LlamaProject from './4b.LlamaProject';

const AllProjects = () => {
    const [openProject, setOpenProject] = useState(null);

    const handleProjectClick = (title) => {
        setOpenProject(openProject === title ? null : title);
    };

    const FirstProject = (
        <div className=''>
            <LlamaProject />
        </div>
    );
    useEffect(() => {
        setOpenProject("LlamaEdu");
    }, []);

    return (
        
        <div className="min-w-screen gap-5 px-14 flex flex-row overflow-y-scroll min-h-screen ">
            <ProjectsList
                className="w-1/5"
                title={"LlamaEdu"}
                date={"Summer 2024"}
                description={"UI/UX"}
                section={FirstProject}
                isOpen={openProject === "LlamaEdu"}
                onClick={() => handleProjectClick("LlamaEdu")}
            />
            <ProjectsList
                className="w-1/5"
                title={"Jamipainting"}
                date={"Spring 2024"}
                description={"Web"}
                isOpen={openProject === "Jamipainting"}
                onClick={() => handleProjectClick("Jamipainting")}
            />
            <ProjectsList
                className="w-/5"
                title={"Finturo"}
                date={"Fall 2023"}
                description={"UX/UI"}
                isOpen={openProject === "Finturo"}
                onClick={() => handleProjectClick("Finturo")}
            />
            <ProjectsList
                className="w-1/5"
                title={"JouneyGenie"}
                date={"Summer 2023"}
                description={"PM"}
                isOpen={openProject === "JouneyGenie"}
                onClick={() => handleProjectClick("JouneyGenie")}
            />
            <ProjectsList
                className="w-1/5"
                title={"Daisy"}
                date={"Spring 2023"}
                description={"bran"}
                isOpen={openProject === "Daisy"}
                onClick={() => handleProjectClick("Daisy")}
            />
        </div>
    );
};

export default AllProjects;
