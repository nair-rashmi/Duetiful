function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form_message");

    messageElement.textContent = message;
    messageElement.classList.remove("form_message-success", "form_message-error");
    messageElement.classList.add(`form_message-${type}`);
};

function setInputError(inputElement, message) {
    inputElement.classList.add("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = message;
};

function clearInputError(inputElement) {
    inputElement.classList.remove("form_input-error");
    inputElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

function setPwdError(passwordElement, message) {
    passwordElement.classList.add("form_input-error");
    passwordElement.parentElement.querySelector(".form_input-error-message").textContent = message;
};

function clearPwdError(passwordElement) {
    passwordElement.classList.remove("form_input-error");
    passwordElement.parentElement.querySelector(".form_input-error-message").textContent = "";
}

//setFormMessage(loginForm, "success", "login successful!")

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");
    const passwordElement = document.querySelector("#signupPassword");
    const confirmPasswordElement = document.getElementById("signupConfirmPassword");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form-hidden");
        createAccountForm.classList.remove("form-hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form-hidden");
        createAccountForm.classList.add("form-hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        // AJAX/Fetch login
        setFormMessage(loginForm, "error", "incorrect username or password")
    });

    // Username validation
    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 6) {
                setInputError(inputElement, "username must be between 6 and 15 characters long");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

    document.querySelectorAll(".form_input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 15) {
                setInputError(inputElement, "username must be less than 15 characters long");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });

    // Password validation
    passwordElement.addEventListener("blur", e => {
        const password = passwordElement.value;
        let errorMessage = "";

        // character length
        if (password.length > 0 && password.length < 6) {
            errorMessage = "password must be 6 or more characters long";
        } 
        // uppercase character
        else if (!/[A-Z]/.test(password)) {
            errorMessage = "password must contain at least 1 uppercase character";
        }
        // lowercase character
        else if (!/[a-z]/.test(password)) {
            errorMessage = "password must contain at least 1 lowercase character";
        }
        // number
        else if (!/[0-9]/.test(password)) {
            errorMessage = "password must contain at least 1 number";
        }
        // special characters
        else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            errorMessage = 'password must contain at least 1 special character. choose from one of these: !@#$%^&*(),.?":{}|<>';
        }

        if (errorMessage) {
            setPwdError(passwordElement, errorMessage);
        }
    });

    passwordElement.addEventListener("input", e => {
        clearPwdError(passwordElement);
    });

    // Confirm password validation
    confirmPasswordElement.addEventListener("blur", e => {
        const password = passwordElement.value;
        const confirmPassword = confirmPasswordElement.value;

        if (password !== confirmPassword) {
            setPwdError(confirmPasswordElement, "passwords do not match up");
        }
    });

    confirmPasswordElement.addEventListener("input", e => {
        clearPwdError(confirmPasswordElement);
    });
});
