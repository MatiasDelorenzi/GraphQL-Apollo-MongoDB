const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs } = require('./graphql/typeDefs');
const { resolvers } = require('./graphql/resolvers');
const databaseConnection = require('./database');
const app = express();
databaseConnection();

app.get('/', (req, res) => {
    res.send('Welcome, please use the /graphql endpoint')
});

module.exports = app;

const start = async () => {

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers
    })

    await apolloServer.start();
    apolloServer.applyMiddleware({ app })

    app.use('*', (req, res) => {
        res.status(404).send('Not Found')
    })

    app.listen(3000, () => {
        console.log('Server on port 3000');
    });
}

start();