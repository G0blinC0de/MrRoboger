// Test the function with various inputs
let testInputs = [0, 1, 2, 3, 4, 13, 21, 31, 42]; // Array of numbers to test
testInputs.forEach(function (number) {
    const result = numScan(number);
    console.log("Input:", number, "Output:", result);
});


// Business Logic: Check and replace individual number
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

