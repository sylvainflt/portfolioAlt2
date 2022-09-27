//----------overlay------------------------------------
document.getElementById("airGoRunScreen").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "block";    
});
document.getElementById("overlay").addEventListener("click", () => {
    document.getElementById("overlay").style.display = "none";
});
//------------overlay2---------------------------------
document.getElementById("contactForm").addEventListener("click", () => {
    document.getElementById("overlay2").style.display = "block";
});
document.getElementById("overlay2").addEventListener("click", () => {
    document.getElementById("overlay2").style.display = "none";
});
//------------overlay3---------------------------------
document.getElementById("blogAPI").addEventListener("click", () => {
    document.getElementById("overlay3").style.display = "block";
});
document.getElementById("overlay3").addEventListener("click", () => {
    document.getElementById("overlay3").style.display = "none";
});
//------------overlay4---------------------------------
document.getElementById("mielConnect").addEventListener("click", () => {
    document.getElementById("overlay4").style.display = "block";
});
document.getElementById("overlay4").addEventListener("click", () => {
    document.getElementById("overlay4").style.display = "none";
});
//------------overlay5---------------------------------
document.getElementById("RCMortagne").addEventListener("click", () => {
    document.getElementById("overlay5").style.display = "block";
});
document.getElementById("overlay5").addEventListener("click", () => {
    document.getElementById("overlay5").style.display = "none";
});

/*---------------------------------------------------------------scrolls----------------------------------------------------------------------*/

