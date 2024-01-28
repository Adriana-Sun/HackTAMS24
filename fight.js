responses = ["It was super effective!", "It was not very effective.", ""];

damage = [200, 50, 100];

function clickAction(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("choice1").innerHTML="Pickup Line";
    document.getElementById("choice1").onclick=function(){pickupLine()};
    document.getElementById("choice2").innerHTML="Message";
    document.getElementById("choice2").onclick=function(){message()};
    document.getElementById("choice3").innerHTML="Ice Breakers";
    document.getElementById("choice3").onclick=function(){iceBreakers()};
    document.getElementById("choice4").innerHTML="Beg";
    document.getElementById("choice4").onclick=function(){beg();};
    

}

function clickItems(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("choice1").innerHTML="Gift";
    document.getElementById("choice1").onclick=function(){gift()};
    document.getElementById("choice2").innerHTML="Berry";
    document.getElementById("choice2").onclick=function(){berry()};
    document.getElementById("choice3").innerHTML="Rare Candy";
    document.getElementById("choice3").onclick=function(){rareCandy()};
    document.getElementById("choice4").innerHTML="Bulbasaur";
    document.getElementById("choice4").onclick=function(){bulbasaur()}; 
}

function clickInfo(){
    //show the card
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
}

function clickRun(){
    //return to card page
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    alert("You Escaped Successfully!");
}

function pickupLine(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=false;
    document.getElementById("inputbox").placeholder="Enter your pickup line!";
    document.getElementById("inputbox").addEventListener("keypress",function(event){getResponse(event)});
}

function getResponse(event){
    if(event.key == "Enter"){
        document.getElementById("confirm").innerHTML="";
        document.getElementById("inputbox").value="";
        document.getElementById("inputbox").hidden=true;
        var i = Math.floor(Math.random()*3);
        document.getElementById("otherconfirm").innerHTML=responses[i];
        var p = document.getElementById("otherHpBar").clientWidth;
        //console.log(p);
        p = p-damage[i];
        document.getElementById("otherHpBar").style.width = p+"px";
    }
}

function message(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=false;
    document.getElementById("inputbox").placeholder="Enter your message!";
    document.getElementById("inputbox").addEventListener("keypress",function(event){getResponse(event)});
}

function iceBreakers(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=false;
    document.getElementById("inputbox").placeholder="Enter your icebreaker!";
    document.getElementById("inputbox").addEventListener("keypress",function(event){getResponse(event)});
}

function beg(){
    //you begged
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You beg them to accept you.";

}

function gift(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You send them a gift!";
}

function berry(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You give them a berry!";
}

function rareCandy(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You gift them a rare candy!";
}

function bulbasaur(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You hand them a... bulbasaur?";
}