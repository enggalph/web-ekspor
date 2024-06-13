function validateEmail(event) {
    var emailField = document.getElementById('email');
    var email = emailField.value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Pola regex untuk validasi email

    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Mencegah pengiriman form jika email tidak valid
      return false;
    }

    alert("Email is valid.");
    return true; // Lanjutkan pengiriman form jika email valid
  }
