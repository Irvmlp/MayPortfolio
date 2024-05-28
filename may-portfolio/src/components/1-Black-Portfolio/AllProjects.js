import React, { useState, useContext, useRef, Suspense, lazy } from 'react';
import ThemeContext from '../../ThemeContext';

import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary

import { ReactComponent as LeftArrowDark } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/leftArrowDark.svg';
import { ReactComponent as RightArrowDark } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/RightArrowDark.svg';
import { ReactComponent as LeftArrowLight } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/leftArrowLight.svg';
import { ReactComponent as RightArrowLight } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/svgs/RightArrowLight.svg';

const LlamaProject = lazy(() => import('../1-Black-Portfolio/projectFiles/llamaEduProject'));
const FinturoProject = lazy(() => import('../1-Black-Portfolio/projectFiles/FinturoProject'));
const JourneyProject = lazy(() => import('../1-Black-Portfolio/projectFiles/JourneyGenie'));
const JamiProject = lazy(() => import('../1-Black-Portfolio/projectFiles/JamiProject'));
const DaisyProject = lazy(() => import('../1-Black-Portfolio/projectFiles/DaisyProject'));
const PelosCocosProject = lazy(() => import('../1-Black-Portfolio/projectFiles/PelosCoco'));


const AllProjects = () => {
    const [activeProjectIndex, setActiveProjectIndex] = useState(0);
    const helloRef = useRef(null);

    const projects = [
        { title: 'LlamaEdu.com', component: <LlamaProject /> },
        { title: 'Finturo.com', component: <FinturoProject /> },
        { title: 'Jamipainting', component: <JamiProject /> },
        { title: 'Journeygenie', component: <JourneyProject /> },
        { title: 'PelosCoco', component: <PelosCocosProject /> },
        { title: 'Daisy', component: <DaisyProject /> },
    ];

    const scrollToTop = () => {
        console.log('Scroll to top button clicked');
        helloRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    const handleNextProject = () => {
        setActiveProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevProject = () => {
        setActiveProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    const handleNextProjectTop = () => {
        helloRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveProjectIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const handlePrevProjectTop = () => {
        helloRef.current.scrollIntoView({ behavior: 'smooth' });
        setActiveProjectIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div className="Btn_container mt-4 sm:mt-8 px-8 md:px-12 items-center justify-center">
            <div ref={helloRef} className='flex'> </div>
            <div className="flex px-2 font-bold text-l rounded-xl GtRegular bg-[#ECD8AE] dark:bg-[#2C363D] text-white border-2 dark:border-white border-black w-full overflow-x-hidden md:w-full flex-row items-center justify-center">
                <button className="button1 w-1/6 text-center px-2 py-3 rounded-xl flex justify-center items-center text-black dark:text-white" onClick={handlePrevProject}>
                    <LeftArrowDark className='hidden dark:block transition-colors duration-300' />
                    <LeftArrowLight className='block dark:hidden transition-colors duration-300' />
                </button>
                <div className="w-4/6 text-center px-2 py-3 rounded-xl bg-[#ECD8AE] dark:bg-[#2C363D] text-black dark:text-white">
                    {projects[activeProjectIndex].title}
                </div>
                <button className="button1 w-1/6 text-center px-2 py-3 rounded-xl flex justify-center items-center text-black dark:text-white" onClick={handleNextProject}>
                    <RightArrowLight className='hidden dark:block' />
                    <RightArrowDark className='block dark:hidden' />
                </button>
            </div> 

            <div className="project-section">
                <Suspense fallback={<Loader/>}>
                    {projects[activeProjectIndex].component}
                </Suspense>
                
            </div>

            <div className='flex items-center justify-center mt-6 h-4 mb-6'>
                <button onClick={scrollToTop} className='border-black border-2 bg-black dark:bg-white dark:border-white py-2 px-4 text-white dark:text-black rounded-full text-sm'>
                    Scroll to top
                </button>
            </div>

            <div className="flex px-2 font-bold text-l mb-12 rounded-xl GtRegular bg-[#ECD8AE] dark:bg-[#2C363D] text-white border-2 dark:border-white border-black w-full overflow-x-hidden md:w-full flex-row items-center justify-center">
                <button className="button1 w-1/6 text-center px-2 py-3 rounded-xl flex justify-center items-center text-black dark:text-white" onClick={handlePrevProjectTop}>
                    <LeftArrowDark className='hidden dark:block' />
                    <LeftArrowLight className='block dark:hidden' />
                </button>
                <div className="w-4/6 text-center px-2 py-3 rounded-xl bg-[#ECD8AE] dark:bg-[#2C363D] text-black dark:text-white">
                    {projects[activeProjectIndex].title}
                </div>
                <button className="button1 w-1/6 text-center px-2 py-3 rounded-xl flex justify-center items-center text-black dark:text-white" onClick={handleNextProjectTop}>
                    <RightArrowLight className='hidden dark:block' />
                    <RightArrowDark className='block dark:hidden' />
                </button>
            </div>
        </div>
    );
};

export default AllProjects;
