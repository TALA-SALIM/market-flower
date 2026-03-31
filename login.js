const loginForm = document.getElementById("login");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const message = document.getElementById("massege");
const registerButton = document.getElementById("register");

registerButton.addEventListener("click", function () {
  window.location.href = "reg.html";
});

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (!email || !password) {
    message.textContent = "يرجى تعبئة جميع الحقول";
    message.style.color = "red";
    return;
  }

  try {
    const API_URL = "https://market-flower-production.up.railway.app";

fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      message.textContent = data.message;
      message.style.color = "green";

      setTimeout(() => {
        window.location.href = "home.html";
      }, 1000);
    } else {
      message.textContent = data.message;
      message.style.color = "red";
    }
  } catch (error) {
    message.textContent = "تعذر الاتصال بالسيرفر";
    message.style.color = "red";
  }
});