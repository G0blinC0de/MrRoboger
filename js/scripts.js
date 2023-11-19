
// Business Logic: 

// Process the input number, run numScan function, return result
function processNum(numInput) {
    const results = [];
    for (let i = 0; i <= numInput; i++) {
        results.push(numScan(i));
    }
    return results.join(', ');
};

// Check and replace individual number, prioritize higher num
function numScan(number) {
    const numStr = number.toString();
    if (numStr.includes('3')) {
        return "Won't you be my neighbor?";
    } else if (numStr.includes('2')) {
        return "Boop";
    } else if (numStr.includes('1')) {
        return "Beep";
    } else {
        return number;
    }
}

// UI Logic: 

function updateResult(resultString) {
    document.getElementById('resultP').innerText = resultString;
}

window.onload = function () {
    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault();

        const numInput = parseInt(document.getElementById('numInput').value);
        const resultString = processNum(numInput);
        updateResult(resultString);
    });
};

window.addEventListener('scroll', function () {
    const image = document.getElementById('movingImage');
    const scrollValue = window.scrollY;
    const windowWidth = window.innerWidth;
    const imageWidth = image.offsetWidth;

    // Calculate the maximum scroll position
    const maxScroll = document.body.scrollHeight - window.innerHeight;

    // Normalize the scroll position to a value between 0 and 1, 
    // then scale it to increase the speed of movement
    const scale = 4; // Adjust this value to control the speed
    const normalizedScroll = (scrollValue / maxScroll) * scale;

    // Use the sine function to create a back-and-forth motion
    // Apply modulo to keep the value within the 0 to 2π range
    const bounceValue = Math.sin(normalizedScroll % (2 * Math.PI));

    // Calculate the new left position, ensuring the image stays within the viewport
    const newLeftPosition = (windowWidth - imageWidth) * (bounceValue + 1) / 2;

    console.log("New Left Position:", newLeftPosition); // Debugging line
    image.style.left = `${newLeftPosition}px`;
});

