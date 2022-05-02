const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
	return res.json({
		message: 'Welcome to David\'s API'
	})
})

app.listen(4000, () => {
	console.log('App listening on port 4000')
})