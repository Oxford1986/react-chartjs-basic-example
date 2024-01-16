import { Bar } from "react-chartjs-2";
import "./App.css";
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
  const labels = salesData.oranges.months;
  const data = salesData.oranges.data;

  return (
    <div>
      <Bar
        data={{
          labels: labels,
          datasets: [
            {
              label: "Sales",
              data: data,
              borderWidth: 2,
            },
          ],
        }}
      />
    </div>
  );
};

export default App;
