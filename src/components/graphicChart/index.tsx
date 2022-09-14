import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(BarElement, CategoryScale, LinearScale)

export const GraphicChart = ({ chartData, chartOptions }) => {
  return (
    <div>
      <Bar data={chartData} options={chartOptions} />
    </div>
  )
}
