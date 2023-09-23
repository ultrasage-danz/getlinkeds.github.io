
function success() {
    window.location.href = "success.html";
}

function register() {
    window.location.href = "register.html";
}

function submit() {
    window.location.href = "success.html";
}

function ReadMore() {
    window.location.href = "success.html";
    
}

function Back() {
    window.location.href = "main.html";
}


const myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(e.target);

      const formDataObject = {};
      formData.forEach((value, key) => {
        formDataObject[key] = value;
      });
      
      fetch('https://backend.getlinked.ai/hackathon/contact-form', {
        method: 'POST',
        headers:{
          'Content-Type': 'application/json', 
      }, body:
      JSON.stringify(formDataObject),})
      .then((Response) => Response.json())
      .then((data) => {
          ReadMore();

      })
      .catch((error) => {
          success();
      })
});



myForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const formData = new FormData(e.target);

  const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });
  
  fetch('https://backend.getlinked.ai/hackathon/registration', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json', 
  }, body:
  JSON.stringify(formDataObject),})
  .then((Response) => Response.json())
  .then((data) => {
      ReadMore();

  })
  .catch((error) => {
      success();
  })
});









const http = require('http');
 
const hostname = '127.0.0.1';
const port = 3000;
 

 
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

function myFunctions() {
  // submit();
  const inpObj = document.getElementById("fname");
  if (inpObj = null) {
    alert("This must not be empty");
  } else {
    document.getElementById("reg").addEventListener("click", submit());

    
  };
  
  
};




/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  