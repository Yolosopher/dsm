import express, { urlencoded, json } from 'express'
import cors from 'cors'
import { brands } from './brands.js'
// const express = require('express')
// const cors = require('cors')
// const brands = require('./brands')
// const { urlencoded, json } = express

let brandsWithId = brands.map((br) => {
	br = br
	switch (br.brand) {
		case 'almay':
			br.brand_id = '1'
			break
		case 'alva':
			br.brand_id = '2'
			break
		case 'annabelle':
			br.brand_id = '3'
			break
		case 'butter london':
			br.brand_id = '4'
			break

		default:
			br.brand_id = '0'
			break
	}
	return br
})
let totalAccumulator = (arr) => {
	return arr
		.map((obj) => obj.qty)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

const app = express()

app.use(cors())
app.use(urlencoded({ extended: false }))
app.use(json())

app.get('/', (req, res) => {
	res.send('hi')
})
app.post('/', (req, res) => {
	console.log()
	if (req.body.brand === '0') {
		res.json({ products: brandsWithId, brand: req.body.brand, page: 1 })
		// yvela
	} else if (req.body.brand[1]) {
		// listia
		let filtered = brandsWithId.filter(
			(prod) => req.body.brand.indexOf(prod.brand_id) !== -1
		)
		res.json({
			products: filtered,
			brand: req.body.brand.join('-'),
			page: 2,
		})
	} else {
		// 1
		let filtered = brandsWithId.filter(
			(prod) => req.body.brand === prod.brand_id
		)
		res.json({ products: filtered, brand: req.body.brand, page: 3 })
	}
})
app.get('/brands', (req, res) => {
	console.log()
	res.json()
})
let basket = []
let favs = []
let compares = []
app.get('/add-to-basket', (req, res) => {
	let id = +req.query.id
	if (basket.find((idin) => idin.id === id)) {
		basket = basket.filter((obj) => obj.id !== id)
	} else {
		basket.push({ id, qty: 1 })
	}
	res.json({ ok: true, basket, total: totalAccumulator(basket) })
})
app.get('/add-to-favs', (req, res) => {
	let id = +req.query.id
	if (favs.find((idin) => idin.id === id)) {
		favs = favs.filter((obj) => obj.id !== id)
	} else {
		favs.push({ id, qty: 1 })
	}
	res.json({ ok: true, favs, total: totalAccumulator(favs) })
})
app.get('/add-to-compare', (req, res) => {
	let id = +req.query.id
	if (compares.find((idin) => idin.id === id)) {
		compares = compares.filter((obj) => obj.id !== id)
	} else {
		compares.push({ id, qty: 1 })
	}
	res.json({ ok: true, compares, total: totalAccumulator(compares) })
})
app.get('/remove-from-basket', (req, res) => {
	let id = +req.query.id
	let productToDelete
	let index = basket.findIndex((obj) => obj.id === id)
	console.log(basket)
	if (index >= 0) {
		productToDelete = basket.find((obj) => obj.id === id)
		console.log(productToDelete)
		basket.splice(index, 1)
		res.json({
			ok: true,
			productToDelete,
			total: totalAccumulator(basket),
			deleted: 1,
		})
	} else {
		res.json({ ok: false, id, productToDelete })
	}
})
app.post('/update-basket', (req, res) => {
	let id = +req.body.id
	let qty = +req.body.qty
	let color = +req.body.color
	let milligram = +req.body.milligram
	let index = basket.findIndex((obj) => obj.id === id)
	if (index >= 0) {
		basket[index].qty = qty
		if (color) basket[index].color = color
		if (milligram) basket[index].milligram = milligram
		res.json({
			ok: true,
			product: basket[index],
			total: totalAccumulator(basket),
		})
	} else {
		let newproduct = {
			id,
			qty,
		}
		if (color) newproduct.color = color
		if (milligram) newproduct.milligram = milligram
		basket.push(newproduct)
		res.json({
			ok: true,
			product: newproduct,
			total: totalAccumulator(basket),
		})
	}
})
let reviews = []
app.post('/update-review', (req, res) => {
	let id = +req.body.id
	let index = basket.findIndex((obj) => obj.id === id)
	if (index >= 0) {
		reviews.splice(index, 1)
		res.json({ ok: true, deleted: true, total: reviews.length })
	} else {
		let newreview = {
			id: Date.now(),
			firstname: req.body.firstName,
			lastname: req.body.lastName,
			review: req.body.review,
			star: +req.body.star,
			image: false,
		}
		reviews.push(newreview)
		res.json({ ok: true, deleted: false, newreview, total: reviews.length })
	}
})

const port = 2000
app.listen(port, () => {
	console.log(`server is running on http://localhost:${port}`)
})
