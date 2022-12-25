import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
  const dpVals = props.dataPoints.map((dp) => dp.value);
  const totalMax = Math.max(...dpVals);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMax}
          key={dataPoint.label}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}

export default Chart;
