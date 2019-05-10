window.onload = function() {
    //This code block initializes p-tags for error messages
    let firstNameMessage = document.getElementById("badFirstName"); //retrieves p-tag for message
    firstNameMessage.innerHTML = ""; //resets string
    firstNameMessage.style.display = "none"; //sets display to hidden

    let lastNameMessage = document.getElementById("badLastName"); //retrieves p-element for message
    lastNameMessage.innerHTML = ""; //resets string
    lastNameMessage.style.display = "none"; //sets display to hidden

    let emailMessage = document.getElementById("badEmail"); //retrieves p-element for message
    emailMessage.innerHTML = ""; //resets string
    emailMessage.style.display = "none"; //sets display to hidden

    let phoneMessage = document.getElementById("badPhone"); //retrieves p-element for message
    phoneMessage.innerHTML = ""; //resets string
    phoneMessage.style.display = "none"; //sets display to hidden

    let inquiryMessage = document.getElementById("badInquiry"); //retrieves p-element for message
    inquiryMessage.innerHTML = ""; //resets string
    inquiryMessage.style.display = "none"; //sets display to hidden

    let radioButtonMessage = document.getElementById("badRadio"); //retrieves p-element for message
    radioButtonMessage.innerHTML = "";//resets string
    radioButtonMessage.style.display = "none"; //sets display to hidden

    let radioElements = document.getElementsByName("radioFoundSite"); //nodelist of all radio buttons by this name
    let radioReturnVals = []; //initialize array to store boolean values for each radio input

    //=======================================================================================================

    //Regular expression to test the type of characters in first name and last name
    let namePattern = /[A-Z][a-z]+/; //first letter capitalized, one or more lowercase letters
    let phonePattern = /[0-9]{3}[-][0-9]{3}[-][0-9]{4}/;
    //source of regex below: http://regexlib.com/Search.aspx?k=email&AspxAutoDetectCookieSupport=1
    let emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
  

    function validateFirstName() {
        //block below validates First Name field
        let firstNameValue = firstName.value; /*Stores the text value of the element, inside the function
        to be updated each time called*/
        if ((namePattern.test(firstNameValue)) && (firstNameValue.length >= 2)) {//.test() is a regex method
            firstName.style.borderStyle = "solid";
            firstName.style.borderColor = "#1e9b11"; //green border for valid value
            firstNameMessage.style.display = "none"; //hides p element if input passes
            return true;
        } else {
            firstNameMessage.style.display = "inline";
            firstNameMessage.innerHTML = "Your entry for \"First Name\" is invalid";
            firstName.style.borderStyle = "solid";
            firstName.style.borderColor = "#FF0"; //yellow border for invalid value
            return false;
        }
    }

    function validateLastName() {
        //This code block validates the Last Name field
        let lastNameValue = lastName.value; /*Stores the text value of the element, inside the function
        to be updated each time called*/
        if ((namePattern.test(lastNameValue)) && (lastNameValue.length >= 2)) {
            lastName.style.borderStyle = "solid";
            lastName.style.borderColor = "#1e9b11"; //green border for valid value
            lastNameMessage.style.display = "none"; //hides p element if input passes
            return true;
        } else {
            lastNameMessage.style.display = "inline";
            lastNameMessage.innerHTML = "Your entry for \"Last Name\" is invalid";
            lastName.style.borderStyle = "solid";
            lastName.style.borderColor = "#FF0"; //yellow border for invalid value
            return false;
        }
    }

    function validateEmail() {
        //This block validates email address
        let emailValue = email.value;
        if (emailPattern.test(emailValue)) {
            email.style.borderStyle = "solid";
            email.style.borderColor = "#1e9b11"; //green border for valid value
            emailMessage.style.display = "none"; //hides p element if input passes
            return true;
        } else {
            emailMessage.style.display = "inline";
            emailMessage.innerHTML = "Your entry for \"Email Address\" is invalid";
            email.style.borderStyle = "solid";
            email.style.borderColor = "#FF0"; //yellow border for invalid value
            return false;
        }
    }
    
    function validatePhone() {
        //THis block validates the phone number entry
        let phoneValue = phone.value;
        if (phonePattern.test(phoneValue)) {
            phone.style.borderStyle = "solid";
            phone.style.borderColor = "#1e9b11"; //green border for valid value
            phoneMessage.style.display = "none"; //hides p element if input passes
            return true;
        } else {
            phoneMessage.style.display = "inline";
            phoneMessage.innerHTML = "Your entry for \"Phone Number\" is invalid";
            phone.style.borderStyle = "solid";
            phone.style.borderColor = "#FF0"; //yellow border for invalid value
            return false;
        }
    }

    function validateInquiry() {
        //This block validates text box
        let inquiryValue = inquiry.value;
        if (inquiryValue.length < 2) {
            inquiryMessage.style.display = "inline";
            inquiryMessage.innerHTML = "Your message isn't long enough.";
            inquiry.style.borderStyle = "solid";
            inquiry.style.borderColor = "#FF0"; //yellow border for invalid value
            return false;
        } else {
            inquiry.style.borderStyle = "solid";
            inquiry.style.borderColor = "#1e9b11"; //green border for valid value
            inquiryMessage.style.display = "none"; //hides p element if input passes
            return true;
        }
    }

    function validateRadioButtons() {
        //This block checks to see if one radio button is selected
        for (let i = 0; i < radioElements.length; i++) { //iterates through nodelist
            radioReturnVals.push(radioElements[i].checked); //adds boolean values to array
        }
        let foundTrueButton = radioReturnVals.find(function(item) {//passes anonymous function as argument
            if (item == true) {
                return true;
            } else {
                return false;
            }
        });
        if (foundTrueButton == true) {
            //Checks if the radio buttons are checked, looks for true values in the array.  Return value of find() is boolean
            radioButtonMessage.style.display = "none";
            return true; //possible return value of function
        } else {
            radioButtonMessage.innerHTML = "Please select one of the options.";
            radioButtonMessage.style.display = "inline";
            return false; //possible return value of function
        }
    }

    //Binds elements to event handlers
    let firstName = document.getElementById("firstName");
    firstName.onblur = validateFirstName; //register handler with onblur event, similar sequence below

    let lastName = document.getElementById("lastName");
    lastName.onblur = validateLastName;
    
    let email = document.getElementById("email");
    email.onblur = validateEmail;

    let phone = document.getElementById("phoneNumber");
    phone.onblur = validatePhone;

    let inquiry = document.getElementById("userInquiry");
    inquiry.onblur = validateInquiry;
    
    let radioField = document.getElementById("radioField");
    radioField.onmouseout = validateRadioButtons;

    let entireForm = document.getElementsByName("lowenthalForm");
    
    entireForm[0].onsubmit = function() {
    //This block checks if users did not correct their input in response to prompts

        //stores return value from all three functions
        let validateFirstNameReturn = validateFirstName();
        let validateLastNameReturn = validateLastName();
        let validateEmailReturn = validateEmail();
        let validateInquiryReturn = validateInquiry();
        let validateRadiosReturn = validateRadioButtons();

        if ((validateEmailReturn === true) && (validateFirstNameReturn === true) 
        && (validateLastNameReturn === true) && (validateInquiryReturn === true)
        && (validateRadiosReturn == true)) {
            //if all input passes validation, submits    
            return true;
        } else {
            //if any input fails, does not submit
            return false;
        }
    }
}
