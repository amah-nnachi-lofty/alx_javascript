// src/index.js
// Function to set cookies
function setCookies() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
    document.cookie = `firstname=${firstname}`;
    document.cookie = `email=${email}`;
  }
  
  // Function to show cookies
  function showCookies() {
    const cookiesParagraph = document.createElement('p');
    const cookiesValue = document.cookie;
    cookiesParagraph.innerHTML = `Cookies: ${cookiesValue}`;
    document.body.appendChild(cookiesParagraph);
  }
  