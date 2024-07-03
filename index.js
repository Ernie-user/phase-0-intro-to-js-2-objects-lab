const employee = {
    name: "John",
    streetAddress: "100 Lane St.",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...obj,
        [key]: value,
    };
}
const newEmployeeName = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Mike"
);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    {
        obj[key] = value;
        return obj;
    };
}
const newEmployeeAddress = destructivelyUpdateEmployeeWithKeyAndValue(
    employee,
    "streetAddress",
    "101 Lane St."
);

function deleteFromEmployeeByKey(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
};
const addEmployeeWithNoName = deleteFromEmployeeByKey(
    employee,
    "name",
    delete addEmployeeWithNoName.name
);

function destructivelyDeleteFromEmployeeByKey(obj, key, value) {
    obj[key] = value;
    return obj;
};
const deleteEmployeeAddress = destructivelyDeleteFromEmployeeByKey(
    employee,
    "streetAddress",
    delete deleteEmployeeAddress.streetAddress
);