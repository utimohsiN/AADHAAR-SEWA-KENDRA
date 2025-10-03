// Basic client-side handling: validation and simulated submission
document.addEventListener('DOMContentLoaded', function(){
  var contactForm = document.getElementById('contactForm');
  if(contactForm){
    contactForm.addEventListener('submit', function(e){
      e.preventDefault();
      // In a real setup, you'd send this to a server or Netlify/Forms endpoint.
      alert('Message sent — we will contact you soon.');
      contactForm.reset();
    });
  }

  var appointmentForm = document.getElementById('appointmentForm');
  if(appointmentForm){
    appointmentForm.addEventListener('submit', function(e){
      e.preventDefault();
      // Simple validation example (phone pattern enforced by HTML too)
      var phone = document.getElementById('phone').value || '';
      if(!phone.match(/^\d{10}$/)){
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }
      // Save to localStorage as a simple mock (so user can see it in browser)
      var appt = {
        name: document.getElementById('pname').value,
        phone: phone,
        service: document.getElementById('service').value,
        date: document.getElementById('date').value,
        timestamp: Date.now()
      };
      var arr = JSON.parse(localStorage.getItem('appointments') || '[]');
      arr.push(appt);
      localStorage.setItem('appointments', JSON.stringify(arr));
      // Redirect to thank-you page
      window.location.href = 'thank-you.html';
    });
  }
});
