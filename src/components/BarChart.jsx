import { useState, useEffect } from "react";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement);

const months = ["January", "February", "March", "April", "May", "June"];

const BarChart = () => {
  const [fruit, setFruit] = useState("apples");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("testData.json", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const results = await response.json();
      setData(results);
    };
    fetchData();
  }, []);

  // event listener for the dropdown menu
  const handleFruitChange = (event) => {
    setFruit(event.target.value);
  };

  // get the sales data from JSON file for the selected fruit
  function getValues(jsondata, selection) {
    for (let k in jsondata) {
      if (jsondata[k].fruit == selection) {
        return [jsondata[k].sales, jsondata[k].backgroundColor];
      }
    }
  }

  if (data) {
    const [salesData, bgColor] = getValues(data, fruit);

    return (
      <div className="chart">
        <h1>Sales Data - {fruit}</h1>
        <select value={fruit} onChange={handleFruitChange}>
          <option value="oranges">Oranges</option>
          <option value="lemons">Lemons</option>
          <option value="apples">Apples</option>
        </select>
        <Bar
          data={{
            labels: months,
            datasets: [{ data: salesData, backgroundColor: bgColor }],
          }}
        />
      </div>
    );
  } else {
    return null;
  }
};

export default BarChart;
