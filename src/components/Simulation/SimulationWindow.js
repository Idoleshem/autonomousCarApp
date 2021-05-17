import React, { useState } from "react";
import Dashboard from "./Dashboard";
import Diagram from "./Diagram";
import Score from "./Score";
import Actions from "./Actions";
import AI from "./AI";
import Chart from "./chart";
import calculateState from "../../Functions/calculateState";
import HighwayScene from "./HighwayScene";

const firstStatus = [9, 8, 7, 6];
const SimulationWindow = ({ currentDecisionPoint }) => {
  const [currentDecision, setCurrentDecision] = useState(1);
  const [currentStatus, setCurrentStatus] = useState(firstStatus);

  return (
    <div className="simulation-container">
      <h1>Simulation Window</h1>

      <Score />
      <HighwayScene />

      <Actions
        currentState={currentStatus}
        setCurrentState={setCurrentStatus}
        decision={currentDecision}
        setCurrentDecision={setCurrentDecision}
      />
    </div>
  );
};
export default SimulationWindow;
