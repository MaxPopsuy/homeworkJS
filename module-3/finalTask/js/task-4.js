const countTotalSalary = function (employees) {
    let total = 0;
    const salaries = Object.values(employees);

    for(const employeesTotal of salaries){
        total += employeesTotal;
    }
    
    return total;
};


console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  })
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  })
); // 400
