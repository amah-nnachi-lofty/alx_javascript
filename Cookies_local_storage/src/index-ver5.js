// src/index.js

// Check if local storage is available
if (typeof(Storage) === "undefined") {
    // If local storage is not supported, display an alert message
    alert("Sorry, your browser does not support Web storage. Try again with a better one.");
  } else {
    // If local storage is available, create a shopping cart application
    const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];
  
    // Function to add item to cart in local storage
    function addItemToCart(item) {
      localStorage.setItem(item, true);
      displayCart();
    }
  
    // Function to create the store and allow users to add items to cart
    function createStore() {
      const ul = document.createElement("ul");
      // Loop through available items and create list items for each
      availableItems.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        li.onclick = () => addItemToCart(item); // Add item to cart on click
        ul.appendChild(li);
      });
      document.body.appendChild(ul); // Append the list to the body
    }
  
    // Function to display the cart items stored in local storage
    function displayCart() {
      const cartItemsCount = Object.keys(localStorage).length;
      const cartMessage = document.createElement("p");
      // If cart is not empty, display the cart message
      if (cartItemsCount > 0) {
        cartMessage.textContent = `You previously had ${cartItemsCount} item(s) in your cart.`;
        document.body.appendChild(cartMessage); // Append cart message to the body
      }
    }
  
    // Initial function calls to create the store and display cart items
    createStore();
    displayCart();
  }
  