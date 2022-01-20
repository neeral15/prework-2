var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var form = document.getElementById("form");

const validateForm=()=>{

    if (age.value=="" ||   height.value=="" || weight.value=="" )  {
        alert("All fields are reqired!");
        document.getElementById("submit").removeEventListener("click",countBmi);

    }else{
        countBmi();
    }
}

document.getElementById("submit").addEventListener("click",validateForm);