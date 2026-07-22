function checkGrade() {
    let grade = parseFloat(document.getElementById("gradeInput").value);
    let result = document.getElementById("result");
    if(isNaN(grade) || grade > 100 || grade < 0){
        result.innerHTML = "Invalid Grade";
        return;
    }else if(grade >= 90 && grade <= 100){
        result.innerHTML = "Excellent ⭐⭐⭐";
        return;
    }else if(grade >= 75 && grade <= 89){
        result.innerHTML = "Very Good ⭐⭐";
        return;
    }else if(grade >= 50 && grade <= 74){
        result.innerHTML = "Pass ⭐";
        return;
    }else{
        result.innerHTML = "Fail ❌";
        return;
    }
}