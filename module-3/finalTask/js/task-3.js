const findBestEmployee = function (employees) {
    let maxTasks = 0;
    let employeeName = "";
    let message = "";


    for(const[name, tasks] of Object.entries(employees)){
        if (maxTasks < tasks) {
            maxTasks = tasks;
            employeeName = name;
            message = `Лучший сотрудник: ${employeeName}; Выполнено задач: ${maxTasks}`;
            
          }
    }
    return message;
}

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  })
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
);
