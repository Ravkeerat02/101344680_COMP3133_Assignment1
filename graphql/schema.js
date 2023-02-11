const { buildSchema } = require('graphql');

module.exports = buildSchema(`

type User{
    username: String!
    email: String!
    password: String!
}

type Employee{
    first_name: String!
    last_name: String!
    email: String!
    salary: Float!
}

type RootQuery{
    users: userData!
    employee: employeeData!

type RootMutation{
    createUser(UserInput: UserInputData): User!
}


`)
