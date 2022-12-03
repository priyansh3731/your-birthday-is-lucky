const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumber = document.querySelector("#check-number");
const message = document.querySelector("#output-box")

checkNumber.addEventListener("click",checkBirthDateIsLucky)



function calculateSum(dob){
    dob = dob.replaceAll("-","");
    
    let sum = 0;
     for(let i=0; i<dob.length; i++){
        sum = sum + Number(dob[i]);
     }
     return sum;
}

function checkBirthDateIsLucky(){
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if(sum&&dob){
        compareValues(sum,luckyNumber.value);
    }else{
        message.innerText="please enter the both fields";
    }
}

function compareValues(sum,luckyNumber){
    if(sum%luckyNumber===0){
        message.innerText="your birthday is lucky";
    }else{
        message.innerText="your birthday is not lucky";
    }
}