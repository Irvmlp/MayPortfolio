import React from 'react';
import CustomComponent from './CaseStudyCard'; // Import CustomComponent
import ToolBtn from './toolBtn';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/newnew.css';

const Projects = ({ title, subtitle, description, tools, image, backgroundColor }) => {
  return (
    <div className="">
      <CustomComponent
        title="Llamaedu.com"
        subtitle="Branding, Web, UI/UX"
        description="This project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do thingsThis project was for teachers that need to do things..."
        tools={[
          <ToolBtn tooltitle="Figma" imgSrc="" />,
          <ToolBtn tooltitle="Figma" imgSrc="" />,
          <ToolBtn tooltitle="Figma" imgSrc="" />
        ]} // Pass ToolBtn components as an array
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
        ]} // Pass ToolBtn components as an array
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
        ]} // Pass ToolBtn components as an array
        image={image}
        backgroundColor="bg-[#00FF04]"
      />
    </div>
  );
};

export default Projects;
