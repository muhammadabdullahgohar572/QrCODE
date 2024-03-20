const container = document.querySelector(".container");
const qrcode_container = document.querySelector(".qrcode-container");
const qrcode_img = document.getElementById("qr-code");
const btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  const input = document.getElementById("inp");
  if (input.value.length > 0) {
    container.style.height = "350px";
    qrcode_container.style.height = "170px";
    qrcode_img.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${input.value}`;
  } else alert("Please Fill Input Field");
});
