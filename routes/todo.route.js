const {Router} = require('express')
const router = Router()
const Todo = require('../models/Todo')

router.post('/add', async (req, res) => {
	try {
		const {value, userId} = req.body

		const todo = await new Todo({
			text: value,
			owner: userId,
			completed: false
		})

		await todo.save()

		res.json(todo)
	} catch (e) {
		console.log(e)
	}
})

router.get('/', async (req, res) => {
	try {
		const {userId} = req.query

		const todo = await Todo.find({owner: userId})

		res.json(todo)
	} catch (e) {
		console.log(e)
	}
})

router.delete('/delete/:id', async (req, res) => {
	try {
		const todo = await Todo.findOneAndDelete({_id: req.params.id})

		res.json(todo)
	} catch (e) {
		console.log(e)
	}
})

router.put('/complete/:id', async (req, res) => {
	try {
		const todo = await Todo.findOne({_id: req.params.id})
		todo.completed = !todo.completed

		await todo.save()
		res.json(todo)
	} catch (e) {
		console.log(e)
	}
})


module.exports = router