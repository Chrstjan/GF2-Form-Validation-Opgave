const formParent = document.querySelector(".form-validation");

const form = document.getElementById("myForm");
const fName = document.getElementById("fNavn");
const lName = document.getElementById("lName");
const address = document.getElementById("address");
const MypostNum = document.getElementById("postNumber");
const postNumRegExp = /^[0-9]{2, }$/;
const myEmail = document.getElementById("Email");

const errorMessages = document.getElementsByClassName("errorMessage");

form.addEventListener("submit", (e) => {
     e.preventDefault();
     
    let trimmedFName = fName.value.trim();

    if (trimmedFName.length >= 2 ) {
        console.log("Navn er ok");
        fName.classList.add("formSucess");
        errorMessages[0].innerHTML = "";
    }
    else {
        console.log("fornavn er ikke ok");
        fName.classList.add("formError");
        errorMessages[0].innerHTML = "Fornavn skal være mindst 2 karaktere";
    }

    let trimmedLName = lName.value.trim();
    
    if (trimmedLName.length >= 2) {
        console.log("efternavn er ok");
        lName.classList.add("formSucess");
        errorMessages[1].innerHTML = "";
    }
    else {
        console.log("efternavn er ikke ok");
        lName.classList.add("formError");
        errorMessages[1].innerHTML = "Efternavn skal være mindst 2 karaktere";

    }

    let trimmedAdresse = address.value.trim();
    if (trimmedAdresse.length >= 5) {
        console.log("Adresse er ok");
        address.classList.add("formSucess");
        errorMessages[2].innerHTML = "";

    }
    else {
        console.log("Adresse er ikke ok");
        address.classList.add("formError");
        errorMessages[2].innerHTML = "Adresse skal være mindst 5 karaktere";

    }

    const validatePost = (post) => {
        let postRegExp = /^[0-9]/;

        let isPostValid = postRegExp.test(post);

        return isPostValid;
    }

    if (validatePost(MypostNum.value)) {
        console.log("postnummer er ok");
        MypostNum.classList.add("formSucess");
        errorMessages[3].innerHTML = "";

    }
    else {
        console.log("postnummer er ikke ok");
        MypostNum.classList.add("formError");
        errorMessages[3].innerHTML = "Postnummer må kun være tal";

    }

    const validateEmail = (email) => {
        let emailRegExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isEmailValid = emailRegExp.test(email);

        return isEmailValid;
    }

    if (validateEmail(myEmail.value)) {
        console.log("email er ok");
        myEmail.classList.add("formSucess");
        errorMessages[4].innerHTML = "";

    }
    else {
        console.log("email er ikke ok");
        myEmail.classList.add("formError");
        errorMessages[4].innerHTML = "Email skal indeholde et @ og et .";

    }


    if (trimmedFName && trimmedLName && trimmedAdresse && validatePost && validateEmail) {
        formParent.innerHTML = "";
        const congratz = document.createElement("h1");
        congratz.innerText = "tiløk!";
        formParent.appendChild(congratz);
        console.log("form er udfyldt korrekt!");
        console.table(form);
    }
    else {
        console.log("Form er ikke udfyldt korrekt");
        console.table(form);
    }
});