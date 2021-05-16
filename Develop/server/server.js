const express = require('express');

// import ApolloServer
const { ApolloServer } = require('apollo-server-express');

// import authMiddleware from utils
const { authMiddleware } = require('./utils/auth');

// import typeDefs and resolvers
const { typeDefs, resolvers } = require('./schemas');

const path = require('path');
const db = require('./config/connection');
// const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

// create a new Apollo server and pass in our schema data
const server = new ApolloServer({
  typeDefs,
  resolvers,
  // This ensures that every request performs an authentication check, and the updated request object will be passed to the resolvers as the context
  context: authMiddleware
});

// integrate our apollo server with the Express application middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`🌍 Now listening on localhost:${PORT}`);
    // log where we can go to test the GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
