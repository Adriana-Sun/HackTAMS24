const submit = document.querySelector("input[type=submit]");
const nameField = document.querySelector("#name");
const imageField = document.querySelector('input[type=file]');
const image = document.querySelector("img");

submit.addEventListener("click", ()=>{
    sessionStorage.setItem("userName", nameField.value);
    file = imageField.files[0];
    sessionStorage.setItem("userImage", URL.createObjectURL(file));
});