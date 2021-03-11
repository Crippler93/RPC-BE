import express from 'express';

import { postFile } from './controllers'
import makeExpressCallback from './express-callback'

const app = express();
app.use(express.json());
const PORT = 8000;

app.post('/file', makeExpressCallback(postFile));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});