const employee = require('../model/employee');
const user = require('../model/user');

module.exports = {

//MUTATION SECTION starts here
//allow user to create new account
Mutation:{
    async createUser(_,{userInput:{username, password, email}}){
    //    const currentUser = await user.find({username})
    //    if(currentUser){
    //           throw new Error('User already exists')
    //    } 
       const newUser = await user.create({
            username,
            password,
            email
       })
        const res = await newUser.save()
        return res;
},

// // //allow user to create new employee
    async createEmployee(_,{employeeInput:{first_name,last_name,email,gender,salary}}){
        const newEmployee = await employee.create({
            first_name,
            last_name,
            email,
            gender, 
            salary
    })
        const res = await newEmployee.save()
        return res;
},

// // //update employee by ID   

    async updateEmployee(_,{ID, employeeInput:{first_name, last_name, email, salary}}){
        const updatedEmployee = await employee.findByIdAndUpdate(ID,{
            first_name,
            last_name,
            email,
            salary
        })
        const res = await updatedEmployee.save()
        return res;
    },

// //allow user to delete employee
    async deleteEmployee(_,{ID}){
        try{
            await employee.findByIdAndDelete(ID)
            return true;
        }catch(err){
            return false;
        }
    },
// // QUERY SECTION starts here 
Query:{
// //allow user to view all employees

    // async getUsers(){
    //     const users = await user.find()
    //     return {
    //         message:"Successfully fetched all employees",
    //         users
    //     }
    // }


    // allowing accwess to system
    

    //search employee by ID
    async employeeID(_,{ID, employeeInput:{first_name, last_name, email, salary}}){
        const checkEmployee = await employee.findById(ID,{
            first_name,
            last_name,
            email,
            salary
        })
        const res = await checkEmployee.save()
        return res;
    },



}
}
}




