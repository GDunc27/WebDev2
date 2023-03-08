"use strict";

const $ = selector => document.querySelector(selector);

const calculateTotal = (mag1, mag2, mag3) => {
    const price1= 4.99;
	const price2= 1.99;
	const price3= 3.45;
    //console.log("value after prices");
    let total = (mag1*price1)+(mag2*price2)+(mag3*price3);
    //console.log(total + "total price");
    total = total.toFixed(2);
    return total;
};

document.addEventListener("DOMContentLoaded", () => {
    $("#calculate").addEventListener("click", () => {
        const mag1 = parseFloat($("#mag1").value);
        //console.log(mag1 + "value of mag 1");
        const mag2 = parseFloat($("#mag2").value);
        //console.log(mag2 + "value of mag 2");
        const mag3 = parseFloat($("#mag3").value);
        //console.log(mag3 + "This is mag3");
        let errorMessage = "";
        //console.log(errorMessage + "This is above the errormessage");
        
       //if statments to check if input is valid
       //console.log("This is above the if statements"); 
       if (isNaN(mag1) || mag1 <= 0) {
            errorMessage = "Number of Magazines must be a number greater than 0";
            $("#mag1").focus();
        } else if (isNaN(mag2) || mag2 <= 0) {
            errorMessage = "Number of Magazines must be a number greater than 0";
            $("#mag2").focus();
        }
        else if (isNaN(mag3) || mag3 <= 0) {
            errorMessage = "Number of Magazines must be a number greater than 0";
            $("#mag3").focus();
        }
        //console.log(errorMessage + "this is the errormessage");
        if (errorMessage == "") {
           //console.log(errorMessage + "this is the errormessage");
            $("#total").value = calculateTotal(mag1, mag2, mag3);
            //console.log(total + "this is the total after total value");     
        } else {
            alert(errorMessage);
        }

});
    $("#clear").addEventListener("click", () => {
        $("#mag1").value="";
        $("#mag2").value="";
        $("#mag3").value="";  
    
    });
    $("#mag1").focus();
});