const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull
} = require('graphql')
const app = express()

const port = process.env.PORT || 5001;

app.use('/graphql', graphqlHTTP({
    graphiql: true
  }))
app.listen(port, () => console.log(`Server running on port ${port} 🔥`));