const employee = require('../model/employee');
const users = require('../model/user');

module.exports = {


//allow user to create new account

Mutation:{
    async createUser(_,{UserInput:{username, email, password}}){
        const user = new users({
            username,
            email,
            password
        })
        const newUser = await user.save();
        return {
            id:res.id,
            ...res.doc
        }
    },

//allow user to create new employee
    async createEmployee(_,{EmployeeInput:{first_name, last_name, email, salary}}){
        const Employee = new employee({
        first_name,
        last_name,
        email,
        salary
    })
},
//allow user to update employee
async updateEmployee(_,{ID, EmployeeInput:{first_name, last_name, email, salary}}){
    const wasUpdated = (await employee.updateOne({_id: ID}, {$set: {first_name, last_name, email, salary}})).modifiedCount;
    return wasUpdated;
},

//allow user to delete employee
async deleteEmployee(_,{ID}){await employee.deleteOne({_id: ID}).deleteCount;
    return wasDeleted;
}
}
}
