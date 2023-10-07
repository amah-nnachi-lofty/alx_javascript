/*
 * Changing DOM with closure: Defines a function to change the style of the entire page and creates three theme buttons.

/**
 * This function changes the style of the entire page, setting the font-size, font-weight, text-transform, background-color, and color.
 *
 * @param {number} size The font size.
 * @param {string} weight The font weight.
 * @param {string} transform The text transform.
 * @param {string} background The background color.
 * @param {string} color The text color.
 */

// Function to change page styles based on input arguments using closure
function changeMode(size, weight, transform, background, color) {
    // Return a function to change styles of the entire page
    return function() {
        document.body.style.fontSize = `${size}px`;
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };
}

// Function to set up different themes and add buttons to change styles
function main() {
    // Create closures with different themes using changeMode function
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Add paragraph and buttons to the body of the page
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Add buttons to the body of the page
    const spookyButton = document.createElement('button');
    spookyButton.textContent = 'Spooky';
    spookyButton.addEventListener('click', spooky);
    document.body.appendChild(spookyButton);

    const darkModeButton = document.createElement('button');
    darkModeButton.textContent = 'Dark mode';
    darkModeButton.addEventListener('click', darkMode);
    document.body.appendChild(darkModeButton);

    const screamModeButton = document.createElement('button');
    screamModeButton.textContent = 'Scream mode';
    screamModeButton.addEventListener('click', screamMode);
    document.body.appendChild(screamModeButton);
}

// Call the main function to set up the page
main();
