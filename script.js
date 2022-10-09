const ham = document.getElementById("ham");
const menu = document.getElementById("menu");
const close = document.querySelectorAll('.close');
const form = document.getElementById('formSubmit');
var formSuccess = document.getElementById("form-success");
var formError = document.getElementById("form-errors");
var email = document.getElementById('userEmail');

const closeMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");

    console.log("open");
  }
  ham.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>'
}

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    ham.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>'
    console.log("open");
  } else {
    menu.classList.add("open");
    ham.innerHTML = '<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path></svg>'
    console.log("close");
  }
};
ham.addEventListener("click", toggleMenu);
close.forEach(ele => {
  ele.addEventListener("click", closeMenu);
}
)

async function submitForm(e) {
  e.preventDefault();
  const myFormData = new FormData(e.target);
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (!filter.test(email.value)) {
    email.focus();
    alert('Please provide a valid email address');
    return;
  }

  try {
    await fetch('https://formspree.io/f/mpznrpra', {
      method: form.method,
      body: myFormData,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        formSuccess.style.display = 'block';
        form.reset()
      } else {
        response.json().then(data => {
          if (Object.hasOwn(data, 'errors')) {
            formError.style.display = 'block';
            formError.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            alert(data["errors"].map(error => error["message"]).join(", "));
          } else {
            formError.style.display = 'block';
            formError.innerHTML = "Oops! There was a problem submitting your form"
          }
        })
      }
    })
  } catch (error) {
    formError.style.display = 'block';
    formError.innerHTML = "Oops! There was a problem submitting your form. Try checking internet connection."
  }
  setTimeout(() => {
    formSuccess.style.display = 'none';
    formError.style.display = 'none';
    return;
  }, 4000);
}

form.addEventListener("submit", submitForm);
// bottom to top button
const backTopElement = document.getElementById("back-top-div");
      const minScolledAmountToBackTop = 150;

      window.addEventListener("scroll", () => {
        if (window.scrollY < minScolledAmountToBackTop) {
          backTopElement.classList.add("hidden");
        } else {
          backTopElement.classList.remove("hidden");
        }
      });

      const backTop = () => {
        window.scrollTo(0, 0);
      };

      backTopElement.addEventListener("click", backTop);
      ham.addEventListener("click", toggleMenu);