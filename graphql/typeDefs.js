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
    getUsers: User
    employeeID(ID: ID!): Employee
    loginUser(loginInput: loginInput): User
}


type Mutation{
    createUser(userInput: UserInput): User!
    createEmployee(employeeInput: EmployeeInput): Employee!
    updateEmployee(ID: ID!, employeeInput: updateEmployeeInput): Employee!
    deleteEmployee(ID: ID!): Boolean!
}`



