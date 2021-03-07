//EventListener for Changing title text when user clicks on title 
const h1Title = document.querySelector(".title h1");
h1Title.addEventListener('click' , ()=>{
    h1Title.textContent = "Have a Good Time!";
});

//toggle menu icon
const menuButton = document.querySelector("#menuButton");
const hiddenMenu = document.querySelector(".hiddenMenu");
const xIcon = document.querySelector("#x");

menuButton.addEventListener('click' , ()=>{
    hiddenMenu.style.display = "block";
});

xIcon.addEventListener('click' , ()=>{
    hiddenMenu.style.display = "none";
});


//Click Call button to require more content box
const callButton = document.querySelector(".call button");
const row2context = document.querySelector(".row2");

callButton.addEventListener('click' , ()=>{
    row2context.style.display = "flex";
})