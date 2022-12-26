import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

function Chart(props) {
	const total = props.dataPoints.reduce((a, b) => a + +b.value, 0);

	return (
		<div className="chart">
			{props.dataPoints.map((dataPoint) => (
				<ChartBar
					value={dataPoint.value}
					maxValue={total}
					key={dataPoint.label}
					label={dataPoint.label}
				/>
			))}
		</div>
	);
}

export default Chart;
