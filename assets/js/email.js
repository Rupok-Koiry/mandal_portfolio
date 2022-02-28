document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const alert = document.getElementById("contact-alert");

  emailjs
    .sendForm(
      "service_dbzcgrj",
      "template_qxgrwo4",
      document.getElementById("contact-form"),
      "8QfBbOi7cluZpl7F5"
    )
    .then(
      function (response) {
        // console.log("SUCCESS!", response.status, response.text);
        alert.classList.remove("d-none");
        alert.textContent = "Your message sent successfully!";
        event.target.reset();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
});
