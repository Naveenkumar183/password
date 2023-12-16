import { useState, useCallback, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [Length, setLength] = useState(8);
  const [isNumber, setisNumber] = useState(false);
  const [isChar, setisChar] = useState(false);
  const [password, setpassword] = useState("");

  function fn() {
    const numbers = "0123456789";
    const characters = "!@#$%^&*()-=_+[]{}|;:,.<>?";

    let validChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (isNumber) validChars += numbers;
    if (isChar) validChars += characters;

    let newPassword = "";
    for (let i = 0; i < Length; i++) {
      const randomIndex = Math.floor(Math.random() * validChars.length);
      newPassword += validChars.charAt(randomIndex);
    }
    setpassword(newPassword);
  }
  const passwpordgenertor = useCallback(fn, [
    Length,
    isNumber,
    isChar,
    setpassword
  ]);

  useEffect(() => {
    passwpordgenertor();
  }, [Length, isNumber, isChar]);

  return (
    <div className="App">
      <label>
        Password Length: {Length}
        <input
          type="range"
          min="6"
          max="100"
          value={Length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          defaultChecked={isNumber}
          onChange={() => {
            setisNumber((isNumber) => !isNumber);
          }}
        />
        Include Numbers
      </label>
      <br />

      <label>
        <input
          type="checkbox"
          defaultChecked={isChar}
          onChange={() => {
            setisChar((isChar) => !isChar);
          }}
        />
        Include Special Characters
      </label>
      <br />

      <br />

      <div>
        <input type="text" value={password} readOnly />
        <button>Copy</button>
        {/* <button onClick={fn}>m</button> */}
      </div>
    </div>
  );
}
