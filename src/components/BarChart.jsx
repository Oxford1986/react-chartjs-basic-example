import { useState } from "react";
import { Bar } from "react-chartjs-2";
import { salesData } from "../data/SalesData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const labels = ["January", "February", "March", "April", "May", "June"];

const BarChart = () => {
  const [fruit, setFruit] = useState("oranges");

  const handleFruitChange = (event) => {
    setFruit(event.target.value);
  };

  return (
    <div className="chart">
      <h1>Sales Data - {fruit}</h1>
      <select value={fruit} onChange={handleFruitChange}>
        <option value="oranges">Oranges</option>
        <option value="lemons">Lemons</option>
        <option value="melons">Melons</option>
      </select>
      <Bar
        data={{
          labels: labels,
          datasets: [salesData[fruit]],
        }}
      />
    </div>
  );
};

export default BarChart;
