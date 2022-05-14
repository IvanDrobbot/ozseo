const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const modal = document.querySelector(".modal");
const modal2 = document.querySelector(".modal-2");
const checker = document.querySelector("#checker");
const checkError = document.querySelector(".check-error");
const checkBtn = document.querySelector(".check-btn");
const checkInput = document.querySelector(".check-input");
const checkForm = document.querySelector(".check-form");
const checker2 = document.querySelector("#checker2");
const checkError2 = document.querySelector(".check-error2");
const checkBtn2 = document.querySelector(".check-btn2");
const checkInput2 = document.querySelector(".check-input2");
const checkForm2 = document.querySelector(".check-form2");
const checker3 = document.querySelector("#checker3");
const checkError3 = document.querySelector(".check-error3");
const checkBtn3 = document.querySelector(".check-btn3");
const checkInput3 = document.querySelector(".check-input3");
const checkForm3 = document.querySelector(".check-form3");
const widget = document.querySelector(".widget");



const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".close-modal");
const openModal2 = document.querySelectorAll(".open-modal-2");
const closeModal2 = document.querySelectorAll(".close-modal-2");
const openWidget = document.querySelectorAll(".open-widget");
const closeWidget = document.querySelectorAll(".close-widget");
const exAutoHeight = document.querySelectorAll(".ex-auto");
const prodAutoHeight = document.querySelectorAll(".prod-auto");
const footerAutoHeight = document.querySelectorAll(".footer-auto");



matchHeight(exAutoHeight);
matchHeight(prodAutoHeight);
matchHeight(footerAutoHeight);


function validateEmail(email){
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};


burger.addEventListener("click", () =>{
    burger.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});

openModal.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.add("active");
    });
});

closeModal.forEach(btn => {
    btn.addEventListener("click", () => {
        modal.classList.remove("active");
    });
});
openModal2.forEach(btn => {
    btn.addEventListener("click", () => {
        modal2.classList.add("active");
    });
});

closeModal2.forEach(btn => {
    btn.addEventListener("click", () => {
        modal2.classList.remove("active");
    });
});
checkInput.addEventListener("input", () => {
    if(checkInput.value.length < 17){
        checkError.innerHTML = "Введите корректный номер телефона.";
        
        if(checkError.classList.contains("hidden")){
            checkError.classList.remove("hidden");
        }
    }
    else{
        if(!checkError.classList.contains("hidden")){
            checkError.classList.add("hidden");
        }
    }
});
checkBtn.addEventListener("mouseover", (e) =>{
    if(checkInput.value.length >= 17 && checker.checked ){
        if(!checkBtn.classList.contains("allow")){
            checkBtn.classList.add("allow");
        }
    }
    else if(checkBtn.classList.contains("allow")){
        checkBtn.classList.remove("allow");
    }
});

checkBtn.addEventListener("click", (e) =>{
    e.preventDefault();

    if(checkInput.value.length >= 17 && checker.checked){
        checkForm.submit();
    }
});

checkInput2.addEventListener("input", () => {

    if(!validateEmail(checkInput2.value)){
        checkError2.innerHTML = "Введите корректный адрес.";
        
        if(checkError2.classList.contains("hidden")){
            checkError2.classList.remove("hidden");
        }
    }
    else{
        if(!checkError2.classList.contains("hidden")){
            checkError2.classList.add("hidden");
        }
    }
});
checkBtn2.addEventListener("mouseover", () =>{
    if(validateEmail(checkInput2.value) && checker2.checked){
        if(!checkBtn2.classList.contains("allow")){
            checkBtn2.classList.add("allow");
        }
    }
    else if(checkBtn2.classList.contains("allow")){
        checkBtn2.classList.remove("allow");
    }
});

checkBtn2.addEventListener("click", (e) =>{
    e.preventDefault();

    if(validateEmail(checkInput2.value) && checker2.checked){
        checkForm2.submit();
    }
});


checkInput3.addEventListener("input", () => {
    if(checkInput3.value.length < 17){
        checkError3.innerHTML = "Введите корректный номер телефона.";
        
        if(checkError3.classList.contains("hidden")){
            checkError3.classList.remove("hidden");
        }
    }
    else{
        if(!checkError3.classList.contains("hidden")){
            checkError3.classList.add("hidden");
        }
    }
});
checkBtn3.addEventListener("mouseover", (e) =>{
    if(checkInput3.value.length >= 17 && checker3.checked ){
        if(!checkBtn3.classList.contains("allow")){
            checkBtn3.classList.add("allow");
        }
    }
    else if(checkBtn3.classList.contains("allow")){
        checkBtn3.classList.remove("allow");
    }
});

checkBtn3.addEventListener("click", (e) =>{
    e.preventDefault();

    if(checkInput3.value.length >= 17 && checker3.checked){
        checkForm3.submit();
    }
});


openWidget.forEach(open => {
    open.addEventListener("click", () => {
        widget.classList.toggle("active");
    });
});
closeWidget.forEach(close => {
    close.addEventListener("click", () => {
        widget.classList.toggle("active");
    });
});