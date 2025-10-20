document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  let isValid = true;

  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const subject = document.getElementById('subject');
  const message = document.getElementById('message');
  const success = document.getElementById('success');

  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  function showError(el, msg) {
    document.getElementById(`error-${el.id}`).textContent = msg;
    el.setAttribute('aria-invalid', 'true');
    isValid = false;
  }

  function clearError(el) {
    document.getElementById(`error-${el.id}`).textContent = '';
    el.removeAttribute('aria-invalid');
  }

  // Validation rules
  name.value.trim() ? clearError(name) : showError(name, 'Full name is required');
  emailRegex.test(email.value) ? clearError(email) : showError(email, 'Enter a valid email');
  subject.value.trim() ? clearError(subject) : showError(subject, 'Subject is required');
  message.value.trim().length >= 10 ? clearError(message) : showError(message, 'Message must be ≥ 10 chars');

  if (isValid) {
    success.hidden = false;
    e.target.reset();
  } else success.hidden = true;
});
