import express from 'express';
import bodyParser from 'body-parser';
//import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') {
  import('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 3000;

import router from './routes/recharge/customers.js';
import {customerSchema, subscriptionSchema} from './routes/recharge/schemas.js';

//import subscriptionsRoutes from './routes/recharge/subscriptions.js';
//import subscriptionsSchemaRoutes from './routes/recharge/subscriptions.js';

// Middleware
app.use(bodyParser.json());

// Use routes
app.get('/', (req, res) => {
  res.send('Yo, curtains indeed!')
});
app.use('/recharge/customers', router);
app.get('/recharge/customers/schema', (req, res) => {
  res.json(customerSchema);
});
app.use('/recharge/subscriptions', router);
app.get('/recharge/subscriptions/schema', (req, res) => {
  res.json(subscriptionSchema);
});
//app.use('/recharge/subscriptions', subscriptionsRoutes);
//app.use('/recharge/subscriptions/schema', subscriptionsSchemaRoutes);

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
