const loginForm = document.querySelector(".login-form");
const erorMassege = document.createElement("p");
errorMessage.classList.add("error-message");
errorMessage.textContent = "All form fields must be filled in!";
errorMessage.style.display = "none";


loginForm.appendChild(errorMessage);
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {

  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();
  
  if (email === "" || password === "") {
    errorMessage.style.display = "block";
    return;
  }

  const userData = {
    Email: email, 
    Password: password,
  }

  console.log(userData);
  form.reset();
  errorMessage.style.display = "none";
}
