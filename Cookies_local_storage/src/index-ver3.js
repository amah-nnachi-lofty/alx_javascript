// src/index.js

/**
 * Get the value of a cookie by its name.
 * @param {string} name - The name of the cookie.
 * @returns {string} - The value of the cookie, or an empty string if the cookie doesn't exist.
 */

// src/index.js

// Function to remove the Welcome message if it exists and show the form
function showForm() {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
      welcomeMessage.remove();
    }
    document.getElementById('login-form').style.display = 'block';
  }
  
  // Function to hide the form
  function hideForm() {
    document.getElementById('login-form').style.display = 'none';
  }
  
  // Function to delete cookies and show the form
  function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    document.cookie = 'email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    showForm();
  }
  
  // Function to show the Welcome message or form based on user login status
  function showWelcomeMessageOrForm() {
    const firstname = getCookie('firstname');
    if (firstname) {
      const welcomeMessage = document.createElement('h1');
      const logoutLink = document.createElement('span');
      logoutLink.className = 'logout-link';
      logoutLink.innerText = '(logout)';
      logoutLink.onclick = function () {
        deleteCookiesAndShowForm();
        welcomeMessage.remove();
      };
      welcomeMessage.innerText = `Welcome ${firstname} `;
      welcomeMessage.appendChild(logoutLink);
      welcomeMessage.id = 'welcome-message';
      document.body.innerHTML = '';
      document.body.appendChild(welcomeMessage);
    } else {
      showForm();
    }
  }
  
  // Initial function call to show the Welcome message or form
  showWelcomeMessageOrForm();
  
  // Rest of the code (setCookies, getCookie, showCookies functions remain unchanged)
  

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
  
  
  