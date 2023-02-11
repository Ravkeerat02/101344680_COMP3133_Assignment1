const employee = require('../model/employee');
const user = require('../model/user');

module.exports = {
// //    //create new account 
// //    *@param{username, email, password}} UserInput 
// //    @returns{user}

//     // @mutation
//     // mutation{
//     //     createSecureServer(UserInput){
//     //         username
//     //         email
//     //         password
//     //     }
//     // }
//     //createEmployee(employeeInput){
//     //     first_name
//     //     last_name
//     //     email
//     //     salary
//     // }
//     }
// }

//allow user to create new account
createUser : async function({UserInput}){
    const user = new User({
        username: UserInput.username,
        email: UserInput.email,
        password: UserInput.password
    });
    const result = await user.save();
    return {...result._doc, _id: result.id};
}
}

//allow user to create new employee
// createEmployee : async function({})

//allow user to update employee
updateEmployee : async function({EmployeeInput}){
    const employee = new Employee({
        first_name: EmployeeInput.first_name,
        last_name: EmployeeInput.last_name,
        email: EmployeeInput.email,
        salary: EmployeeInput.salary
    });
    const result = await employee.save();
    return {...result._doc, _id: result.id};
}

//allow user to delete employee
deleteEmployee : async function({EmployeeInput}){
    const employee = new Employee({
        first_name: EmployeeInput.first_name,
        last_name: EmployeeInput.last_name,
        email: EmployeeInput.email,
        salary: EmployeeInput.salary
    });
    const result = await employee.save();
    return {...result._doc, _id: result.id};
}
