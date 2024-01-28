
var jsonArray = [{"image":"test.png","name":"Anirudh Mazumder","age":"16",
    "likes":["hunter hoinkes", "hunter", "hoinkes"],"dislikes":["everything", "except hunter", "not hunter"],
    "quote":"\"Hunter got that GYATT\""},
    {"image":"saanvi.jpg", "name":"Saanvi V Bomma","age":"16",
    "likes":["music", "boba", "puzzles"],"dislikes":["beetles", "blood", "jealous people"],
    "quote":"\"Happy halloween\""},
    {"image":"krish.jpg", "name":"Krish","age":"17",
    "likes":["levers", "untying shoelaces", "throwing up"],"dislikes":["carrots", "licking batteries", "not pissing"],
    "quote":"\"This is why your parents keep fighting\""},
    {"image":"kevin.jpg", "name":"Gengwen Li","age":"16",
    "likes":["your grandma", "your mother", "your sister"],"dislikes":["cats", "more cats", "cat girls"],
    "quote":"\"Can I think about it?\""},
    {"image":"Aryan.jpg", "name":"Aryan Raj","age":"16",
    "likes":["eating", "sleeping", "exercising"],"dislikes":["some people", "some things", "things failing"],
    "quote":"\"To infinity and beyond\""},
    {"image":"neel.jpg", "name":"Neelesh Chevuri","age":"17",
    "likes":["monster drinks", "cracks", "crystals"],"dislikes":["shadow wizards", "hitler", "android"],
    "quote":"\"I can't speak English\""}
];

const docFrag = new DocumentFragment();
const body = document.querySelector('body');
for(var i = 0; i < jsonArray.length; i++){
    console.log(jsonArray[i].name);
    var cardBorder = document.createElement("div");
    cardBorder.classList.add("cardborder");
        var titleGrid = document.createElement('div');
        titleGrid.classList.add("TitleGrid");
            var fullName = document.createElement("h1");
            fullName.innerText = jsonArray[i].name;
            var ageEm = document.createElement('h2');
            ageEm.innerText = "Age: " + jsonArray[i].age;
            titleGrid.appendChild(fullName);
            titleGrid.appendChild(ageEm);
        cardBorder.appendChild(titleGrid);

        var imgBox = document.createElement('div');
            imgBox.classList.add("imgbox");
                var image = document.createElement("img");
                image.src=jsonArray[i].image;
            imgBox.appendChild(image);
        cardBorder.appendChild(imgBox);

        var interestGrid = document.createElement('div');
        interestGrid.classList.add("InterestGrid");
            var likesTitle = document.createElement('p1');
            likesTitle.innerText = "Likes:";
            var dislikesTitle = document.createElement('p1a');
            dislikesTitle.innerText = "Dislikes:";
            interestGrid.appendChild(likesTitle);
            interestGrid.appendChild(dislikesTitle);
        cardBorder.appendChild(interestGrid);

        var actualInterestGrid = document.createElement('div');
        actualInterestGrid.classList.add("InterestGrid");
            var likesList = document.createElement("ul2");
            jsonArray[i].likes.forEach((likeItem) =>{
                let likeEm = document.createElement('p');
                likeEm.innerText = likeItem;
                likesList.appendChild(likeEm);
            });
            var dislikesList = document.createElement('ula');
            jsonArray[i].dislikes.forEach((dislikeItem) =>{
                let dislikeEm = document.createElement('p');
                dislikeEm.innerText = dislikeItem;
                dislikesList.appendChild(dislikeEm);
            });
            actualInterestGrid.appendChild(likesList);
            actualInterestGrid.appendChild(dislikesList);
        cardBorder.appendChild(actualInterestGrid);

        var quoteCard = document.createElement('div');
        quoteCard.classList.add("p3");
        var quote = document.createElement("p3");
        quote.innerText=jsonArray[i].quote;
        quoteCard.appendChild(quote);
        cardBorder.appendChild(quoteCard);
    docFrag.appendChild(cardBorder);
}
body.appendChild(docFrag);

/* <div class="cardborder">
    <div class="TitleGrid">
        <h1>Name</h1>
        <h2>Age: </h2>
    </div>
    <div class="imgbox"><img src="test.png" alt="Anirudh in a jacket"></div>
    <div class = "InterestGrid">
        <p1>Likes:</p1>
        <p1a>Dislikes: </p1a>
    </div>
    <div class = "InterestGrid">
        <ul2></ul2>
        <ula></ula>
    </div>
    <p3>Quote: "Hunter got dat GYATT"</p3>
</div> */