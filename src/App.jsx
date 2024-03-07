import { Bar } from "react-chartjs-2";
import "./App.css";
import { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const labels = ["January", "February", "March", "April", "May", "June"];

const salesData = {
  oranges: {
    data: [4, 6, 7, 2, 6, 5],
    backgroundColor: "orange",
  },
  lemons: {
    data: [6, 5, 4, 3, 2, 1],
    backgroundColor: "yellow",
  },
  melons: {
    data: [1, 5, 4, 2, 6, 1],
    backgroundColor: "green",
  },
};

const App = () => {
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

export default App;
