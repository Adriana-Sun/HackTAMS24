
var jsonArray = [{"image":"test.png","name":"Anirudh Mazumder","age":"16",
    "likes":["hunter hoinkes", "hunter", "hoinkes"],"dislikes":["everything", "except hunter", "not hunter"],
    "quote":"\"Hunter got dat GYATT\""},
    {"image":"saanvi.jpg", "name":"Saanvi V Bomma","age":"16",
    "likes":["music", "boba", "puzzles"],"dislikes":["beetles", "blood", "jealous people"],
    "quote":"\"Happy halloween\""},
    {"image":"krish.jpg", "name":"Krish Kohir","age":"17",
    "likes":["levers", "untying shoelaces", "throwing up"],"dislikes":["carrots", "licking batteries", "not pissing"],
    "quote":"\"This is why your parents keep fighting\""},
    {"image":"kevin.jpg", "name":"Gengwen Li","age":"16",
    "likes":["your grandma", "your mother", "your sister"],"dislikes":["cats", "more cats", "cat girls"],
    "quote":"\"Can I think about it?\""},
    {"image":"Isabella.jpg", "name":"Isabella Xu","age":"16",
    "likes":["eating", "sleeping", "exercising"],"dislikes":["some people", "some things", "things failing"],
    "quote":"\"To infinity and beyond\""},
    {"image":"Shriya.jpg", "name":"Shriya Dontula","age":"17",
    "likes":["ice cream", "books", "bullying"],"dislikes":["Seeing people happy", "People wronging me", "boys"],
    "quote":"\"I want to spread joy and positivity\""}
];

const docFrag = new DocumentFragment();
const body = document.querySelector('body');
for(var i = 0; i < jsonArray.length; i++){
    console.log(jsonArray[i].name);
    var cardBorder = document.createElement("div");
    cardBorder.setAttribute("data-name", jsonArray[i].name);
    cardBorder.setAttribute("data-age", jsonArray[i].age);
    cardBorder.setAttribute("data-image", jsonArray[i].image);
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

        var logo = document.createElement('img');
        logo.src = "icon.png";
        logo.style.width = "50px";
        logo.style.height = "50px";
        logo.style.marginTop = "20px";
        logo.style.marginLeft = "20px";
        cardBorder.appendChild(logo);

        var quoteCard = document.createElement('div');
        quoteCard.classList.add("p3");
        var quote = document.createElement("p3");
        quote.innerText=jsonArray[i].quote;
        quoteCard.appendChild(quote);
        cardBorder.appendChild(quoteCard);
        cardBorder.addEventListener("click", (e) =>{
            //store in session storage
            sessionStorage.setItem("name", e.currentTarget.getAttribute('data-name'));
            sessionStorage.setItem("age", e.currentTarget.getAttribute('data-age'));
            sessionStorage.setItem("image", e.currentTarget.getAttribute('data-image'));
            window.location.href = "index.html";
        });
    docFrag.appendChild(cardBorder);
}
body.appendChild(docFrag);

