import React, { useState, useEffect } from 'react';
import $ from 'jquery'; // Import jQuery (assuming you have it installed)
import Header from '../components/header';
import NameFooter from '../components/nameFooter';
import '/Users/irvinglamadrid/MayPortfolio/may-portfolio/src/portfolio.css'; // Import your CSS file

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
            <div className="slider__navigation">
              <button className="slider__navigation__button" data-slide-index="0">
                Slide 1
              </button>
              <button className="slider__navigation__button" data-slide-index="1">
                Slide 2
              </button>
              <button className="slider__navigation__button" data-slide-index="2">
                Slide 3
              </button>
             
            </div>
            <div className="slider__slides">
              <div className="slider__slides__wrapper">
                <div className="slider__slides__slide slider__slides__slide--is-active">
                  <div className="slider__slides__slide__content">Slide 1</div>
                </div>
                <div className="slider__slides__slide">
                  <div className="slider__slides__slide__content">Slide 2</div>
                </div>

                <div className="slider__slides__slide">
                  <div className="slider__slides__slide__content">Slide 2</div>
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
