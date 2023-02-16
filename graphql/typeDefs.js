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
input loginInput{
    username: String!
    password: String!
}

input empInput{
    first_name: String
    last_name: String
}

input EmployeeInput{
    first_name: String
    last_name: String
    email: String
    salary: Float
    gender: String
}

input updateEmployeeInput{
    first_name: String
    last_name: String
    email: String
}

type Query{
    employeeID(ID: ID! ,employeeInput: empInput): Employee
    getEmployees: [Employee]
    getUsers: [User]
}


type Mutation{
    createUser(userInput: UserInput): User!
    createEmployee(employeeInput: EmployeeInput:empInput): Employee!
    updateEmployee(ID: ID!, employeeInput: updateEmployeeInput): Employee!
    deleteEmployee(ID: ID!): Boolean!
}`



