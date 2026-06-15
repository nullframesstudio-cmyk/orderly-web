function sendMessage(){
    var message = document.getElementById("message").value;
    var d = new Date();
    var hours = d.getHours()
    var minutes = d.getMinutes();
    document.getElementById("messageBox").innerHTML+=
    "<div class='outMessage'> <img src='#'>"
    + message +
    "<span id='date'>"+hours+":"+minutes+"</span></div>";
    document.getElementById("message".value="");
}
