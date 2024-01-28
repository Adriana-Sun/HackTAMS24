const otherSpace = document.querySelector(".otherSpace");
const otherSprite = otherSpace.querySelector("img");
const otherBar = document.querySelector(".otherBar");
const otherName = otherBar.querySelector("h1");

const userSpace = document.querySelector(".space");
const userSprite = userSpace.querySelector("img");
const userBar = document.querySelector(".bar");
const userName = userBar.querySelector("h1");

otherSprite.src = sessionStorage.getItem("image");
otherName.innerText = sessionStorage.getItem("name");

// userSprite.src = sessionStorage.getItem("userImage");
userName.innerText = sessionStorage.getItem("userName");

var responses = ["It was super effective!", "It was not very effective...", "It was neutral."];

var damage = [200, 50, 100];

var attacks=[["I hope you know CPR, because you just took my breath away!","If you were a fruit, you'd be a 'fine-apple.'","If I were a cat, I'd spend all nine of my lives with you."],
            ["Nice flabs.", "Your pfp is hot.", "Your eyes are cute, can I take them?"],
            ["Are there more stairs or chairs in the world?", "What's your favorite color (and why's it not yellow)?", "What are your hobbies?"],
            ["I will bark for you.", "Pretty please go out with me.", "I'll give you a dollar if you date me."]];
var items=[["Here, have a gift.", "I got this for you, uwu.", "There's plenty more where that came from."], 
            ["I bought this nanab berry for you.", "Take some of these leppa berries.", "Have this... pinecone, I guess."], 
            ["I hope you have a sweet tooth.", "Here's a bulbasaur candy.", "I got you a rare candy, use it to level up."], 
            ["Take the bulbasaur. Now.", "Here's a bulbasaur. It's for you.", "Flowers are overrated. Here's a bulbasaur"]];

void function doesNothing(){

}

function clickAction(){
    unreset();
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
    unreset();
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
    
}

function clickRun(){
    //return to card page
    runaway = document.querySelector(".runaway");
    runaway.style.opacity = 1;
    runaway.style.display = "flex";
    runaway.querySelector("p").innerHTML = "You ran away...";
    setTimeout(function(){
        runaway.querySelector("p").style.opacity = 1;
    }, 500);

    setTimeout(function(){
        runaway.querySelector("a").style.opacity = 1;
    }, 1500);
}

function pickupLine(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=false;
    document.getElementById("inputbox").placeholder="Enter your pickup line!";
    document.getElementById("inputbox").addEventListener("keypress",function(event){getResponse(event)});
}

function getDamage(){
    // makes blank buttons
    reset();

    document.getElementById("confirm").innerHTML="";
    document.getElementById("otherconfirm").innerHTML="";

    var i = Math.floor(Math.random()*9);
    if(i < 4){
        var j=Math.floor(Math.random()*3);
        document.getElementById("otherconfirm").innerHTML=attacks[i][j];

    } else if (i < 8){
        var j=Math.floor(Math.random()*3);
        document.getElementById("otherconfirm").innerHTML=items[i-4][j];
    } else {
        //They ran away
        document.getElementById("otherconfirm").innerHTML="THEY RAN AWAY";
        runaway = document.querySelector(".runaway");
        runaway.style.opacity = 1;
        runaway.style.display = "flex";
        runaway.querySelector("p").innerHTML = "Your match ran away...";
        runaway.querySelector("p").style.opacity = 1;

        setTimeout(function(){
            runaway.querySelector("a").style.opacity = 1;
        }, 1500);

        return;
    }

    var j = Math.floor(Math.random()*3);
    //sleep(2000);
    setTimeout(function(){
        document.getElementById("confirm").innerHTML = responses[j];
        var p = document.getElementById("userHpBar").clientWidth;
        p -= damage[j];
        p=Math.max(p, 0);
        document.getElementById("userHpBar").style.width=p+"px";
    }, 2000);

}

function reset(){
    document.getElementById("choice1").innerHTML="";
    document.getElementById("choice2").innerHTML="";
    document.getElementById("choice3").innerHTML="";
    document.getElementById("choice4").innerHTML="";
    document.getElementById("choice1").style.cursor = 'no-drop';
    document.getElementById("choice2").style.cursor = 'no-drop';
    document.getElementById("choice3").style.cursor = 'no-drop';
    document.getElementById("choice4").style.cursor = 'no-drop';
    document.getElementById("choice1").onclick="";
    document.getElementById("choice2").onclick="";
    document.getElementById("choice3").onclick="";
    document.getElementById("choice4").onclick="";
}

function unreset(){
    document.getElementById("choice1").style.cursor = 'pointer';
    document.getElementById("choice2").style.cursor = 'pointer';
    document.getElementById("choice3").style.cursor = 'pointer';
    document.getElementById("choice4").style.cursor = 'pointer';
}

function doDamage(){
    // hiding input box from user after input
    document.getElementById("inputbox").value="";
    document.getElementById("inputbox").hidden=true;

    // getting random reaction
    var i = Math.floor(Math.random()*3);
    // placeholder text while waiting
    document.getElementById("otherconfirm").innerHTML="...";
    
    // delay response for 2 seconds
    setTimeout(function(){
        // inflicting damage on opponent
        document.getElementById("otherconfirm").innerHTML=responses[i];
        var p = document.getElementById("otherHpBar").clientWidth;
        p = p-damage[i];
        p = Math.max(p, 0);
        document.getElementById("otherHpBar").style.width = p+"px";
        
        // begin other user's turn after 2 seconds
        setTimeout(function(){
            getDamage();
        }, 2000);
    }, 2000);
}

function getResponse(event){
    if(event.key == "Enter"){
        doDamage();
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
    doDamage();
}

function gift(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You send them a gift!";
    doDamage();
}

function berry(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You give them a berry!";
    doDamage();
}

function rareCandy(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You gift them a rare candy!";
    doDamage();
}

function bulbasaur(){
    document.getElementById("confirm").innerHTML="";
    document.getElementById("inputbox").hidden=true;
    document.getElementById("confirm").innerHTML="You hand them a... bulbasaur?";
    doDamage();
    
}