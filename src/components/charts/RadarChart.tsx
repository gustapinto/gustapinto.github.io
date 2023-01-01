import {Radar} from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend,
);

interface RadarChartProps {
  labels: Array<string>
  data: Array<number>,
}

export default function RadarChart({labels, data}: RadarChartProps) {
  return (
    <Radar
      data={{
        labels: labels,
        datasets: [
          {
            label: '',
            data: data,
            fill: true,
            backgroundColor: 'rgba(246, 212, 40, 0.2)',
            borderColor: 'rgb(246, 212, 40)',
            pointBackgroundColor: 'rgb(246, 212, 40)',
          },
        ],
      }}
      options={{
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            ticks: {
              display: false,
            },
          },
        },
      }}
    />
  );
}
