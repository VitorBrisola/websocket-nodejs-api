import express from 'express';

import { databaseConnection } from './database';
import routes from './routes';

const PORT = 3333;

databaseConnection.create();

const app = express();
app.use(routes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))