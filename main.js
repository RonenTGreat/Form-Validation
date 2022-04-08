let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let username = id("username"),
    email = id("email"),
    password = id("password"),
    form = id("form"),

    erorMsg = classes("error"),
    successIcon = classes("success-icon"),
    failureIcon = classes("failure-icon");


form.addEventListener("submit", (e) => {
    e.preventDefault();

    engine(username, 0, "Username cannot be blank.");
    engine(email, 1, "Email cannot be blank");
    engine(password, 2, "Password cannnot be blank");
})

let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
        erorMsg[serial].innerHTML = message;
        id.style.border = "2px solid red";

        failureIcon[serial].style.opacity = "1";
        successIcon[serial].style.opacity = "0"
    }else{
        erorMsg[serial].innerHTML = "";
        id.style.border = "2px solid green";

        failureIcon[serial].style.opacity = "0";
        successIcon[serial].style.opacity = "1";
    }
}
