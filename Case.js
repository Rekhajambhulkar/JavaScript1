//Read a single digit number and write the number in word using Case
let num = Math.floor(Math.random() * 10);
console.log("Random single digit number is:" + num);
switch(num){
    case 0:
        Text = "Zero";
        break;
    case 1:
        Text = "One";
        break;
    case 2:
        Text = "Two";
        break;
    case 3:
        Text = "Three";
        break;    
    case 4:
        Text = "Four";
        break;
    case 5:
        Text = "Five";
        break;    
    case 6:
        Text = "Six";
        break;
    case 7:
        Text = "Seven";
        break;        
    case 8:
        Text = "Eight";
        break;
    case 9:
        Text = "Nine";
        break;    
    }
    console.log("The Digit " + num + " is " + Text + " in word");

//Read a Number and Display the week day (Sunday, Monday,...)
let day = Math.floor(Math.random() * 10) % 7;
//console.log("Day is:" + day);
switch(day){
    case 1:
        Text = "Sunday";
        break;
    case 2:
        Text = "Monday";
        break;
    case 3:
        Text = "tuesday";
        break;    
    case 4:
        Text = "wednsday";
        break;
    case 5:
        Text = "Thursday";
        break;    
    case 6:
        Text = "Friday";
        break;
    case 7:
        Text = "Saturday";
        break;    
}
console.log("The Day is: "  + Text );

//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("Enter value in unit format 1, 10, 100, 1000 etc: " , function(value){
    let text = "";
    switch(value){
        case 1:
            text = "unit";
            break;
        case 1:
            text = "Ten";
            break;
        case 1:
            text = "Hundred";
            break;        
        case 1:
            text = "Thousand";
            break;
    }
    console.log("The number " + value + "is:" + text + "in words");
    process.exit();
});
