import express from 'express';

import userRouter from './controllers/user.controller'

const app = express();
const PORT = 8000;

app.get('/', (req, res) => res.send('Hello Casero'));
app.use('/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});