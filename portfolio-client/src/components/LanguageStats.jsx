import { Doughnut } from 'react-chartjs-2'
import 'chart.js/auto'
import { useMemo } from 'react'

export function LanguageStats({ data }) {
    const { labels, values } = useMemo(() => {
        const sortedData = Object.entries(data).sort(([, a], [, b]) => b - a)
        const finalData = sortedData.slice(0, 6)
        const others = sortedData.slice(6)
        const othersValue = others.reduce((acc, [, value]) => acc + value, 0)
        finalData.push(["Others", othersValue])
        const labels = finalData.map(([key, ]) => key)
        const values = finalData.map(([, value]) => value)
        return {labels, values}
    }, [data])

    const chartData = {
        labels: labels,
        datasets: [{
            data: values,
            backgroundColor: ['rgb(255, 224, 184)', 'rgb(167, 255, 193)', 'rgb(255, 143, 151)', 'rgb(255, 247, 158)', 'rgb(211, 170, 255)', 'rgb(100, 167, 255)'],
            borderColor: ['rgb(184, 63, 23)', 'rgb(4, 120, 87)', 'rgb(188, 25, 25)', 'rgb(197, 197, 41)', 'rgb(91, 33, 182)', 'rgb(30, 64, 175)'],
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

