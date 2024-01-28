const submit = document.querySelector(".submit");
const nameField = document.querySelector("#name");
const imageField = document.querySelector('input[type=file]');
const image = document.querySelector("img");

submit.addEventListener("click", ()=>{
    sessionStorage.setItem("userName", nameField.value);
    file = imageField.files[0];
    sessionStorage.setItem("userImage", URL.createObjectURL(file));

    // adding an event listener to each "submit" button
    // that checks if the associated form has all required fields filled out
    
    let allAreFilled = true;    // assume fields are filled out by default
    submit.parentElement.querySelectorAll("[required]").forEach(function(i) {
    if(!allAreFilled) return;   // if one of the prev required fields is empty, just return so as to not waste time
    
    if(!i.value) 
        allAreFilled = false;  // if there is no value, then the required field is not filled
    
    if(i.tagName.toLowerCase() === "select"){
        if(i.value === "select") 
            allAreFilled = false;
    }
    });
    
    if(!allAreFilled){
        return;
    }
    
    submit.setAttribute('href', "maps.html");
});