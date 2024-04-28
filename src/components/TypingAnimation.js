import React, { useState, useEffect } from "react";
import "./TypingAnimation.css"; 

const TypingAnimation = ({ text }) => {
  const [displayText, setDisplayText] = useState("");
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    let interval;
    if (!completed) {
      interval = setInterval(() => {
        setDisplayText((prevText) =>
          prevText.length === text.length ? (setCompleted(true), prevText) : text.substring(0, prevText.length + 1)
        );
      }, 50); 
    }

    return () => {
      clearInterval(interval);
    };
  }, [text, completed]);

  return (
    <div className="typing-animation">
      <span>{displayText}</span>
      <span className="cursor" />
    </div>
  );
};

export default TypingAnimation;
