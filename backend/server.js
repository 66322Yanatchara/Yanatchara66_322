const express = require('express')
const cors = require('cors')
const fs = require('fs')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

const logsDir = path.join(__dirname, 'logs')
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

app.get('/api/demo', (req, res) => {
  const log = `Access at ${new Date().toISOString()}\n`
  fs.appendFileSync(path.join(logsDir, 'access.log'), log)

  res.json({
    git: 'branch + commit + push',
    docker: 'dockerfile + compose'
  })
})

app.use((err, req, res, next) => {
  res.status(500).json({ error: 'server error' })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
