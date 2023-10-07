// src/index.js

/**
 * Get the value of a cookie by its name.
 * @param {string} name - The name of the cookie.
 * @returns {string} - The value of the cookie, or an empty string if the cookie doesn't exist.
 */

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

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
      const cookiePair = cookies[i].split('=');
      if (cookiePair[0] === name) {
        return cookiePair[1];
      }
    }
    return '';
  }
  
  /**
   * Display cookies as Email: EMAIL - Firstname: FIRSTNAME.
   */
  function showCookies() {
    const email = getCookie('email');
    const firstname = getCookie('firstname');
    const cookiesParagraph = document.createElement('p');
    cookiesParagraph.innerHTML = `Email: ${email} - Firstname: ${firstname}`;
    document.body.appendChild(cookiesParagraph);
  }
  
  