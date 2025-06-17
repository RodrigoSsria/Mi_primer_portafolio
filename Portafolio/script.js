document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
  
    if (name && email && message) {
      alert(`Gracias por tu mensaje, ${name}! Te responderé a ${email} pronto.`);
      event.target.reset();
    } else {
      alert("Por favor, completa todos los campos.");
    }
  });