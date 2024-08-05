import React, { useEffect, useState } from "react";

const DynamicText = () => {
  const texts = [
    "Welcome to the Movie World!",
    "Explore the greatest movies of all time!",
    "Discover new movies today!",
  ];
  const [text, setText] = useState("");

  useEffect(() => {
    const randomText = texts[Math.floor(Math.random() * texts.length)];
    setText(randomText);
  }, []);

  return <h1>{text}</h1>;
};

export default DynamicText;
