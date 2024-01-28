document.addEventListener("DOMContentLoaded", function () {
  // Get the form element
  var form = document.querySelector("#contact_us_form");

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add your form validation logic here if needed
    // For example, check if the required fields are filled

    // Collect form data
    var formData = {
      name: form.querySelector('[placeholder="Your name"]').value,
      email: form.querySelector('[placeholder="Your email address"]').value,
      phone: form.querySelector('[placeholder="Phone number"]').value,
      website: form.querySelector('[placeholder="Your website"]').value,
      message: form.querySelector('[placeholder="What are you looking for?"]').value,
    };

    // You can perform further actions with the form data, such as sending it to a server
    // For now, let's log the data to the console
    console.log("Form data:", formData);

    // You can also reset the form after submission
    form.reset();
  });
});
