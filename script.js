const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

const toggle = document.getElementById('darkModeToggle')
const body = document.body;

menuIcon.addEventListener('click',() => {
    navLinks.classList.toggle('active');
})

toggle.addEventListener('click',() => {
    body.classList.toggle('dark-mode');

    if(body.classList.contains('dark-mode')){
        toggle.classList.remove('fa-moon');
        toggle.classList.add('fa-sun')
    } else {
        toggle.classList.remove('fa-sun');
        toggle.classList.add('fa-moon')
    }
})

// function DownloadCV(){
//     const handleDownload = () => {
//        const link = document.createElement('a');
//        link.href = './images/PavanGaikwadResume.pdf';
//        link.download = 'My_CV.pdf';
//        link.click();
//     } 
// }


  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const submitBtn = form.querySelector("button");
    
    // Create a message element
    const message = document.createElement("p");
    message.style.marginTop = "10px";
    form.appendChild(message);

    form.addEventListener("submit", async function (e) {
      e.preventDefault(); // prevent page reload

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending...";

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          message.textContent = "✅ Message sent successfully!";
          message.style.color = "green";
          form.reset();
        } else {
          message.textContent = "❌ Failed to send message. Try again.";
          message.style.color = "red";
        }
      } catch (error) {
        message.textContent = "⚠️ An error occurred. Check your connection.";
        message.style.color = "red";
      }

      submitBtn.disabled = false;
      submitBtn.textContent = "Send Message";
    });
  });

