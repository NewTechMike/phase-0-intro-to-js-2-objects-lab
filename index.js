// Write your solution in this file!

const employee = {
    name: 'Bob' ,
    streetAddress: '123 Fake st'
};

function updateEmployeeWithKeyAndValue(employee, key, value){
//Takes 3 arguements: employee object, key and value
//Return new object with updated value for key 
//Does NOT mutate
    const newObj = {...employee};
    return Object.assign({}, newObj, { [key]: value })
}; 

const newEmp = updateEmployeeWithKeyAndValue(employee, 'Bob', '432 Unknown ave');
console.log(newEmp);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
//Same as function above but DOES mutate
    return Object.assign(employee, { [key]: value });
};

function deleteFromEmployeeByKey(employee, key){
//deletes property from key passed
//Does NOT mutate, returns new object
    const newObj = {...employee};
    delete newObj[key];
    return newObj;
};

function destructivelyDeleteFromEmployeeByKey(employee, key){
//Same as previous function but DOES mutate employee object
    delete employee[key];
    return employee;
};