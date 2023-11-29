# _Mr Roboger's Neighborhood_

#### By _**Red Williams**_

#### _Digital Neighborhood_

## Technologies Used

* _VS Code_
* _GitBash_
* _HTML_
* _CSS_
* _Javascript_
* _WinRar_

## Description

A Digital Neighborhood

#### Tests

Describe: processNum()

Test: "It should return a string of numbers from 0 to the user's input numbers, after running them through numScan."
Code: 
    let testInputs = 10;
    processnum(testInputs);
Expected Output: "0, Beep, Boop, Won't you be my Neighbor?, 4, 5, 6, 7, 8, 9, Beep"


Describe: numScan()

Test: "It should replace numbers that contain a "3" with "Won't you be my Neighbor?"
Code: 
    let testInputs = 3;
    numScan(testInputs);
Expected Output: "0, Beep, Boop, Won't you be my Neighbor?"

Test: "It should replace numbers that contain a "2" with "Boop"
Code: 
    let testInputs = 2;
    numScan(testInputs);
Expected Output: "0, Beep, Boop"

Test: "It should replace numbers that contain a "1" with "Beep"
Code: 
    let testInputs = 1;
    numScan(testInputs);
Expected Output: "0, Beep"

Test: "It should return the number if it does not contain 3, 2 or 1."
Code:
    let testInputs = 4
    numScan(testInputs);
Expected Output: "0, Beep, Boop, Won't you be my Neighbor?, 4"

## Setup/Installation Requirements

* Navigate to https://github.com/G0blinC0de/MrRoboger
* _Clone Repository and Download_
* _Using Gitbash, navigate to cloned folder in directory_
* _Run in VS Code_
* _Right click on index.html, and select "Open with Live Server"_ 

Alternate Path
* _Navigate to URL_
* https://g0blinc0de.github.io/MrRoboger/



## Known Bugs

* 


## License



[GNU v3](LICENSE) (c) _11/16/23_ _G0blinC0de_