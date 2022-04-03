const CONTENT_NEGOTIATION_HEADERS = {
    "Content-Type": "application/json",
    "Accept": "application/json"
};

// login
const loginForm = document.querySelector("#loginFormId");
loginForm.addEventListener("submit", (event) => {
    event.preventDefault()

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());

    fetch("/login", {
        method: "POST",
        headers: CONTENT_NEGOTIATION_HEADERS,
        body: JSON.stringify(data)
    }).then(function (response) {
        if (!response.ok) {
            alert("Login failed");
        }
        const headers = response.headers;
        const authorizationHeader = headers.get("authorization");
        const jwt = authorizationHeader.split(" ")[1];
        const email = document.getElementById('nameId').value;
        window.sessionStorage.setItem("jwt", jwt)
        window.sessionStorage.setItem("email", email)
        window.location.href="html/dashboard.html";
    })
        .catch(error => console.error(error));
});


/////////////////////////////Registreren////////////////////////////////////////////////

const registerForm = document.querySelector("#registrationFormId");
registerForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const registerFormData = new FormData(event.target);
    const data = Object.fromEntries(registerFormData.entries());

    fetch("http://localhost:8080/register", {
        method: "POST",
        headers: CONTENT_NEGOTIATION_HEADERS,
        body: JSON.stringify(data)
    }).then(function (response) {
        console.log(response)
        if (!response.ok) {
            alert("register failed")
        }
        window.location.href="index.html";
        alert("register succeeded");
        event.stopImmediatePropagation();
    })
        .catch(error => console.error(error));
});
