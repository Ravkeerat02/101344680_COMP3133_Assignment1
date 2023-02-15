const employee = require('../model/employee');
const user = require('../model/user');

module.exports = {

//MUTATION SECTION starts here
//allow user to create new account

Mutation:{
    async createUser(_,{userInput:{username, password,email}}){
        const createdUser = new user({
            username : username,
            password  :password,
            email : email
    });
    const res = await createdUser.save();

    return{
        id: res.id,
        ...res.doc, //showing different fields of user
    }
    }
},

// //allow user to create new employee
    async createEmployee(_,{employeeInput:{first_name, last_name, email, salary , gender}}){
        const createdEmployee = new employee({
            first_name : first_name,
            last_name  : last_name,
            email : email,
            salary: salary,
            gender: gender
    })
        const res = await createdEmployee.save();

        return {
            id: res.id,
            ...res.doc, //showing different fields of employee
        }
},
// //allow user to update employee

async updateEmployee(_,{ID, EmployeeInput:{first_name, last_name, email, salary}}){
    const wasUpdated = (await employee.updateOne({_id: ID}, {$set: {first_name, last_name, email, salary}})).modifiedCount;
    return wasUpdated;
},

//allow user to delete employee
async deleteEmployee(_,{ID}){
    await employee.deleteOne({_id: ID}).deleteCount;
    return true;
},

// QUERY SECTION starts here 
Query:{
    //allow user to access system 
    async getUser(_,{UserInput:{username, password,email}}){
        const user = await user.find({username, password,email});
        return user
    },
    
//select employee by ID 
    async employeeID(_,{ID}){
        return await employee.findById(ID);
    },
//get all employee
    async viewEmployees(){
        const employees = await employee.find();
        return employees.map(employee => {
            return {
                id: employee.id,
                ...employee.doc
            }
        })
}
}
}



