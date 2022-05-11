const {Router} = require('express')

function routes(app) {
    
    const router = Router()
    app.use('/', router)

    router.get('/', (req, res) => {
    res.json({ message: 'Hello World'})
    })

}


module.exports = routes