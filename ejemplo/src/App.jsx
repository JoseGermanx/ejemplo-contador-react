import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import "./App.css";

const App = () => {
  const [startValue, setStartValue] = useState(0);
  const [time, setTime] = useState(0);
  const [direction, setDirection] = useState("up");
  const [running, setRunning] = useState(false);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (!running || paused) return;

    const interval = setInterval(() => {
      setTime((prevTime) =>
        direction === "up"
          ? prevTime + 1
          : prevTime > 0
          ? prevTime - 1
          : 0
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [running, paused, direction]);

  const handleStart = () => {
    if (startValue < 0) return alert("No puedes usa números negativos")
    setTime(Number(startValue));
    setRunning(true);
    setPaused(false);
  };

  const handlePauseResume = () => {
    setPaused((prev) => !prev);
  };

  const handleReset = () => {
    setRunning(false);
    setPaused(false);
    setTime(0);
    setStartValue(0);
    setDirection("up");
  };

  return (
    <div className="app-container">
      {/* {!running && ( */}
        <div className="controls">
          <input
            type="number"
            placeholder="Tiempo inicial"
            value={startValue}
            onChange={(e) => setStartValue(e.target.value)}
            // min={0}
          />
          <select
            value={direction}
            onChange={(e) => setDirection(e.target.value)}
          >
            <option value="up">Ascendente</option>
            <option value="down">Descendente</option>
          </select>
          <button onClick={handleStart}>Iniciar contador</button>
        </div>
      {/* )} */}

      {/* {running && ( */}
        <div className="running-controls">
          <Counter time={time} />
          <div className="button-group">
            <button onClick={handlePauseResume}>
              {paused ? "Reanudar" : "Pausar"}
            </button>
            <button onClick={handleReset}>Resetear</button>
          </div>
        </div>
      {/* )} */}
    </div>
  );
};

export default App;
