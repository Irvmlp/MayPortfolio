import React, { Suspense, lazy } from 'react';
import Loader from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/loader.js'; // Adjust the path as necessary
import Mockup1 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami1.png';
import Mockup1B from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamibefore2.png';
import Mockup1C from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami22.png';
import Mockup3 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami3.png';
import Mockup4 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami4.png';
import Mockup5 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami5.png';
import Mockup6 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/projectsA.png';
import Mockup7 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/projectsC.png';

import Mockup8 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire1b.png';
import Mockup9 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire2b.png';
import Mockup10 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire3b.png';
import Mockup11 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire4b.png';
import Mockup8dark from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire1.png';
import Mockup9dark from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire2.png';
import Mockup10dark from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire3.png';
import Mockup11dark from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiwire4.png';


import Mockup12 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami3a.png';
import Mockup13 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami3b.png';
import ShirtA from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiShirt.png';
import ShirtB from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamishirt2.png';
import ShirtC from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamihoodie.png';
import heatmap from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiheatmap1.png';
import jamiseo from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiSEO.png';
import jamiseo2 from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jamiSEO2.png';

import estimateA from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami_estimate1.png';
import estimateB from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami_estimate2.png';
import estimateC from '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/gallery/3.jami_pics/jami_estimate3.png';

const LazyProgressDark = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JamiSvgs/ProgressDarkLazy.js'));
const LazyProgressLight = lazy(() => import('/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/components/1-Black-Portfolio/Rsvgs/JamiSvgs/ProgressLightLazy.js'));


