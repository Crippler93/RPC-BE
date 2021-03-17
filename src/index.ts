import os from 'os'
import express from 'express'
import formData from 'express-form-data'

import fileRouter from './routes/file'

const app = express()
const PORT = 8000
const FORM_DATA_OPTIONS = {
  uploadDir: os.tmpdir(),
  autoClean: true,
}

app.use(express.json())

app.use('/file', formData.parse(FORM_DATA_OPTIONS), fileRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})
