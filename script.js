function scrollToContact() {
    document.getElementById('Contact').scrollIntoView({ behavior: 'smooth' });
}


document.addEventListener("scroll", function () {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
  
  // script.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghentikan form dari pengiriman standar
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Terima kasih, ${name}! Pesan Anda telah terkirim.`);
        document.getElementById('contact-form').reset(); // Mengosongkan form
    } else {
        alert('Harap lengkapi semua kolom.');
    }
});
