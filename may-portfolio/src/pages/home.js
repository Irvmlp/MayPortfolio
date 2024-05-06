import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Import jQuery (assuming you have it installed)
import Header from '../components/za-other/foot/sider/header';
import NameFooter from '../components/za-other/foot/sider/Footer';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/portfolio.css'; // Import your CSS file
import MiddleSection from '../components/homeBranch/1-sliderSection';
import AboutSection from '../components/aboutBranch/1-aboutSection';
import PortfolioSection from '../components/workBranch/1-portfolioSection';

function Portfolio() {

  
  const [slideIndex, setSlideIndex] = useState(null);

  useEffect(() => {
    // Navigation Init Functions
    const toggleShowNavigationMenu = () => {
      $('.slider').toggleClass('navigation--is-active');
    };

    const resetShowNavigationMenu = () => {
      $('.slider').removeClass('navigation--is-active');
    };

    const getSlideIndex = (slide) => {
      return $(slide).attr('data-slide-index');
    };

    const resetActiveSlide = () => {
      $('.slider__slides__slide').removeClass('slider__slides__slide--is-active');
    };

    const initActiveSlide = (index) => {
      const target = $('.slider__slides__slide').get(index);
      $(target).addClass('slider__slides__slide--is-active');
    };

    const initSlide = (destinationSlideIndex) => {
      const slideCount = 3;
      const destination = parseInt(destinationSlideIndex);
      const slideDistance = '-' + ((100 / slideCount) * destination) + '%';
      $('.slider__slides__wrapper').css('transform', 'translateX(' + slideDistance + ')');
      resetActiveSlide();
      initActiveSlide(destination);
    };

    // Run all defined functions
    $('.navigation').click(() => {
      // Toggle Navigation Default
      toggleShowNavigationMenu();
    });

    $('.navigation--is-active .slider__slides').click(() => {
      // Reset Navigation if slides all clicked
      resetShowNavigationMenu();
    });

    $('.slider__navigation__button').click(function () {
      const destination = getSlideIndex(this);
      initSlide(destination);
      resetShowNavigationMenu();
    });
  }, []);

  return (
    <div>
      <Header/>
      <section className="section">      
        <main className="section__main">
          <div className="slider">
           
            <div className="slider__slides">
              <div className="slider__slides__wrapper">
                <div className="slider__slides__slide slider__slides__slide--is-active">   
                  <MiddleSection/>                 
                </div>
                <div className="slider__slides__slide slider__slides__slide--is-active">
                <PortfolioSection/>        
                </div>
                <div className="slider__slides__slide slider__slides__slide--is-active">
                <AboutSection/> 
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      <NameFooter/>

    </div>
  );
}

export default Portfolio;
