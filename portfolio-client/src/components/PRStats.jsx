import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useMemo } from 'react'

export function PRStats({ data }) {
    const { labels, values } = useMemo(() => {
        const labels = Object.keys(data)
        const values = Object.values(data)
        return { labels, values }
    }, [data])

    const chartData = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: ['rgb(167, 255, 193)', 'rgb(255, 143, 151)'],
            borderColor: ['rgb(4, 120, 87)', 'rgb(188, 25, 25)'],
            borderWidth: 1,
        }],
        hoverOffset: 4
    }
    const options = {
        plugins: {
            legend: {
                labels: {
                    padding: 10,
                },
                position: "left",
            },
            tooltip: {
                mode: 'nearest',
                animation: {
                    duration: 50
                }
            }
        },
        animation: false
    }
    return <Doughnut data={chartData} options={options} />
}

