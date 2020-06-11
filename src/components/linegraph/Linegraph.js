import React from "react";
import { Line, Bar } from "react-chartjs-2";
import Paper from "@material-ui/core/Paper";
export default function Linegraph(props) {
  const data = {
    labels: [...Object.keys(props.stats)].reverse(),
    datasets: [
      {
        label: "Number of Messages",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [...Object.values(props.stats)].reverse(),
      },
    ],
  };
  const options = {
    scales: {
      xAxes: [
        {
          type: "time",
          time: {
            unit: "day",
            unitStepSize: 1,
            displayFormats: { day: "MMM DD" },
          },
        },
      ],
      yAxes: [{ ticks: { beginAtZero: true } }],
    },
  };
  return (
    <div>
      <Paper>
        <Bar data={data} options={options} />
      </Paper>
    </div>
  );
}
