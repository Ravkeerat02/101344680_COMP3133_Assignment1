const employee = require('../model/employee');
const user = require('../model/user');

module.exports = {


//allow user to create new account

Mutation:{
createUser : async function({UserInput}){
    const user = new User({
        username: UserInput.username,
        email: UserInput.email,
        password: UserInput.password
    });
    const result = await user.save();
    return {...result._doc, _id: result.id};
}
},

//allow user to create new employee
createEmployee : async function({EmployeeInput}){
    const employee = new Employee({
        first_name: EmployeeInput.first_name,
        last_name: EmployeeInput.last_name,
        email: EmployeeInput.email,
        salary: EmployeeInput.salary
    });
    const result = await employee.save();
    return {...result._doc, _id: result.id};
},

//allow user to update employee
async updateEmployee(_,{ID, EmployeeInput:{first_name, last_name, email, salary}}){
    const wasUpdated = (await Employee.updateOne({_id: ID}, {$set: {first_name, last_name, email, salary}})).modifiedCount;
    return wasUpdated;
},

//allow user to delete employee
async deleteEmployee(_,{ID}){await Employee.deleteOne({_id: ID}).deleteCount;
    return wasDeleted;
},
}
