const { gql } = require('apollo-server')


module.exports = gql`

type User{
    username: String!
    email: String!
    password: String!
    salary: Float!
    gender: String!
}

type Employee{
    first_name: String!
    last_name: String!
    email: String!
    salary: Float!
}
input UserInput{
    username: String!
    email: String!
    password: String!
}

input EmployeeInput{
    first_name: String!
    last_name: String!
    email: String!
    salary: Float!
}

input UserInputData{
    username: String!
    email: String!
    password: String!
    salary: Float!
    gender: String!
}

input EmployeeInputData{
    first_name: String!
    last_name: String!
    email: String!
    salary: Float!
}
type Query{
    users: [User]
    employees: [Employee]
}


type Mutation{
    createUser(userInput: UserInputData): User!
    createEmployee(employeeInput: EmployeeInputData): Employee!
    updateEmployee(ID: ID!, employeeInput: EmployeeInput): Boolean!
    deleteEmployee(ID: ID!): Boolean!
}`



