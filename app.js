import express from 'express';

import { PORT } from './config/env.js';

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscriptions.routes.js';
import connectToDatabase from './database /mangodb.js';

const app = express();

app.use('/api/v1/auth', authRouter);
app.use('/api/v1/users', userRouter);
app.use('/api/v1/subscriptions', subscriptionRouter);

app.get('/', (req, res) => {
  res.send('welcome to subscription tracker api');
});

app.listen(PORT, async () => {
  console.log(`server running on port ${PORT}`);

  await connectToDatabase();
});

export default app;
