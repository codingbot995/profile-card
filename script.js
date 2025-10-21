// Profile Card time updater (real-time)
document.addEventListener("DOMContentLoaded", () => {
  const timeEl = document.getElementById("currentTime");
  if (timeEl) {
    const updateTime = () => {
      timeEl.textContent = Date.now();
    };
    updateTime(); // Set immediately
    setInterval(updateTime, 1000); // Update every 1 second
  }
});

// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const successMsg = document.getElementById("successMsg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    const errors = {
      name: document.getElementById("error-name"),
      email: document.getElementById("error-email"),
      subject: document.getElementById("error-subject"),
      message: document.getElementById("error-message")
    };

    let isValid = true;
    Object.values(errors).forEach(err => err.textContent = "");

    if (!name.value.trim()) {
      errors.name.textContent = "Full name is required.";
      isValid = false;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!email.value.trim()) {
      errors.email.textContent = "Email is required.";
      isValid = false;
    } else if (!emailPattern.test(email.value)) {
      errors.email.textContent = "Please enter a valid email.";
      isValid = false;
    }

    if (!subject.value.trim()) {
      errors.subject.textContent = "Subject is required.";
      isValid = false;
    }

    if (!message.value.trim()) {
      errors.message.textContent = "Message is required.";
      isValid = false;
    } else if (message.value.trim().length < 10) {
      errors.message.textContent = "Message must be at least 10 characters.";
      isValid = false;
    }

    if (isValid) {
      successMsg.hidden = false;
      form.reset();
      setTimeout(() => successMsg.hidden = true, 4000);
    }
  });
});
