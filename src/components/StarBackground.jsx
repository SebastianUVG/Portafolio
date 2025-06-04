import { useState, useEffect } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generatestars();
    genereteMeteors();
    //generateAuroras();

    const handleResize = () => {
      generatestars();
    };

    window.addEventListener("resize", handleResize);
    return () => {window.removeEventListener("resize", handleResize)};
  }, []);

  const generatestars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        duration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const genereteMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 15,
        Aduration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };


  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="aurora" />
      {stars.map((stars)=>(
            <div key={stars.id} className="star animate-pulse*subtle" 
            style={{
                width:stars.size+"px",
                height:stars.size+"px",
                left:stars.x+"%",
                top:stars.y+"%",
                opacity:stars.opacity,
                duration: stars.duration+"s",
            }}/>
      ))}

      {meteors.map((meteor)=>(
            <div key={meteor.id} className="meteor animate-meteor" 
            style={{
                width:meteor.size * 50+"px",
                height:meteor.size * 1+"px",
                left:meteor.x+"%",
                top:meteor.y+"%",
                animation:meteor.delay,
                duration: meteor.Aduration+"s",
            }}/>
      ))}

      
    </div>
  );
};
