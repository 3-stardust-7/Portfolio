import React, { useState, useEffect } from "react";

// const TypewriterText = ({ phrases, speed = 100, pause = 1500 }) => {
//   const [displayedText, setDisplayedText] = useState("");
//   const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
//   const [isDeleting, setIsDeleting] = useState(false);

//   useEffect(() => {
//     const currentPhrase = phrases[currentPhraseIndex];
//     let typingSpeed = speed;

//     let timeout;

//     if (isDeleting) {
//       typingSpeed /= 2;
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => prev.slice(0, -1));
//       }, typingSpeed);
//     } else {
//       timeout = setTimeout(() => {
//         setDisplayedText((prev) => currentPhrase.slice(0, prev.length + 1));
//       }, typingSpeed);
//     }

//     if (!isDeleting && displayedText === currentPhrase) {
//       timeout = setTimeout(() => setIsDeleting(true), pause);
//     } else if (isDeleting && displayedText === "") {
//       setIsDeleting(false);
//       setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
//     }

//     return () => clearTimeout(timeout);
//   }, [displayedText, isDeleting, currentPhraseIndex, phrases, speed, pause]);

//   return (
//     <div className="text-xl font-mono">
//       {displayedText}
//       <span className="blinking-cursor">|</span>
//     </div>
//   );
// };

// export default function Typewriter() {
//   const phrases = [
//     "Web Developer",
//     "Ardent Learner",
//     "ML Enthusiast",
//     "Frontend Developer",
//   ];

//   return (
//     <div className="p-4">
//       <TypewriterText phrases={phrases} speed={100} pause={1500} />
//     </div>
//   );
// }

const Typewriter = () => {
  const texts = ["Full Stack Developer", "UI/UX Enthusiast", "React Specialist", "ML Explorer"];
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts[currentIndex];
      
      if (!isDeleting) {
        setCurrentText(current.substring(0, currentText.length + 1));
        if (currentText === current) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setCurrentText(current.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <div className="flex items-center">
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
        {currentText}
      </span>
      <span className="ml-1 animate-pulse text-purple-400">|</span>
    </div>
  );
};

export default Typewriter