import os from 'os'
import express from 'express'
import formData from 'express-form-data'
import swaggerUi from 'swagger-ui-express'

import env from './enviroment'
import swaggerDocument from './swagger.json'
import fileRouter from './routes/file'

const app = express()
const { EXPRESS_PORT } = env
const FORM_DATA_OPTIONS = {
  uploadDir: os.tmpdir(),
  autoClean: true,
}

app.use(express.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use('/file', formData.parse(FORM_DATA_OPTIONS), fileRouter)

app.listen(EXPRESS_PORT, () => {
  console.log(`Server is running at http://localhost:${EXPRESS_PORT}`)
})
