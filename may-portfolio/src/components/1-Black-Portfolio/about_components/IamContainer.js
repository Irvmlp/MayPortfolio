import React, { Suspense, lazy } from 'react';


import Tool from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Tool.js';
import { ReactComponent as HtmlIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/1.htmlIcon.svg';
import { ReactComponent as CSSIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/2.cssIcon.svg';
import { ReactComponent as JavaScriptIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/3.javascriptIcon.svg';
import { ReactComponent as ReactIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/4.reactIcon.svg';
import { ReactComponent as FigmaIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/5.figmaIcon.svg';
import { ReactComponent as GitHubIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/6.Github.svg';
import { ReactComponent as NodeIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/7.nodeIcon.svg';
import { ReactComponent as TailwindIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/8.tailwindIcon.svg';
import { ReactComponent as AsanaIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/9.asanaIcon.svg';
import { ReactComponent as PhotoIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/10.photoShopIcon.svg';




const Name = () => {
  return (
    <div className='flex w-full px-14 md:px-24 flex-col'>
    
      <div className="flex justify-center  md:justify-start">

      <div className='flex h-full flex-col  text-black dark:text-white'>
        <div>       
        <h3 className='GtRegularBold text-3xl'>I am, </h3>
        <h3 className='py-1 mt-4 GtRegular font-semibold text-xl'>A natural builder who carries around a notebook around at all times to make sure
        I could write down any idea I have. I have applying the design process my entire life, working with my hands, and incorporating
        and a perfectionist, so getting a degree in product design engineering at Stanford Univeristy only made sense. </h3>

          </div>

          <h3 className='mt-12 GtRegular text-2xl'>I'm good with: </h3>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-4 gap-2 text-xs'>
     
          <Suspense fallback={<div>Loading...</div>}>
       <Tool icon={<HtmlIcon />} text="Html" />
       <Tool icon={<CSSIcon />} text="CSS" />
       <Tool icon={<JavaScriptIcon />} text="Javascript" />
       <Tool icon={<ReactIcon/>} text="React" />
       <Tool icon={<FigmaIcon />} text="Figma" /> 
       <Tool icon={<GitHubIcon />} text="Github" />
       <Tool icon={<NodeIcon />} text="Node.js" />
       <Tool icon={<TailwindIcon/>} text="Tailwind" />
       <Tool icon={<AsanaIcon />} text="Asana" />
       <Tool icon={<PhotoIcon />} text="Photoshop" />
          
       </Suspense>

       </div>
       </div>

      </div>
    </div>
  );
};

export default Name;
