// src/index.js

/**
 * Set cookies using js-cookie and show the welcome message.
 */
function setCookiesAndShowWelcomeMessage() {
    const firstname = document.getElementById('firstname').value;
    const email = document.getElementById('email').value;
  
    // Calculate expiration date for cookies (10 days from now)
    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10);
  
    // Set cookies using js-cookie library
    Cookies.set('firstname', firstname, { expires: expirationDate });
    Cookies.set('email', email, { expires: expirationDate });
  
    showWelcomeMessageOrForm();
  }
  
  /**
   * Function to delete cookies and show the form.
   */
  function deleteCookiesAndShowForm() {
    // Delete cookies using js-cookie library
    Cookies.remove('firstname');
    Cookies.remove('email');
    showForm();
  }
  
  /**
   * Function to show the Welcome message or form based on user login status.
   */
  function showWelcomeMessageOrForm() {
    const firstname = Cookies.get('firstname');
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
  