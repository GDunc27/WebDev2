"use strict";
$(document).ready( () => {

    // handle click on Join List button
    $("#join_list").click( evt => {
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
        const comments = $("#comments");
        const state = $("#state").val().trim();
        const zipCode = $("#zip_code").val().trim();
    
        let isValid = true;

        // check user entries
        if (email1.value == "") { 
            email1.next().text = "This field is required";
            isValid=false;
        }
        //add else for clear button to function properly
        else{
            email1.next().text = "";
        }
        if (email2.value == "") { 
            email2.next().text = "This field is required";
            isValid=false;
        }
        else{
            email2.next().text = "";
        }
        
        if (email1.value !== email2.value) { 
            email2.next().text = "These fields do not match";
            isValid=false;
        }
        else{
            email2.next().text = "";
        }

        if (firstName.value == "") { 
            firstName.next().text = "This field is required";
            isValid=false;
        }
        else {
            firstName.next().text = "";
        }
        if (comments.value == "") {
            comments.next().text = "Please enter a comment.";
            isValid=false;
        }
        // validate the state entry
        if (state == "") {
            $("#state").next().text("This field is required.");
            isValid = false;
        } else if ( state.length != 2 ) {
            $("#state").next().text("Use 2-character code.");
            isValid = false;
        } else {
            $("#state").next().text("");
        }
        $("#state").val(state);
            
        // validate the zip-code entry
        if (zipCode == "") {
            $("#zip_code").next().text("This field is required.");
            isValid = false;
        } else if (isNaN(zipCode)) {
            $("#zip_code").next().text("Use 99999 format.");
            isValid = false;
        } else if ( zipCode.length != 5 ) {
            $("#zip_code").next().text("Use 5-digit code.");
            isValid = false;
        } else {
            $("#zip_code").next().text("");
        }
        $("#zip_code").val(zipCode);

        if (isValid==true){
            $("form").submit();
        }

    });

    $("#reset").click( () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";
        $("#zip_code").value = "";
        $("#state").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});