const burger = document.querySelector(".burger");
const burgerMenu = document.querySelector(".burger-menu");
const modal = document.querySelector(".modal");
const checker = document.querySelector("#checker");
const checkError = document.querySelector(".check-error");
const checkBtn = document.querySelector(".check-btn");
const checkInput = document.querySelector(".check-input");
const checkForm = document.querySelector(".check-form");

const openModal = document.querySelectorAll(".open-modal");
const closeModal = document.querySelectorAll(".close-modal");

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
