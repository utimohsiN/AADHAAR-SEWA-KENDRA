document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('appointmentForm');
  if(form) {
    form.addEventListener('submit', () => {
      localStorage.setItem('appointmentName', form.name.value);
      localStorage.setItem('appointmentPhone', form.phone.value);
      localStorage.setItem('appointmentDate', form.date.value);
    });
  }
});