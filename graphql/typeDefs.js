const { gql } = require('apollo-server')


module.exports = gql`

type User{
    username: String
    email: String
    password: String
}

type Employee{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}
input UserInput{
    username: String
    email: String
    password: String
}

input EmployeeInput{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}

input UserInputData{
    username: String
    email: String
    password: String
}

input EmployeeInputData{
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
    createUser(userInput: UserInputData): User
    createEmployee(employeeInput: EmployeeInputData): Employee
    updateEmployee(ID: ID!, employeeInput: EmployeeInputData): Boolean
    deleteEmployee(ID: ID!): Boolean
}`



