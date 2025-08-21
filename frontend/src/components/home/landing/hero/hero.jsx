import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const text = "Helping Reunite Missing Persons";
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [currentIndex, text]);

  return (
    <section
      className="text-center flex justify-center w-full py-20 px-0 lg:py-20 lg:px-20 min-h-screen
      bg-[url('https://learn.zoner.com/wp-content/uploads/2022/08/6-great-ways-to-deal-with-dark-photos.jpg')]
      bg-cover bg-no-repeat"
    >
      <div className="flex flex-col justify-center w-full gap-10">
        <div className="flex flex-col justify-center items-center gap-10">
          <h1 className="text-3xl lg:text-5xl font-bold p-0 lg:p-0 text-amber-500">
            {displayedText} <span classsName="animate-[blink_1s_infinite] text-sm">|</span>
          </h1>
          <h2 className="text-2xl text-white font-bold p-0 lg:p-10">
            A dedicated platform for reporting, tracking, and reuniting missing persons with their families and loved ones.
          </h2>
          <p className="text-xl text-white font-bold">
            Afalgugn is a community-driven platform that makes it easier to report missing persons, share verified information, and assist in search and rescue efforts. Families and communities can connect, collaborate, and receive timely updates, helping bring missing loved ones back home safely.
          </p>
        </div>
        <div>
          <a href="/signup" className="p-2 bg-green-500 rounded-xl m-5">
            Get started for free <span><FontAwesomeIcon icon={faChevronRight} /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;