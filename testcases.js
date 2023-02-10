#Mutation signup - create new accoutn 
type Mutation {
  createUser(name: String!, email: String!, password: String!): User!
  signIn(email: String!, password: String!): User
}

type User {
  id: ID!
  name: String!
  email: String!
}

schema {
  mutation: Mutation
}
#query - access to system 
type Query {
  user(id: ID!): User
  users: [User]
}

type User {
  id: ID!
  name: String!
  email: String!
}

schema {
  query: Query
}

#query - get all employees
type Query {
  employees: [Employee]!
}

type Employee {
  id: ID!
  name: String!
  title: String!
  department: String!
}

schema {
  query: Query
}

#mutation - create new employee
mutation createEmployee($first_name: String!, $last_name: String!, $email: String!,$salary: Number!,$gender: String) {
  createEmployee(first_name: $first_name, last_name: $last_name, email: $email,salary: $salary, gender: $gender) {
    first_name, 
    last_name, 
    email, 
    salary,
    gender
  }
}
#query - get employee by id 

#mutation - udpate employee
mutation updateEmployee($first_name: String!, $last_name: String!, $email: String!,$salary: Number!,$gender: String) {
  updateEmployee(first_name: $first_name, last_name: $last_name, email: $email,salary: $salary, gender: $gender) {
    first_name, 
    last_name, 
    email, 
    salary,
    gender
  }
}
#mutation - delete employee by id 

mutation deleteEmployee($first_name: String!, $last_name: String!, $email: String!,$salary: Number!,$gender: String) {
  updateEmployee(first_name: $first_name, last_name: $last_name, email: $email,salary: $salary, gender: $gender) {
    first_name, 
    last_name, 
    email, 
    salary,
    gender
  }
}