const JamiProject = () => {

  return (
    
    <div className="h-full min-w-full font-inter">

    <Suspense fallback={<Loader/>}>
            <div className='w-full h-8 dark:flex hidden'>
              <LazyProgressDark />
            </div>
            <div className='w-full h-8 dark:hidden flex'>
              <LazyProgressLight />
            </div>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-0 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-2/3 md:w-7/10 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Jamipainting</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-start items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>
            
Responsible for esigning and developing this website to ensure seamless user experience, utilizing modern web technologies and efficient version control practices.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/3 md:w-3/10 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Freelance | 2024</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white'>Utilized HTML, CSS, JavaScript, React.js, Git and GitHub</p>
        </div>    </div>   </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
     <section className='mt-4  border-2 rounded-xl border-black dark:border-white items-center justify-center flex  w-full'>
    
          <div className='px-4 sm:px-6 md:px-10 w-full lg:w-5/6 h-auto'>
         <img src={Mockup1} loading='lazy' className="mr-4 mt-8 w-full h-auto" />         </div>     

          </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full sm:w-1/2 h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Client Requirements</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl w-full'>
            <p className='GtRegular text-center sm:text-left text-black dark:text-white'>
            Jami Painting sought a modern and visually appealing website to showcase their services and portfolio effectively. 
            Emphasizing intuitive navigation and user engagement, the client prioritized a seamless user experience across 
            various devices. Additionally, they expressed the need for integration with SEO best practices to enhance online 
            visibility and attract potential clients.
            </p>        </div>    </div>
    <div className='flex mt-8 sm:mt-0 flex-col w-full sm:w-1/2 h-full items-start justify-start sm:mr-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-end items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Impact and Results</h2>
        </div>
        {/* Description container */}
        <div className='px-4 lg:mt-4 flex justify-center sm:justify-end items-center text-lg sm:text-xl  w-full'>
            <p className='GtRegular text-center sm:text-right text-black dark:text-white'>Following the website's launch, 
            Jami Painting experienced a significant increase in online inquiries and customer engagement. The revamped digital 
            presence not only elevated their brand image but also facilitated better communication with clients, resulting in 
            improved customer satisfaction and a measurable boost in business inquiries and conversions.</p>
        </div>    </div>   </section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    


 <section className='flex  text-black dark:text-white  flex-col sm:flex-row py-8 mt-4 bg-transparent  rounded-xl border-2 dark:border-white border-black h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4 '>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white '>The Improvements</h2>
        </div>

        <div className='flex flex-col md:flex-row px-8 w-full h-auto'>
        <div className='flex flex-col w-full h-auto'>
        <img src={Mockup1C} loading='lazy' className="mr-4 mt-8 px-8 w-full h-auto" />
        <div className='flex md:mt-0 mt-4 items-center justify-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-4 text-black dark:text-white'>Modernized Aesthetic </p>
        </div> 
        </div>
        <div className='flex flex-col w-full h-auto'>
        <img src={Mockup1B} loading='lazy' className="mr-4 mt-8 px-8  w-full  h-auto " />
        <div className='flex md:mt-0 mt-4 items-center justify-center text-black text-lg '>
            <p className='GtRegular flex flex-row px-8 mt-2 md:px-4 text-black dark:text-white'>Enhanced Estimate Form</p>
        </div> 
        </div>  </div> 
 </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Wireframe</h2>
        </div>
        {/* Description container */}
        <div className='mt-8 items-center justify-center flex flex-col md:flex-col gap-8 w-full px-14'>
        <div className='flex flex-col md:flex-row'>
        <img src={Mockup8} loading='lazy' className="w-full md:w-1/2 h-auto dark:hidden flex" />
        <img src={Mockup8dark} loading='lazy' className="w-full md:w-1/2 h-auto hidden dark:flex " />
        <img src={Mockup9} loading='lazy' className="w-full  md:w-1/2 h-auto dark:hidden flex" />
        <img src={Mockup9dark} loading='lazy' className="w-full md:w-1/2 h-auto hidden dark:flex" />
        </div>
        <div className='flex -mt-8 flex-col md:flex-row'>
        <img src={Mockup10} loading='lazy' className="w-full md:w-1/2 h-auto dark:hidden flex" />
        <img src={Mockup10dark} loading='lazy' className="w-full md:w-1/2 h-auto hidden dark:flex " />
        <img src={Mockup11} loading='lazy' className="w-full  md:w-1/2 h-auto dark:hidden flex" />
        <img src={Mockup11dark} loading='lazy' className="w-full md:w-1/2 h-auto hidden dark:flex" />
        </div>
     
       
     </div>
</div>
    </section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
<section className='flex flex-col md:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
  <div className='flex w-full md:w-1/2 h-1/2 md:h-full md:py-0 py-8 flex-col'>

    <div className='px-8 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
      <h2 className='GtRegularBold text-black dark:text-white'>CTA Optimization</h2>
    </div>

    <div className='flex flex-col mt-0'>
      <div className='flex md:mt-0 mt-2 sm:mt-2 lg:mt-2 items-center sm:items-start text-black text-lg'>
        <p className='GtRegular flex flex-row px-8 mt-2  text-center sm:text-left text-black dark:text-white'>
        Revamped call-to-action buttons to enhance user engagement and drive conversions leading to higher conversion rates. 
         user satisfaction.
        </p>
      </div>
      <img src={heatmap} loading='lazy' className='mt-6 sm:mt-10 md:mt-12 lg:mt-4 px-8 w-full h-auto' />
    </div>
  </div>
  <div className='flex w-full md:w-1/2 mt-4 sm:mt-0 items-center flex-col h-auto '>
  <div className='flex justify-center md:justify-end items-center text-xl  sm:text-xl md:text-2xl lg:text-3xl w-full'>
    <h2 className='px-2 sm:px-8 GtRegularBold text-black dark:text-white'>SEO Optimization</h2>
  </div>
  <div className='mt-2 sm:mt-4 flex flex-col text-black dark:text-white text-lg'>
    <h1 className='GtRegularBold text-center md:text-right text-gray-800 dark:text-gray-300 px-8 mt-2 '>
      Title Tag & Meta Description
    </h1>
    <p className='GtRegular flex flex-row md:justify-end text-center md:text-right px-8 '>
      Compelling key word rich titles + concise informative descriptions
    </p>
    <img src={jamiseo} loading='lazy' className='mt-0 md:mt-2 px-4 sm:px-8 w-full flex justify-center items-center h-auto' />
  </div>
  
  
  <div className='mt-8 flex flex-col text-black dark:text-white text-lg'>
    <h1 className='GtRegularBold text-center md:text-right text-gray-800 dark:text-gray-300 px-8 mt-2 '>
      Consistent Alt Text
    </h1>
    <p className='GtRegular flex flex-row md:justify-end text-center md:text-right px-8 '>
    Improved accessibility on the site along with SEO benefits benefits
    </p>
    <img src={jamiseo2} loading='lazy' className='mt-0 md:mt-2  px-4 sm:px-8 w-full flex justify-center items-center h-auto' />
  </div>
</div>
</section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 <section className='flex flex-col py-8 border-2 border-black dark:border-white mt-4 rounded-xl  h-full w-full mx-auto'>
 <div className='px-8 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Reactive Pages</h2>
        </div>
    <div className='mt-0 items-center justify-center flex flex-col xl:flex-row  w-full px-16'>
        
        <div className='flex flex-col items-center justify-center sm:flex-row mt-8 gap-4 w-full xl:w-1/2'>
            <img src={Mockup3} loading="lazy" className="h-auto sm:h-64 md:h-96 xl:h-80" />
            <img src={Mockup4} loading="lazy" className="h-auto sm:h-64 md:h-96 xl:h-80" />
        </div>
        <div className='flex flex-col items-center justify-center sm:flex-row mt-8 gap-4 w-full xl:w-1/2'>
            <img src={Mockup12} loading="lazy" className="h-auto sm:h-64 md:h-96 xl:h-80" />
            <img src={Mockup13} loading="lazy" className="h-auto sm:h-64 md:h-96 xl:h-80" />
        </div>   
     </div>
     <div className='flex md:mt-0 mt-8 items-center text-black dark:text-white  text-lg'>
    <p className='GtRegular justify-end text-center flex flex-row px-8 mt-2 md:px-16 '> Implemented responsive design techniques 
    to ensure seamless rendering and optimal user experience across various screen sizes and devices. </p>
</div> 
</section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
<section className='flex flex-col py-8 border-2 border-black dark:border-white mt-4 rounded-xl  h-full w-full mx-auto'>
    <div className='px-8  flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Updated Estimated Form</h2>
        </div>
    <div className='mt-4 sm:mt-0 items-center justify-center flex w-full'>
    <div className='sm:mt-0 items-center flex-col md:flex-row justify-center text-center gap-0 flex mt-2 w-full px-12'>
        <img src={estimateA} loading='lazy' className="mt-4 w-full md:w-1/3 h-auto " />
        <img src={estimateB} loading='lazy' className=" mt-4 w-full md:w-1/3 h-auto " />
        <img src={estimateC} loading='lazy' className=" mt-4 w-full md:w-1/3 h-auto " />
     </div>
     </div>
     <div className='flex  md:mt-0 mt-8 items-center text-black dark:text-white  text-lg'>
    <p className='GtRegular justify-end text-center flex flex-row px-8 mt-2 md:px-16 '> Crafted an intuitive and user-friendly estimate form, streamlining the inquiry process for seamless submission and efficient processing of client requests. </p>
</div> 
</section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}  
 <section className='flex flex-col py-8 border-2 border-black dark:border-white mt-4 rounded-xl  h-full w-full mx-auto'>
 <div className='px-4 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Improved Project Showcasing</h2>
        </div>  
    <div className='md:mt-0 px-16 mt-0 flex-col md:flex-row flex items-center justify-center w-full'>
    <div className='flex justify-center w-full md:w-1/2'>
    <img src={Mockup5} loading='lazy' className="mt-8 w-full h-auto" />
</div>
     <div className='flex flex-col sm:flex-rol justify-center items-center w-full mt-2 md:w-1/2  gap-4'>
        <img src={Mockup6} loading='lazy' className="w-full md:w-4/5 h-auto " />
         <img src={Mockup7} loading='lazy' className=" w-full md:w-4/5  h-auto " />
        </div>
        </div>
        <div className='flex  md:mt-0 mt-8 items-center text-black dark:text-white text-lg'>
    <p className='GtRegular justify-end text-center flex flex-row px-8 mt-2 md:px-16 '> Developed a dynamic project
     showcase featuring a sophisticated filter system, empowering clients to easily browse and filter between commercial, 
     residential, interior, and exterior projects, ensuring a tailored browsing experience that meets their specific needs and preferences.</p>
</div> 
</section>
{/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/} 
<section className='flex flex-col py-8 border-2 border-black dark:border-white mt-4 rounded-xl  h-full w-full mx-auto'>
 <div className='px-8 flex justify-center sm:justify-start items-center text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold text-black dark:text-white'>Other Branding Elements</h2>
        </div>  
        <div className='mt-0 items-center justify-center flex  w-full'>
    <div className='mt-0 items-center flex flex-col md:flex-row justify-center gap-0 flex  w-full px-12'>
        <img src={ShirtA} loading='lazy' className="mt-8 w-full md:w-1/3 h-auto " />
        <img src={ShirtB} loading='lazy' className=" mt-8 w-full md:w-1/3 h-auto " />
        <img src={ShirtC} loading='lazy' className=" mt-8 w-full md:w-1/3 h-auto " />
     </div>
     </div>
        <div className='flex md:mt-0 mt-8 items-center text-black dark:text-white text-lg'>
    <p className='GtRegular justify-end text-center flex flex-row px-8 mt-2 md:px-16 '> Designed custom-branded apparel, 
    including t-shirts and hoodies, to extend the company's visual identity beyond the digital realm. These branded items 
    serve as powerful marketing tools, enhancing brand recognition and fostering a sense of unity among employees and clients alike.</p>
</div> 
</section>

 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    
 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Maintence</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-800 dark:text-gray-300'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full text-black dark:text-white'>
            <p className='GtRegular text-center sm:text-left'>Implemented regular maintenance protocols to ensure the website's 
            continued functionality and performance. This includes software updates, security patches, and content management to 
            keep the site current and optimized for user experience. </p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

 <section className='flex flex-col sm:flex-row py-8 mt-4 rounded-xl border-2 border-black dark:border-white h-full w-full mx-auto'>
    {/* Container for text content */}
    <div className='flex flex-col w-full h-full items-start justify-start sm:ml-4'>
        {/* Title container */}
        <div className='px-4 flex justify-center sm:justify-start items-center sm:flex-row flex-col text-xl sm:text-xl md:text-2xl lg:text-3xl w-full'>
            <h2 className='GtRegularBold w-full sm:w-1/3 text-center sm:text-left text-black dark:text-white'>Reflection</h2>
            <h2 className='GtRegularBold w-full sm:w-2/3 text-center sm:text-right text-gray-800 dark:text-gray-300'></h2>
        </div>
        {/* Description container */}
     <div className='px-4 lg:mt-4 flex flex-col justify-center sm:justify-end items-center text-lg sm:text-xl  w-full text-black dark:text-white'>
            <p className='GtRegular text-center sm:text-left'>Reflecting on the project, I'm proud of the journey from conceptualization to execution, 
            witnessing tangible improvements in both design and development skills. Collaborating with the client provided valuable insights into their
             needs and preferences, fostering a dynamic and rewarding creative process. Through challenges and successes, this project reinforced the
              importance of continuous learning and adaptation in delivering impactful solutions. 
        </p>
        </div>       </div>  </section>
 {/*  ---------------------------------------------------- 1. Story -------------------------------------------------*/}    

 </Suspense>
    </div>
  );
};

export default JamiProject;
