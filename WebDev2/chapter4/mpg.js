"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (miles, gallons) => {
    let mpg = miles/gallons;
    mpg = mpg.toFixed(2);
    return mpg;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const miles = parseFloat($("#miles").value);
        const gallons = parseFloat($("#gallons").value);
        let errorMessage = "";
    
       //if statments to check if input is valid
        if (isNaN(miles) || miles <= 0) {
            errorMessage = "Miles must be a number greater than 0";
            $("#miles").focus();
        } else if (isNaN(gallons) || gallons <= 0) {
            errorMessage = "Gallons must be a number greater than 0";
            $("#gallons").focus();
        } 
        if (errorMessage == "") {
            $("#mpg").value = calculateFV(miles, gallons);        
        } else {
            alert(errorMessage);
        }
    });
    $("#clear").addEventListener("click", () => {
        $("#miles").value="";
        $("#gallons").value="";  
    
    });
    $("#miles").focus();
});