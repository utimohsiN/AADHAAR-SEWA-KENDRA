function validateForm() {
  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();

  if (name === "" || mobile === "") {
    alert("Please fill all required fields.");
    return false;
  }
  if (!/^\d{10}$/.test(mobile)) {
    alert("Please enter a valid 10-digit mobile number.");
    return false;
  }
  return true;
}

// WhatsApp floating button
const whatsappBtn = document.createElement("a");
whatsappBtn.href = "https://wa.me/917861020303";
whatsappBtn.target = "_blank";
whatsappBtn.innerText = "💬 Chat on WhatsApp";
whatsappBtn.style.position = "fixed";
whatsappBtn.style.bottom = "20px";
whatsappBtn.style.right = "20px";
whatsappBtn.style.background = "#25d366";
whatsappBtn.style.color = "white";
whatsappBtn.style.padding = "10px 15px";
whatsappBtn.style.borderRadius = "30px";
whatsappBtn.style.textDecoration = "none";
whatsappBtn.style.boxShadow = "0 0 5px rgba(0,0,0,0.3)";
document.body.appendChild(whatsappBtn);