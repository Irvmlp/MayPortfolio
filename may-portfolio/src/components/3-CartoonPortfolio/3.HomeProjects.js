import React, { useState, useEffect } from 'react';
import CustomComponent from '../../components/3-CartoonPortfolio/3a.CaseStudyCard'; // Import CustomComponent
import ToolBtn from '../../components/3-CartoonPortfolio/3a.Tools';

const Projects = ({ title, subtitle, description, tools, image }) => {
  return (
    <div>
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
      />
    </div>
  );
};

export default Projects;