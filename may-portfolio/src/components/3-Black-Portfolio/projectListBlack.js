import React, { useState, useEffect } from 'react';
import CustomComponent from '../3-Black-Portfolio/CaseStudyCardBlack'; // Import CustomComponent
import ToolBtn from '../3-Black-Portfolio/toolBtnBlack';

const Projects = ({ title, subtitle, description, tools, image, backgroundColor }) => {
  const [scrollEnabled, setScrollEnabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // Check if the user has scrolled to the bottom of the page
      if (windowHeight + scrollTop >= documentHeight) {
        setScrollEnabled(true);
      } else {
        setScrollEnabled(false);
      }
    };
 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={scrollEnabled ? '' : 'overflow-hidden'}>
      <CustomComponent
        title="Llamaedu.com"
        subtitle="Branding, Web, UI/UX"
        description="This project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do things..."
        tools={[
          <ToolBtn tooltitle="Figma" imgSrc="" />,
          <ToolBtn tooltitle="Figma" imgSrc="" />,
          <ToolBtn tooltitle="Figma" imgSrc="" />
        ]}
        image={image}
        backgroundColor="bg-[#FDFF00]"
      />
      {/* second project division */}
      <CustomComponent
        title="JamiPainting.com"
        subtitle="Branding, Web, UI/UX"
        description="This project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do things..."
        tools={[
          <ToolBtn tooltitle="JAVA" imgSrc="" />,
          <ToolBtn tooltitle="MySpql" imgSrc="" />,
          <ToolBtn tooltitle="Asana" imgSrc="" />
        ]}
        image={image}
        backgroundColor="bg-[#00C5FF]"
      />
      {/* third project division */}
      <CustomComponent
        title="Finturo.com"
        subtitle="Front-End, Web, UI/UX"
        description="This project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do things..."
        tools={[
          <ToolBtn tooltitle="JAVA" imgSrc="" />,
          <ToolBtn tooltitle="MySpql" imgSrc="" />,
          <ToolBtn tooltitle="Asana" imgSrc="" />
        ]}
        image={image}
        backgroundColor="bg-[#00FF04]"
      />
    </div>
  );
};

export default Projects;
