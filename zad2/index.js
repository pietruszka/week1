/*
    Validate given form. Define your own functions and be creative!

    User Name Example:
    input: "MarekNowak405"
    output: "mareknowak405"

    Any uppercase letters you should replace with lowercase. Password's and Username's length should be at least 6 letters long.
    Passwords are equal. User's age at least 18 yo. [Check type of age input's value]. Input's value aren't empty strings.
 */

window.onload = ()=> {
    //register button on click event
    document.getElementById('registerButton').onclick = ()=>{
        //result. It decides if response is positive or negative.
        let result = false;
        //load form field's value
        let username = document.getElementById('usernameInput').value;
        let password = document.getElementById('passwordInput').value;
        let passwordConfirm = document.getElementById('confirmPasswordInput').value;
        let age = document.getElementById('ageInput').value;
        let response = document.getElementById('response');

        //---your code ------





        //Response to user
        if(result){
            //response if result equal true
            response.innerHTML = "Register succeed.";
        }else{
            //response if result equal false
            response.innerHTML = "Register failed."
        }

    };


};