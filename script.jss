// CARD ANIMATION

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

});

cards.forEach((card)=>{

card.style.opacity = "0";
card.style.transform = "translateY(40px)";
card.style.transition = "all 0.8s ease";

observer.observe(card);

});

console.log("🚀 Tej Prakash Tiwari Portfolio Loaded Successfully");
