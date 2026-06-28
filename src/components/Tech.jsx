import React, { useRef, useState, useEffect } from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Render a ball only when it enters the viewport — avoids loading
// 13 separate WebGL contexts before the user even scrolls to the section.
const LazyBall = ({ icon, name }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only needs to fire once
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className='w-28 h-28' key={name}>
      {visible ? (
        <BallCanvas icon={icon} />
      ) : (
        // Placeholder keeps layout stable while off-screen
        <div className='w-28 h-28 rounded-full bg-tertiary' />
      )}
    </div>
  );
};

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <LazyBall
          key={technology.name}
          icon={technology.icon}
          name={technology.name}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
