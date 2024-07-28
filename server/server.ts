import express, { Application } from 'express';
import { graphqlHTTP } from "express-graphql";
import {schema} from './graphql/schemas';
const cors = require('cors');

const app: Application = express();

// Use CORS middleware
app.use(cors({
  origin: 'http://localhost:5176',
  credentials: true
}));

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true,
}));

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))