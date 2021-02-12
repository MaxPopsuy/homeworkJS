const myAverageScore = function(array1){
    let total = 0;
    let message;



    for(let arr of array1){ // (let i = 0; i < arr.length; i++)
        
        total += arr;     
    }
    
    const scores = total / array1.length;

    if (scores >= 91 && scores <= 100){
        message = "Score: A";
    }
    else if (scores >= 81 && scores <= 90){
        message = "Score: B";
    }
    else if (scores >= 71 && scores <= 80){
        message = "Score: C";
    }
    else {
       message = "Score: D";
    }

    return console.log(message);
};


myAverageScore([93, 99, 93, 96]);
