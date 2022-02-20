

document.getElementById("login").addEventListener("click",function(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if(email == "nahid@gmail.com" && password == "nahid"){
        window.location.href = "bank.html";
    }
    else if(email == "" && password == ""){
        document.getElementById("errorMsgLogin").innerText = "required this login Field";
    }else{
        document.getElementById("errorMsgLogin").innerText = "your mail and password not exist in our Database";
    }
});