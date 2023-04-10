const $ = selector => document.querySelector(selector);

document.addEventListener("DOMContentLoaded", () => {
    
    $("#join_list").addEventListener("click", () => {
        // get values user entered in textboxes
        const email1 = $("#email_1");
        const email2 = $("#email_2");
        const firstName = $("#first_name");
    
        let isValid = true;

        // check user entries
        if (email1.value == "") { 
            email1.nextElementSibling.textContent = "This field is required";
            isValid=false;
        }
        //add else for clear button to function properly
        //else{
          //  email1.nextElementSibling.textContent = "";
        //}
        if (email2.value == "") { 
            email2.nextElementSibling.textContent = "This field is required";
            isValid=false;
        }
        //else{
        //    email2.nextElementSibling.textContent = "";
        //}
        if (firstName.value == "") { 
            firstName.nextElementSibling.textContent = "This field is required";
            isValid=false;
        }
        //else {
        //    firstName.nextElementSibling.textContent = "";
        //}


        if (isValid==true){
            $("email_form").submit();
        }

    });

    $("#clear_form").addEventListener("click", () => {
        $("#email_1").value = "";
        $("#email_2").value = "";
        $("#first_name").value = "";

        $("#email_1").focus();
    });
    
    $("#email_1").focus();
});