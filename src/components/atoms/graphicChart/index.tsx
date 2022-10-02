import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import styled from 'styled-components'

const GraphicChartContainer = styled.div`
  height: 80%;
  width: 50%;

  @media only screen and (max-width: 768px) {
    width: 80%;
  }
`

// type Props = {
//   chartData: object[]
//   chartOptions: object[]
// }

ChartJS.register(BarElement, CategoryScale, LinearScale)

export const GraphicChart = ({ chartData, chartOptions }) => {
  return (
    <GraphicChartContainer>
      <Bar data={chartData} options={chartOptions} />
    </GraphicChartContainer>
  )
}
