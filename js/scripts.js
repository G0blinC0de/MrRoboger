// Testing Logic:

let testInputs = [3, 5, 10];
testInputs.forEach(function (inputNum) {
    const result = processNum(inputNum);
    console.log("Input Number:", inputNum, "Processed Output:", result);
});



// Business Logic: Process the input number, run numScan function, return result
function processNum(inputNum) {
    let results = [];
    for (let i = 0; i <= inputNum; i++) {
        results.push(numScan(i));
    }
    return results.join(', ');
};

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

