    var form = document.getElementById("contact-form");

    async function handleSubmit(event) {
      event.preventDefault();
      var statusText = document.getElementById("status");
      var statusContainer = document.getElementById("statusContainer");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          statusContainer.style.display = 'flex';
          statusContainer.style.animation = 'fading 6s ease-in-out';
          statusText.innerHTML = "Thank you for your message!";
          // make the container dissapear after 6 seconds so that users can write again
          setTimeout(function () {
            statusContainer.style.display = 'none';
          }, 6000);

          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              statusText.textContent = data["errors"].map(error => error["message"]).join(", ")
            } else {
              statusContainer.style.background= "red";
              statusText.textContent = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }

    form.addEventListener("submit", handleSubmit)