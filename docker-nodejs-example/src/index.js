const app = require('./app')
const {NODE_ENV, APP_PORT} = require('./config')

async function main() {
    await app.listen(APP_PORT)
    console.log(`Server listening in ${NODE_ENV} mode on port ${APP_PORT}`)
}

main()

// app.listen(3000, () => console.log('Server listening on port 3000'))
