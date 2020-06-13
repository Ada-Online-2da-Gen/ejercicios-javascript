import React, { useContext } from "react";
import ThemeContext from "context/ThemeContext";
import "./styles.css";

const Card = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={theme}>
      <h1>Card</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
};

export default Card;
