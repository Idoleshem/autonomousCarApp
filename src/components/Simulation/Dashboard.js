import React from "react";

const Dashboard = ({ currentPosition }) => {
  // console.log(currentStatus);
  const saftey = [4, 6, 6, 9, 10, 11, 11, 12, 14, 14, 16];
  const time = [3, 4, 6, 7, 8, 8, 9, 10, 13, 14, 16];
  // let currentParameters = currentStatus.currentStatus;
  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <p>"safety score"</p>
      <h1>{saftey[currentPosition]}</h1>
      <p>"time to destination score"</p>
      <h1>{time[currentPosition]}</h1>
    </div>
  );
};
export default Dashboard;
