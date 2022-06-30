"use strict";
//12 hour-clock

// create a function
function showTime() {
    // store the current time
    // use the new Date() constructor; this date object is static - needs to be updated
    let date = new Date(); //this returns the browser's date and time zone
    
    // extract the hours, minutes, and seconds from the date variable using methods
    let hh = date.getHours(); // returns values between 0-23
    let mm = date.getMinutes(); // returns 0-59
    let ss = date.getSeconds(); // returns 0-59
    
    // store the AM or PM tag
    let session = "AM"; //default is AM

    // because we're programming a 12-hr clock, use this if
    // statement to reset 12 to 0
    if (hh == 0) {
        hh = 12;
    }

    // subtract hours greater than 12 and assign value of session to PM
    if (hh > 12) {
        hh = hh - 12;
        session = "PM";
    }

    // because the methods return # (eg. 7) and not ## (07)
    // we need to use ternary operators - returns a value if
    // the condition is true and another value if false
    // syntax is (condition ? if true : if false);
    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    // store time in desired format
    // let time = hh + ":" + mm + ":" + ss + " " + session;
    let time = `${hh}:${mm}:${ss} ${session}`;

    // because date() returns a static value, we need to update it
    // syntax is setTimeout(function, milliseconds, param1, param2, ...)
    // 1000ms = 1s
    // this method updates the code every second to keep the clock running
    setTimeout(showTime, 1000);

    // to display the time
    // getElementById returns the element whose
    // ID has been passed as the parameter (aka 'clock')
    // innerText property sets the context of the node to 'time'
    document.getElementById("clock").innerText = time;

}; 

showTime();
// console.log(showTime());