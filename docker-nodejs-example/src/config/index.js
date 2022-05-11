require('dotenv').config()

const config = {
	NODE_ENV: process.env.NODE_ENV || 'development',
	APP_PORT: process.env.APP_PORT || 3000
}

module.exports = config