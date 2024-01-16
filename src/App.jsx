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

const salesData = {
  oranges: {
    months: ["January", "February", "March", "April"],
    data: [4, 6, 7, 2],
  },
  lemons: {
    months: ["January", "February", "March", "April", "May", "June"],
    data: [6, 5, 4, 3, 2, 1],
  },
  melons: {
    months: ["January", "February", "March", "April", "May", "June"],
    data: [1, 5, 4, 2, 6, 1],
  },
};

const App = () => {
  const [fruit, setFruit] = useState("oranges");

  const [data, setData] = useState(salesData[fruit]);

  const handleFruitChange = (event) => {
    setFruit(event.target.value);
    setData(salesData[event.target.value]);
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
          labels: data["months"],
          datasets: [
            {
              label: "Sales",
              data: data["data"],
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default App;