function scrollToBienvenu(){
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollToRealisations(){
    window.scrollTo({
        top: 2*window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollToSkills(){
    window.scrollTo({
        top: 3*window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollToContact(){
    window.scrollTo({
        top: 4*window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}

function scrollBackToSkills(){
    window.scrollTo({
        top: 3*window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollBackToRealisations(){
    window.scrollTo({
        top: 2*window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollBackToBienvenu(){
    window.scrollTo({
        top: window.innerHeight,
        left: 0,
        behavior: 'smooth'
      });
}
function scrollToTop(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
}

/*----------------------------------------------------------------entree----------------------------------------------------------------------*/

let container = document.getElementById('entree');
let spans = document.querySelectorAll('span');
container.addEventListener('mousemove', function(e) {
    let X = e.pageX;
    let Y = e.pageY;   
    document.getElementById('webdev').style.transform = 'translate(' + X / 100 * 4 + 'px,' + Y / 100 * 4 + 'px)';
    document.getElementById('lienBienvenu').style.transform = 'translate(' + X / 100 * 7 + 'px,' + Y / 100 * 7 + 'px)';
});

/*-------------------------------------------------------------------sortie-----------------------------------------------------------------------------*/

function souffleNuages(e){
    let X = e.pageX;
    let Y = e.pageY;
    document.getElementById('nuageNom').style.transform = 'translate(' + X / 100 * -4 + 'px,' + Y / 200 * 2 + 'px)';    
    document.getElementById('nuageObjet').style.transform = 'translate(' + X / 100 * 3 + 'px,' + Y / 200 * 2 + 'px)';
    document.getElementById('nuageEmail').style.transform = 'translate(' + X / 100 * -3 + 'px,' + Y / 200 * 2 + 'px)';
    document.getElementById('nuageMessage').style.transform = 'translate(' + X / 100 * 4 + 'px,' + Y / 200 * 2 + 'px)';
    document.getElementById('nuageBouton').style.transform = 'translate(' + X / 100 * -2 + 'px,' + Y / 200 * 2 + 'px)';
}
const largeurLimite = 780;
window.addEventListener('load', function(){
    let contact = document.getElementById('contact');
    if(window.innerWidth > largeurLimite){        
        contact.addEventListener('mousemove', souffleNuages);
    }
});
window.addEventListener('resize', function(){
    let contact = document.getElementById('contact');
    if(window.innerWidth > largeurLimite){        
        contact.addEventListener('mousemove', souffleNuages);
    }else{
        contact.removeEventListener('mousemove', souffleNuages);
    }
});

/* ---------------------- en cas de superposition des champs ----------------*/

document.getElementById('nameContact').addEventListener('focus', function(){
    document.getElementById('nuageNom').style.zIndex = "1";
    document.getElementById('nuageObjet').style.zIndex = "0";
    document.getElementById('nuageEmail').style.zIndex = "0";
    document.getElementById('nuageMessage').style.zIndex = "0";
});
document.getElementById('objectContact').addEventListener('focus', function(){
    document.getElementById('nuageNom').style.zIndex = "0";
    document.getElementById('nuageObjet').style.zIndex = "1";
    document.getElementById('nuageEmail').style.zIndex = "0";
    document.getElementById('nuageMessage').style.zIndex = "0";

});
document.getElementById('emailContact').addEventListener('focus', function(){
    document.getElementById('nuageNom').style.zIndex = "0";
    document.getElementById('nuageObjet').style.zIndex = "0";
    document.getElementById('nuageEmail').style.zIndex = "1";
    document.getElementById('nuageMessage').style.zIndex = "0";

});
document.getElementById('message').addEventListener('focus', function(){
    document.getElementById('nuageNom').style.zIndex = "0";
    document.getElementById('nuageObjet').style.zIndex = "0";
    document.getElementById('nuageEmail').style.zIndex = "0";
    document.getElementById('nuageMessage').style.zIndex = "1";
});

/*-------------------------------------------------------------------canvas-----------------------------------------------------------------------------*/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height= window.innerHeight;
const particlesArray = [];
//let hue = 0;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height= window.innerHeight;    
    //this.location.reload();
})

const mouse = {
    x: undefined,
    y: undefined,
}
canvas.addEventListener('click', function(event){
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
    for(let i = 0; i< 10; i++){
        particlesArray.push(new Particle());
    }
});
canvas.addEventListener('mousemove', function(event){
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
    for(let i = 0; i< 5; i++){
        particlesArray.push(new Particle());
    }
})

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;        
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 -1.5;
        this.speedY = Math.random() * 3 -1.5;
        //this.color = 'hsl('+ hue +', 100%,50%)';
        this.color = 'white';
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.2) this.size  -= 0.1;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}
function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();        
        for(let j = i; j< particlesArray.length; j++){
            const dx = particlesArray[i].x - particlesArray[j].x;
            const dy = particlesArray[i].y - particlesArray[j].y;
            const distance = Math.sqrt(dx*dx + dy*dy);
            if(distance < 100){
                ctx.beginPath();
                ctx.strokeStyle = particlesArray[i].color;
                ctx.lineWidth = 0.2;
                ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                ctx.stroke();
                ctx.closePath();
            }
        }
        if(particlesArray[i].size <= 0.3){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}
function animate(){
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //ctx.fillStyle = 'rgba(0,0,0,0.02)';
    //ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    //hue+=2;

    requestAnimationFrame(animate);
}
animate();

window.addEventListener('scroll', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;    
});

/*----------------------------------------------------------------- Contact Form--------------------------------------------------------------*/

function contactSubmit(){
    
    const ec = document.getElementById("emailContact");
    const message = document.getElementById("message");
    //const cond = document.getElementById("checkCond");
    if(ec.value.trim() === '') {
        alert("Veuillez saisir votre e-mail.");
        ec.focus();
        return false;
    }
    if(message.value.trim() === '') {
        alert("Veuillez laisser un message.");
        message.focus();
        return false;
    }
    /*if(!cond.checked) {
        alert("Veuillez accepter les conditions.");
        cond.focus();
        return false;
    }*/
    
    if(!checkEmail() || !checkName()){
        return false;
    };

    var data = new FormData(document.getElementById('formContact'));

    var xhr = new XMLHttpRequest();

    xhr.open("POST", 'sendEmail.php', true);

    xhr.onreadystatechange = function() { // Call a function when the state changes.
        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            document.getElementById('formContact').innerHTML = this.response;
        }
    }
    xhr.send(data);    

    return true;  
};

function checkEmail() {

    const email = document.getElementById('emailContact');
    const filter = /^[a-z0-9]{1,}[\-\_\.a-z0-9]{0,}@[a-z]{2,}[\-\_\.a-z0-9]{0,}\.[a-z]{2,6}$/;

    if (!filter.test(email.value)) {
        alert("Le format d'adresse e-mail saisie n'est pas valide.");
        email.focus();
        return false;
    }
    return true;
}
function checkName() {

    const name = document.getElementById('nameContact');
    const filter = /^[A-Za-z '-]*$/;

    if (!filter.test(name.value)) {
        alert("Le format du nom saisi n'est pas valide. Veuillez écrire sans accents ni caractères spéciaux.");
        name.focus();
        return false;
    }
    return true;
}

/*-----------------------------------------------------------------navbar --------------------------------------------------------------------*/

document.getElementById('nav').addEventListener('mouseenter', function(){
    this.style.opacity = "1";
    
    if(window.pageYOffset >= 3*window.innerHeight){
        this.style.background = "#1020dd80";
    }else{
        this.style.background = "#F1F1F180";
    }
});
document.getElementById('nav').addEventListener('mouseleave', function(){
    this.style.opacity = "0";
    this.style.animation = "none";
});

/*--------------------------------------------------------------anims textes-------------------------------------------------------------*/

var motEcrit = false;
var logosRemontes = false;
document.getElementsByClassName('bvp')[0].style.opacity = 0;
document.getElementsByClassName('rvt')[0].style.opacity = 0;
document.getElementsByClassName('rvt2')[0].style.opacity = 0;
document.getElementsByClassName('rvt3')[0].style.opacity = 0;

window.addEventListener('scroll', function(){
    
    if(!motEcrit && window.scrollY > window.innerHeight-200 && window.scrollY < 2*window.innerHeight){

        document.getElementsByClassName('bvp')[0].style.opacity = 1;        

        // Wrap every letter in a span
        var textWrapper = document.querySelector('.bvp');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

        anime.timeline()
        .add({
            targets: '.bvp .letter',            
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 700,
            delay: (el, i) => 70*i
        }).add({
            targets: '.rvt',
            opacity: [0,1],
            easing: "linear",
            duration: 700
        }).add({
            targets: '.rvt2',
            opacity: [0,1],
            easing: "linear",
            duration: 700
        }).add({
            targets: '.rvt3',
            opacity: [0,1],
            easing: "linear",
            duration: 700
        });
        motEcrit = true;
    }
    else if(!logosRemontes && window.scrollY > 3*window.innerHeight-200 && window.scrollY < 4*window.innerHeight)
    {
        anime.timeline()
        .add({
            targets: '.contourLogo',
            translateY: [100,0],
            translateZ: 0,
            opacity: [0,1],
            easing: "easeOutExpo",
            duration: 1400,
            delay: (el, i) => 300 + 180 * i
        });
        logosRemontes = true;
    }
    const success = document.getElementsByClassName('alert-success')[0];
    if(success != undefined){
        success.parentElement.removeChild(success);
    }    
});

function checkMessage(){
    const success = document.getElementsByClassName('alert-success')[0];
    if(success != undefined){
        success.parentElement.removeChild(success);
    }
};

/* ------------------------------- raffraichissement aprés un rotate du telephone -----------------------------*/
function refreshMobileOrientation(){
    location.reload();
}
window.addEventListener("orientationchange", refreshMobileOrientation);

/*-------------------------------Mise En Rond----------------------------------------------------------------------*/

function positionCercle(element, theta){
    element.style.left = 50 + (50 * Math.cos(theta)) + '%';
    element.style.top = 50 + (50 * Math.sin(theta)) + '%';
}

const skillTab = document.querySelectorAll('.skill');
let angle = (Math.PI * 2) / skillTab.length;
let r = 1;
let anim = null;
let enPosition = false;
let derniereIconeP = null;
let iconeCentre = false;
const pointBleu = document.querySelector('.centreSkills');

function tourner(){
    
    if(derniereIconeP != null){
        derniereIconeP.style.display = 'none';
    }

    for (let i = 0; i < skillTab.length; i++ ){
        let skill = skillTab[i];
        positionCercle(skill, angle*i + r);
    }
    r += 0.01;
    anim = requestAnimationFrame(tourner);
}

function miseEnRond(){

    // mettre les skill dans un tableau
    let skillsTitle = document.querySelector('.skillsTitle');
    let skillsTable = document.querySelector('.skillsTable');
        
    for (let i = 0; i < skillTab.length; i++ ){
        let skill = skillTab[i];
        // cacher le <p>
        //skill.children[1].style.display = 'none';
        // centrer les elements
        skill.classList.add('skillCentered');
        // positionner en cercle
        positionCercle(skill, angle*i);

    }
    
    enPosition = true;
    tourner();
}

function demarrage(){
    if(anim != null){
        cancelAnimationFrame(anim);
        anim = null;        
        pointBleu.style.animation = 'none';
        return;
    }
    // si premiere fois -> mise en place
    if(!enPosition){
        miseEnRond();
    }else{ // sinon, juste relancer
        iconeCentre = false;
        pointBleu.style.animation = 'skillsTurning 2s linear infinite forwards';
        tourner();
    }
}

function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}


const competences = document.querySelector('.competences');

document.addEventListener('scroll', function () {
    if(isInViewport(competences) && !enPosition) {
        demarrage();
    }       

});


function afficheTechno(e){
    if(iconeCentre){
        return;
    }
    let img = e.path[3];
    let a = e.path[2];
    let p = img.children[1];
    img.style.left = '50%';
    img.style.top = '50%';
    p.style.display = 'block';
    pointBleu.style.animation = 'skillInCenter 2s linear infinite forwards';

    derniereIconeP = p;
    iconeCentre = true;
}

/*=============================================================== MENU BURGER =============================================================*/

let menuDeroule = false;

function menuBurger(){
    if(!menuDeroule){
        document.getElementById("menuBurger").style.width = "50%";
        
    }else{
        document.getElementById("menuBurger").style.width = "0";
    }
    menuDeroule = !menuDeroule;
}