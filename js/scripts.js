// Testing Logic:





// Business Logic: Process the input number, run numScan function, return result
function processNum(inputNum) {
    let results = [];
    for (let i = 0; i <= inputNum; i++) {
        results.push(numScan(i));
    }
    return results.join(', ');
};

// Business Logic: Check and replace individual number, prioritize higher num
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