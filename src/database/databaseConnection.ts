import { createConnection } from 'typeorm';

const databaseConnection = {
    create: createConnection,
} 

export default databaseConnection;