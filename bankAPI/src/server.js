const { GraphQLServer } = require('graphql-yoga');
const resolvers = require('./resolvers');
const path = require('path');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/bankDBgraphql', {
    useNewUrlParser: true,
});


//mongoose.connect('mongodb+srv://nicolasjcortez:########@cluster0-ws7xq.gcp.mongodb.net/test?retryWrites=true&w=majority', {
//    useNewUrlParser: true,
//});

const server = new GraphQLServer({
    typeDefs: path.resolve(__dirname,'schema/schema.graphql'),
    resolvers
});

server.start();