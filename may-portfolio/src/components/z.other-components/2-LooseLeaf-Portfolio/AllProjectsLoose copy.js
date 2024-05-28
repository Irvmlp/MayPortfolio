import React, { useEffect, useState } from 'react';
import ProjectsList from './Dropdown';
import LlamaProject from '../../llamaEduProject';

const AllProjects = () => {
    const [openProject, setOpenProject] = useState(null);

    const handleProjectClick = (title) => {
        setOpenProject(openProject === title ? null : title);
    };

    const FirstProject = (
        <div className=''>
            <LlamaProject/>
        </div>
    );
    useEffect(() => {
        setOpenProject("LlamaEdu");
    }, []);

    return (
        
        <div className="gap-5 px-14 flex flex-row overflow-y-scroll min-h-screen ">
            <ProjectsList
                className="1/10 md:w-1/5"
                title={"LlamaEdu"}
                date={"Summer 2024"}
                description={"UI/UX"}
                section={FirstProject}
                isOpen={openProject === "LlamaEdu"}
                onClick={() => handleProjectClick("LlamaEdu")}
            />
            <ProjectsList
                className="1/10 md:w-1/5"
                title={"Jamipainting"}
                date={"Spring 2024"}
                description={"Web"}
                isOpen={openProject === "Jamipainting"}
                onClick={() => handleProjectClick("Jamipainting")}
            />
            <ProjectsList
                className="1/10 md:w-1/5"
                title={"Finturo"}
                date={"Fall 2023"}
                description={"UX/UI"}
                isOpen={openProject === "Finturo"}
                onClick={() => handleProjectClick("Finturo")}
            />
            <ProjectsList
                className="1/10 md:w-1/5"
                title={"JouneyGenie"}
                date={"Fall 2023"}
                description={"PM"}
                isOpen={openProject === "JouneyGenie"}
                onClick={() => handleProjectClick("JouneyGenie")}
            />
            <ProjectsList
                className="1/10 md:w-1/5"
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
