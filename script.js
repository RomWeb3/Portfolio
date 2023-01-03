// Form Validation
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("mail");
const nameRegex = /^[a-zA-Z\s]{2,}$/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

nameInput.addEventListener("keyup", () => {
  if (!nameRegex.test(nameInput.value)) {
    nameInput.style.borderBottom = "1px solid red";
  } else {
    nameInput.style.borderBottom = "1px solid green";
  }
});

emailInput.addEventListener("keyup", () => {
  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.borderBottom = "1px solid red";
  } else {
    emailInput.style.borderBottom = "1px solid green";
  }
});

// Button Scroll to element

function scrollToElement() {
  document.querySelector(".container").scrollIntoView({ behavior: "smooth" });
}
