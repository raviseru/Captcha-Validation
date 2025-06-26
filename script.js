let captchaText = document.getElementById("captchaText");
let captchaEnter = document.getElementById("captchaEnter");
let refreshbtn = document.getElementById("refreshbtn");
let validatebtn = document.getElementById("validatebtn");

let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
let captcha;

function generateCaptcha() {
  captcha = "";
  for (let i = 0; i < 7; i++) {
    captcha += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  captchaText.value = captcha;
}

function validateCaptcha() {
  if (captcha === captchaEnter.value.trim()) {
    alert(" Captcha is valid!");
    captchaEnter.value = "";
    generateCaptcha(); // refresh for next use
  } else {
    alert(" Captcha is invalid. Please try again.");
  }
}

generateCaptcha();
refreshbtn.onclick = generateCaptcha;
validatebtn.onclick = validateCaptcha;
