import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './schema'

const app = express()

mongoose.connect('mongodb://localhost:27017/graphqlapi');
const db = mongoose.connection;
db.on('error',() => {console.log("Failed to connect to database")})
  .once('open',() => {console.log("Connected to DB")})

app.get('/',(req,res)=>{
  res.send('Welcome to GraphQL Server')
})

// GraphQL API Endpoint

app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})))

app.listen(5005,() => {
  console.log("GraphQL API running at port 5005")
})