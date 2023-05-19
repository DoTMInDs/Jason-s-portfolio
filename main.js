var card = document.getElementById("card");
var card2 = document.getElementById("card-2");

function openSource(){
    card.style.display = 'grid'
    card2.style.display = 'grid'
}


var list = document.getElementById("list");

function openmenu(){
    list.style.left = '0'
}

function closemenu(){
    list.style.left = '-250px'
}



function sendMail(){
    var email = document.getElementById('email');

    if (email == ""){
        alert("input field required");
    }
    else{
        alert("Message sent successfully");
        return
    }
    
    
}

var background = document.getElementById('bg');
var contenet = document.getElementById('content');
var mark = document.getElementById('mark');

function callOut(){
    background.style.display = 'block'
}
function collapseBg(){
    background.style.display = 'none'
}