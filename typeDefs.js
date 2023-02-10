const {gql} = require('apollo-server-express');
const typeDefs = gql`

type User{
    username: String!
    email: String!
    password: String!
}

type Employee{
    first_name: String!
    last_name: String!
    email: String!
    salary: Int!
}