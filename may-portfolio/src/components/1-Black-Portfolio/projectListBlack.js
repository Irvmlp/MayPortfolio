import React, { useState, useEffect } from 'react';
import CustomComponent from '../1-Black-Portfolio/CaseStudyCardBlack'; // Import CustomComponent
import ToolBtn from '../1-Black-Portfolio/toolBtnBlack';
import Case1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/case1.png';
import Case2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/case2.png';
import Case3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/case3.png';

import Tool from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Tool.js';
import { ReactComponent as HtmlIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/1.htmlIcon.svg';
import { ReactComponent as CSSIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/2.cssIcon.svg';
import { ReactComponent as JavaScriptIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/3.javascriptIcon.svg';
import { ReactComponent as ReactIcon } from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/svgs/toolsSvgs/4.reactIcon.svg';



const Projects = ({ title, subtitle, description, tools, image }) => {

  return (
    <div>
      <CustomComponent
        link="https://Llamaedu.com"
        title="Llamaedu.com"
        subtitle="Product design, platform design, development"
        description=" LlamaEdu represents a pioneering blend of lean management principles, literary insights, and educator feedback, 
        revolutionizing classroom organization and efficiency.I led user experience design, front-end development, and branding initiatives, 
        crafting an immersive educational tool that optimizes lesson planning with AI."
        tools={[<Tool icon={<HtmlIcon />} text="Html" /> , 
                <Tool icon={<CSSIcon />} text="CSS" />, 
                <Tool icon={<JavaScriptIcon />} text="Javascript" />,
                <Tool icon={<ReactIcon />} text="React" />
              ]}
        image={Case1}
      />
      {/* Second project division */}
      <CustomComponent
        link="https://Jamipainting.com"
        title="Jamipatinting.com"
        subtitle="Web development, Branding, Marketing"
        description="Jamipainting is a small painting company in Arizona. With my branding services, new website to showcase their work, handle 
        estimate requests, marketing efforts they were able to grow in clientale in the last few months. "
        tools={[<Tool icon={<HtmlIcon />} text="Html" /> , 
                <Tool icon={<CSSIcon />} text="CSS" />, 
                <Tool icon={<JavaScriptIcon />} text="Javascript" />,
                <Tool icon={<ReactIcon />} text="React" />
              ]}
        image={Case3}
      />
      {/* third project division */}
      <CustomComponent
        link="https://Journeygenie.com"
        title="Journeygenie.com"
        subtitle="Product design, product management"
        description="Jamipainting is a small painting company in Arizona. With my branding services, new website to showcase their work, handle 
        estimate requests, marketing efforts they were able to grow in clientale in the last few months. "
        tools={[<Tool icon={<HtmlIcon />} text="Html" /> , 
                <Tool icon={<CSSIcon />} text="CSS" />, 
                <Tool icon={<JavaScriptIcon />} text="Javascript" />,
                <Tool icon={<ReactIcon />} text="React" />
              ]}
        image={Case2}
      />
    </div>
  );
};

export default Projects;