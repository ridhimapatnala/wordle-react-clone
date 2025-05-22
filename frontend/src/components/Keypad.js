import { useEffect, useState } from "react";

const Keypad = ({ usedKeys, handleKeyUp }) => {
  const [letters, setLetters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/letters")
      .then((res) => res.json())
      .then((json) => setLetters(json));
  }, []);

  const row1 = letters.slice(0, 10);
  const row2 = letters.slice(10, 19);
  const row3 = letters.slice(19);

  const handleClick = (key) => {
    handleKeyUp({ key });
  };

  const getKeyClass = (key) => {
    const color = usedKeys[key.toLowerCase()];
    return `key ${key === "ENTER" || key === "BACK" ? "wide" : ""} ${color ? `${color}-key` : ""}`;
  };

  return (
    <div className="keypad">
      <div className="row">
        {row1.map((l) => (
          <div key={l.key} className={getKeyClass(l.key)} onClick={() => handleClick(l.key)}>
            {l.key}
          </div>
        ))}
      </div>
      <div className="row">
        {row2.map((l) => (
          <div key={l.key} className={getKeyClass(l.key)} onClick={() => handleClick(l.key)}>
            {l.key}
          </div>
        ))}
      </div>
      <div className="row">
        {row3.map((l) => (
          <div key={l.key} className={getKeyClass(l.key)} onClick={() => handleClick(l.key === "BACK" ? "Backspace" : l.key)}
        >
            {l.key}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Keypad;
