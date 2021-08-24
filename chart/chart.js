import ApexCharts from 'apexcharts'
let isDesktop = window.innerWidth > 1024

const chartData1 = {
	referalls: [],
	earned: [],
}
const getRandomInt = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}
const fillArray = (arr, times = 12) => {
	for (let i = 0; i < times; i++) {
		arr.push(getRandomInt(100, 999))
	}
}
fillArray(chartData1.referalls)
fillArray(chartData1.earned)


var options = {
	series: [
		{
			name: 'Referalls',
			data: chartData1.referalls,
		},
		{
			name: 'Earned',
			data: chartData1.earned,
		},
	],
	chart: {
		type: 'bar',
		height: 350,
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			horizontal: false,
			columnWidth: isDesktop ? '15%' : '50%',
			endingShape: 'rounded',
			borderRadius: 1
		},
	},
	dataLabels: {
		enabled: false,
	},
	stroke: {
		show: true,
		width: isDesktop ? 3 : 2,
		colors: ['transparent'],
	},
	colors: ['#9D8EC8', '#B7C88E'],
	xaxis: {
		categories: [
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
	},
	yaxis: {
		max: 1000,
		tickAmount: 5,
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		y: {
			formatter: function (val) {
				return val + ' GEL'
			},
		},
	},
}

var chart = new ApexCharts(document.querySelector('#refchart'), options)
chart.render()

// axios request for filter chart
;[...document.querySelectorAll('.chartul li')].forEach((li) => {
	li.addEventListener('click', async () => {
		let val = Number(li.dataset.value)
		let err = false
		let response = null
		try {
			response = await axios.get(`${GET_CHART_DATA}/${val}`)
			if (!response.data.ok) {
				err = "isn't ok!"
				throw err
			}
		} catch (error) {
			console.log(error)
		} finally {
			if (!err) {
				let data = response.data
				console.log(data)
				// UPDATE CHART DATA
				chart.updateSeries([
					{
						name: 'Referalls',
						data: data.referalls,
					},
					{
						name: 'Earned',
						data: data.earned,
					},
				])
			}
		}
	})
})


const copyToClipboard = (str) => {
	const el = document.createElement('textarea')
	el.value = str
	document.body.appendChild(el)
	el.select()
	document.execCommand('copy')
	document.body.removeChild(el)
}

const reflinkBox = document.querySelector('.forchart__reflink')
const reflinkInput = document.getElementById('reflink')

reflinkBox.addEventListener('click', () => {
	copyToClipboard(reflinkInput.value)
})