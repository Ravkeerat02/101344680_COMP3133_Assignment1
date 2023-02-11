const { gql } = require('graphql');

module.exports = gql`

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

type Query{
    users: userData!
    employee: employeeData!

type Mutation{
    createUser(UserInput: UserInputData): User!
    createEmployee(EmployeeInput: EmployeeInputData): Employee!
    updateEmployee(ID: ID!, EmployeeInput: EmployeeInputData): Boolean!
    deleteEmployee(ID: ID!): Boolean!
}`

