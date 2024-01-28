const submit = document.querySelector("input[type=submit]");
const nameField = document.querySelector("#name");
const imageField = document.querySelector('input[type=file]');
const image = document.querySelector("img");

submit.addEventListener("click", ()=>{
    sessionStorage.setItem("userName", nameField.value);
    file = imageField.files[0];
    sessionStorage.setItem("userImage", URL.createObjectURL(file));
});

submit.addEventListener("click", (e)=> {
    // adding an event listener to each "submit" button
    // that checks if the associated form has all required fields filled out
    
    let allAreFilled = true;    // assume fields are filled out by default
    button.parentElement.querySelectorAll("[required]").forEach(function(i) {
    if(!allAreFilled) return;   // if one of the prev required fields is empty, just return so as to not waste time
    
    if(!i.value) 
        allAreFilled = false;  // if there is no value, then the required field is not filled
    
    if(i.tagName.toLowerCase() === "select"){
        if(i.value === "select") 
            allAreFilled = false;
    }
    });
    
    if(!allAreFilled){
        setInterval(() => button.classList.add("invalidSubmitAnimation"), 200);
        button.classList.remove("invalidSubmitAnimation");
        return;
    }

    // if user is making a reservation, then give them a reservation ID after they complete it
    if(button.parentElement.className === "inputForm"){
        var resIdNotif = document.querySelector(".resIdNotif");
        var resId = resIdNotif.querySelector("span");
        resId.innerText = generateID();
        resIdNotif.style.display = "block";
    }

    alertElement.style.opacity = '1';
});