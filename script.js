let step = 0;
const steps = document.querySelectorAll(".step");

function show(){
    steps.forEach(s=>s.classList.remove("active"));
    steps[step].classList.add("active");
}

function next(){
    step++;
    if(step>=steps.length) step=steps.length-1;
    show();
}

function yes(){
    step++;
    show();
}

function move(btn){
    btn.style.position="absolute";
    btn.style.left=Math.random()*250+"px";
    btn.style.top=Math.random()*250+"px";
}

window.addEventListener("click", ()=>{
    const music=document.getElementById("bgMusic");
    music.play().catch(()=>{});
},{once:true});


function openLetter(el){
    el.classList.add("open");
}

const heartContainer=document.querySelector(".bg-hearts");

function spawnHeart(){

    const heart=document.createElement("span");
    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    const duration=6+Math.random()*6;
    heart.style.animationDuration=duration+"s";

    const sizes=["small","mid","big"];
    heart.classList.add(sizes[Math.floor(Math.random()*sizes.length)]);

    heartContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },duration*1000);
}

setInterval(spawnHeart,500);

for(let i=0;i<12;i++){
    setTimeout(spawnHeart,i*200);
}
