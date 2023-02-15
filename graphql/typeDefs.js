const { gql } = require('apollo-server')


module.exports = gql`

type User{
    username: String!
    email: String!
    password: String!
    
}

type Employee{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}
input UserInput{
    username: String!
    password: String!
    email: String!
}

input EmployeeInput{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}

type Query{
    getUser(username: String, password: String, email: String!): User
    employeeID(ID: ID!): Employee
    viewEmployees: [Employee!]!
}


type Mutation{
    createUser(userInput: UserInput): User!
    createEmployee(employeeInput: EmployeeInput): Employee!
    updateEmployee(ID: ID!, employeeInput: EmployeeInput): Boolean!
    deleteEmployee(ID: ID!): Boolean!
}`



