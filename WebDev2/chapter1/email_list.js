var $ = function(id){
    return document.getElementById(id);
};

var joinList = function() {
    var email_1= $("email_1").value;
    var email_2= $("email_2").value;
    var isValid = true;
    
    if(email_1 === ""){
            $("email_1_error").firstChild.nodeValue = "This field is required.";
            isValid=false;
        }
            else { $("email_1_error").firstChild.nodeValue = "";}

            if (email_1 !== email_2){
                $("email_2_error:").firstChild.nodeValue = "This entry must equal first entry.";
                isValid=false;
            }
            
            else { $("email_2_error").firstChild.nodeValue = "";}

                if ($("first_name").value === ""){
                    $("first_name_error").firstChild.nodeValue = "This field is required.";
                    isValid = false;
                } else { $("first_name_error").firstChild.nodeValue ="";}
                if (isValid){
                    $("email_form").submit();
                }
            };

windows.onload =function(){
    $("join_list").onclick=joinList;
    $("email_1").focus();
};