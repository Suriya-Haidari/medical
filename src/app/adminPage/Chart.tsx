import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { ChartOptions } from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

export default function AdminDashboard() {
  const [chartLabels, setChartLabels] = useState([]);
  const [chartData, setChartData] = useState([]);
  const chartRef = useRef(null); // Ref for chart instance

  useEffect(() => {
    const fetchRegistrationData = async () => {
      try {
        const token = Cookies.get("token");
        if (!token) {
          console.error("No token found in cookies.");
          return;
        }

        const response = await axios.get(
          "http://localhost:3001/api/users/registrations",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const registrations = response.data;

        // Process the data to create labels and data points
        const dateCounts = {};
        registrations.forEach(({ created_at }) => {
          const date = new Date(created_at).toISOString().split("T")[0]; // Convert to date string
          dateCounts[date] = (dateCounts[date] || 0) + 1;
        });

        // Convert the data into chart-friendly format
        const labels = Object.keys(dateCounts);
        const data = labels.map((date) => dateCounts[date]);

        setChartLabels(labels);
        setChartData(data);
      } catch (error) {
        console.error("Error fetching registration data:", error);
      }
    };

    fetchRegistrationData();
  }, []);

  useEffect(() => {
    // Cleanup chart instance
    if (chartRef.current && chartRef.current.chartInstance) {
      chartRef.current.chartInstance.destroy();
    }
  }, [chartLabels, chartData]);

  // Chart configuration
  const data = {
    labels: chartLabels,
    datasets: [
      {
        label: "User Registrations",
        data: chartData,
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  // const options = {
  //   responsive: true,
  //   maintainAspectRatio: false,
  //   plugins: {
  //     legend: {
  //       position: "top",
  //     },
  //     title: {
  //       display: true,
  //       text: "User Registrations Over Time",
  //     },
  //   },
  //   scales: {
  //     x: {
  //       type: "time",
  //       time: {
  //         unit: "day",
  //       },
  //       title: {
  //         display: true,
  //         text: "Date",
  //       },
  //       ticks: {
  //         autoSkip: true,
  //         maxTicksLimit: 10,
  //       },
  //     },
  //     y: {
  //       title: {
  //         display: true,
  //         text: "Number of Registrations",
  //       },
  //     },
  //   },
  // };

  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top", // Change to one of the expected values
      },
      title: {
        display: true,
        text: "User Registrations Over Time",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
        },
        title: {
          display: true,
          text: "Date",
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: "Number of Registrations",
        },
      },
    },
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 dark:bg-neutral-800 dark:text-gray-200">
      <header className="bg-white shadow dark:bg-neutral-900">
        <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-gray-200">
            Calculation of the Number of Users
          </h1>
        </div>
      </header>

      <main className="py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-neutral-900 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-4">
              User Registrations Over Time
            </h2>
            <div className="overflow-auto">
              <div className="h-80 sm:h-96 md:h-128 lg:h-160 w-full">
                <Line ref={chartRef} data={data} options={options} />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
