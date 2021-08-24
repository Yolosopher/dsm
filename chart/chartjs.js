import { Chart } from 'chart.js'

const chartData = {
	labels: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec',
	],
	datasets: [
		{
			label: 'Referalls',
			backgroundColor: '#9D8EC8',
			borderColor: '#9D8EC8',
			data: [0, 10, 20, 30, 40, 80, 200],
		},
		{
			label: 'Earned',
			backgroundColor: '#B7C88E',
			borderColor: '#B7C88E',
			data: [0, 10, 20, 30, 40, 80, 200],
		},
	],
}

const config = {
	type: 'bar',
	data: chartData,
	options: {
		responsive: true,
		scales: {
			yAxes: [
				{
					ticks: {
						beginAtZero: true,
					},
				},
			],
		},
		plugins: {
			legend: {
				position: 'top',
			},
			title: {
				display: true,
				text: 'Chart.js Bar Chart',
			},
			defaultFontFamily: "firagobook"
		},
	},
}
const loadChartJS = () => {
    let chart = new Chart(document.getElementById('refchart'), config)
}

console.log(chart)


export default loadChartJS