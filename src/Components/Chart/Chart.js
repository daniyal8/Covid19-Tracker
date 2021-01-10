import React from 'react'
import { Line } from 'react-chartjs-2'

const Charts = (props) => {
const confirmedCases = props.confirmedValue
const recoveredCases = props.recoveredValue
const deathValue = props.deathValue
console.log(confirmedCases[0])
  return (
    <div>
      <h2>Current Situation In {props.name}</h2>
      <Line
        data={{
          datasets: [
            {
              label: 'Confirmed',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'dodgerblue',
              borderColor: 'dodgerblue',
              borderCapStyle: 'round',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'bevel',
              pointBorderColor: 'rgba(75,192,192,1)',
              pointBackgroundColor: '#fff',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'rgba(75,192,192,1)',
              pointHoverBorderColor: 'rgba(220,220,220,1)',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: confirmedCases[0].toString()
            },
            {
              label: 'Recovered',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'green',
              borderColor: 'green',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'bevel',
              pointBorderColor: 'rgb(0, 202, 0)',
              pointBackgroundColor: 'rgb(0, 202, 0)',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'greenyellow',
              pointHoverBorderColor: 'lime',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: recoveredCases[0].toString()
            },
            {
              label: 'Deaths',
              fill: false,
              lineTension: 0.1,
              backgroundColor: 'orangered',
              borderColor: 'orangered',
              borderCapStyle: 'butt',
              borderDash: [],
              borderDashOffset: 0.0,
              borderJoinStyle: 'bevel',
              pointBorderColor: 'maroon',
              pointBackgroundColor: 'maroon',
              pointBorderWidth: 1,
              pointHoverRadius: 5,
              pointHoverBackgroundColor: 'red',
              pointHoverBorderColor: 'red',
              pointHoverBorderWidth: 2,
              pointRadius: 1,
              pointHitRadius: 10,
              data: deathValue[0].toString()
            }
          ]
        }}
      />
    </div>
  )
}
export default Charts