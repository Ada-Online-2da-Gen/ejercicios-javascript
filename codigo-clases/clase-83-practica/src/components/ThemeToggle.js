import React, { useContext } from "react";
import ThemeContext from "context/ThemeContext";

const ThemeToggle = () => {
  const { themeToggle } = useContext(ThemeContext);

  const handleClick = () => themeToggle();

  return <button onClick={handleClick}>Toggle</button>;
};

export default ThemeToggle;
