function copyCode() {
  const code = document.getElementById("code").innerText;
  navigator.clipboard.writeText(code);
  const message = document.getElementById("copiedMessage");
  message.style.display = "block";
  setTimeout(() => {
    message.style.display = "none";
  }, 2000);
}
