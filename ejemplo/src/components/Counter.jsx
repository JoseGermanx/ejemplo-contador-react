import React from "react";
import "./Counter.css"; // Importamos los estilos

const Counter = ({ time }) => {
  const digits = [
    Math.floor(time / 1000000) % 10,
    Math.floor(time / 100000) % 10,
    Math.floor(time / 10000) % 10,
    Math.floor(time / 1000) % 10,
    Math.floor(time / 100) % 10,
    Math.floor(time / 10) % 10,
    Math.floor(time / 1) % 10,
  ];

  return (
    <div className="timer-container">
      <div className="clock-icon">
        <i className="fa-regular fa-clock"></i>
      </div>
      <div className="digits-wrapper">
        {digits.map((digit, index) => (
          <div className="digit" key={index}>
            {digit}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Counter;
