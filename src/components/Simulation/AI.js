import React from "react";
const decisions = [
  "increase speed",
  "Take a right lane",
  "Take a left lane",
  "stay on the same lane",
  "decrease speed",
  "stay on the same lane",
  "decrease speed",
  "take a left lane",
  "increase speed",
];
const AI = ({ currentPosition }) => {
  return (
    <div className="AI-container">
      <h1>the AI's decision is:</h1>
      <h1>{decisions[currentPosition]}</h1>
    </div>
  );
};
export default AI;
