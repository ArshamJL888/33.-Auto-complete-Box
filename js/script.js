
// Defenition and Initialize
let suggestions = [
    "Channel",
    "CodingLab",
    "CodingNepal",
    "YouTube",
    "YouTuber",
    "YouTube Channel",
    "Blogger",
    "Bollywood",
    "Vlogger",
    "Vechiles",
    "Facebook",
    "Freelancer",
    "Facebook Page",
    "Designer",
    "Developer",
    "Web Designer",
    "Web Developer",
    "Login Form in HTML & CSS",
    "How to learn HTML & CSS",
    "How to learn JavaScript",
    "How to become Freelancer",
    "How to become Web Designer",
    "How to start Gaming Channel",
    "How to start YouTube Channel",
    "What does HTML stands for?",
    "What does CSS stands for?",
];
let $ = window.document;
let compatibleArray = [];
let inputValue;
let html;


// import tags and classes 
let inputElem = $.querySelector('.search-input');
let searchBox = $.querySelector('.searchBox');
let autoCom = $.querySelector('.auto-com');

//Events 
inputElem.addEventListener('keyup', inputSearchHandeler);


// Function

function inputSearchHandeler() {
    autoCom.textContent = "";
    html = [];
    inputValue = inputElem.value;
    if (!inputValue) {
        searchBox.classList.remove('active');
    }
    else {
        searchBox.classList.add('active');
        compatibleArray = suggestions.filter(function (item) {
            return item.toLowerCase().includes(inputValue.toLowerCase());
        })
        if (compatibleArray.length === 0) {
            html.push('<li onclick="clickItemHandler(event)" class="auto-com-item">' + inputValue + '</li>');
            // autoCom.insertAdjacentHTML('beforeend', html);
        }
        else {
            compatibleArray.map(function (sentence) {
                html.push('<li onclick="clickItemHandler(event)" class="auto-com-item">' + sentence + '</li>');
                // autoCom.insertAdjacentHTML('beforeend', html);
            })
        }
        let htmlElem = html.join(' ');
        autoCom.insertAdjacentHTML('beforeend', htmlElem);
    }
}

function clickItemHandler(event) {
    inputElem.value = event.target.textContent;
    searchBox.classList.remove('active');
}