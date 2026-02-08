import { useState, type ChangeEvent } from "react";

import "./Input.css";
import { Button } from "@mui/material";

type InputProps = {
  onSubmit: (value: string) => void;
};

export const Input = ({ onSubmit }: InputProps) => {
  const [input, setInput] = useState<string>("");

  const handleSubmit = () => {
    if (!input) return;
    onSubmit(input);
    setInput("");
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="inputContainer">
      <input
        type="text"
        value={input}
        onChange={handleChange}
      />
      <button onClick={handleSubmit} className="button">
        Add
      </button>
    </div>
  );
};
