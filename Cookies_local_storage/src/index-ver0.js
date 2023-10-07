// src/index.js

// Function to set cookies with a 10-day expiration
function setCookies() {
  const firstname = document.getElementById('firstname').value;
  const email = document.getElementById('email').value;

  // Calculate expiration date for cookies (10 days from now)
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 10);

  // Set cookies with first name, email, and 10-day expiration date
  document.cookie = `firstname=${firstname}; expires=${expirationDate.toUTCString()}`;
  document.cookie = `email=${email}; expires=${expirationDate.toUTCString()}`;
}

// Function to show cookies
function showCookies() {
  const cookiesParagraph = document.createElement('p');
  const cookiesValue = document.cookie;
  cookiesParagraph.innerHTML = `Cookies: ${cookiesValue}`;
  document.body.appendChild(cookiesParagraph);
}
