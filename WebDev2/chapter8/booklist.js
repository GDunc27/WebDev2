"use strict";

$(document).ready(function() {
    $("#categories h2").click( evt => {
        const h2 = evt.currentTarget;

        $(h2).toggleClass("minus");

        if ($(h2).attr("class") !== "minus") {
            $(h2).next().hide();
        }
        else {
            $(h2).next().show();
        }

        $("#image").attr("src", "");
    }); 
});