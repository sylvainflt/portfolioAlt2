/*============================================ essai algo avec mousedown mousemove mouseup ============================================================================
const track = document.querySelector(".carousel");
let initialPosition = null;
let moving  = false;
const gestureStart = (e) => {
    initialPosition = e.pageX;
    moving = true;
};
const gestureMove = (e) => {
    if(moving) {
        const currentPosition = e.pageX;
        console.log('currentPosition : '+currentPosition+' initialPosition : '+initialPosition);
        const diff = currentPosition - initialPosition;
        let tangente = diff/450;
        let angle = Math.atan(tangente) * (180/Math.PI);
        console.log('diff : '+diff+' tangente : '+tangente+' angle : '+angle);
        track.style.transform = `translateZ(-450px) rotateY(${diff}deg)`; 
    }
};
const gestureEnd = (e) => {
    moving = false;
};
*/

/*=============================================================== essai algo carousel dragging =======================================================================
// recup les images -> tableau
const carouselInputs = document.querySelectorAll('.carouselDiv input');
console.log(carouselInputs);
const imagesCarousel = document.querySelectorAll('.carousel img');
console.log(imagesCarousel);
// leur donner un id
// gerer le rotateY -> 6 * 60deg, parametrer le translateZ
const rotationAngle = 60;
const translateZpx = 270;
// l'event indique l'element a tourner (srcElement)
// petite fonction pour trouver le suivant et le precedent
Number.prototype.mod = function(n) {
	var m = (( this % n) + n) % n;
	return m < 0 ? m + Math.abs(n) : m;
};
function trouverSuivant(image){
    for (let i = 0; i < imagesCarousel.length; i++){
        if(imagesCarousel[i] == image){
            return { nextInput: carouselInputs[ parseInt(i+1).mod(imagesCarousel.length) ], 
                    nextImage: imagesCarousel[ parseInt(i+1).mod(imagesCarousel.length) ],
                    input: carouselInputs[i]
                     };
        }
    }
}
function trouverPrecedent(image){
    for (let i = 0; i < imagesCarousel.length; i++){
        if(imagesCarousel[i] == image){
            return { previousInput: carouselInputs[ parseInt(i-1).mod(imagesCarousel.length) ], 
                    previousImage: imagesCarousel[ parseInt(i-1).mod(imagesCarousel.length) ],
                    input: carouselInputs[i]
                    };
        }
    }
}
let dragStartEvent = null;
let direction = null;
let indiceCourant = 0; 

function drag(event, indCourant){
    console.log(event);
    dragStartEvent = event; 
    event.srcElement.ontouchend = findDirectionTourner;
}
function clickRadio(event, indice){
    findDirectionTourner(null, indice);
}
function findDirectionTourner(e, indice){
    
    if(indice != null){
        direction = -1;
        indiceCourant = indice;
    }
    else {
        console.log(e);
        direction = e.changedTouches[0].clientX - dragStartEvent.changedTouches[0].clientX;
    }
    if(direction > 0){

        console.log('indiceCourant : '+indiceCourant);

        let angle = parseInt(rotationAngle * (indiceCourant+1)).mod(360);    
        console.log('angle apres modulo 360 : '+angle);

        if(angle == 0){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px)"; 
        }else {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY("+angle+"deg)"; 
        }
        // element suivant
        let elementPrecedent = trouverPrecedent(e.srcElement);
        console.log(elementPrecedent);

        if(angle == 0){
            elementPrecedent.previousImage.style.transform = "translateZ("+translateZpx+"px) scale(1)";
        }else {
            elementPrecedent.previousImage.style.transform = "rotateY(-"+angle+"deg) translateZ("+translateZpx+"px) scale(1)";
        }
        elementPrecedent.previousImage.style.opacity = 1;
        elementPrecedent.previousInput.checked = true;

        // element courant
        let angleRetour = angle - rotationAngle;
        console.log('angleRetour : '+angleRetour);

        if(angleRetour==0){
            e.srcElement.style.transform = "translateZ("+translateZpx+"px) scale(.8)";
        }else {
            e.srcElement.style.transform = "rotateY(-"+angleRetour+"deg) translateZ("+translateZpx+"px) scale(.8)";
        }
        e.srcElement.style.opacity = .5;

        elementPrecedent.input.checked = false;

        indiceCourant--;
        console.log("indiceCourant : "+indiceCourant);
        indiceCourant = parseInt(indiceCourant).mod(imagesCarousel.length);
        console.log("indiceCourantApresModulo : "+indiceCourant);
        
    }else if (direction < 0){ 

        console.log('indiceCourant : '+indiceCourant);

        let angle = parseInt(rotationAngle * (indiceCourant+1)).mod(360);    
        console.log('angle apres modulo 360 : '+angle);

        if(angle == 0){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-"+angle+"deg)"; 
        }else {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-"+angle+"deg)";
        }
        // element suivant
        let elementSuivant = trouverSuivant(e.srcElement);
        console.log(elementSuivant);

        if(angle == 0){
            elementSuivant.nextImage.style.transform =  "rotateY("+angle+"deg) translateZ("+translateZpx+"px) scale(1)";
        }else {            
            elementSuivant.nextImage.style.transform =  "rotateY("+angle+"deg) translateZ("+translateZpx+"px) scale(1)";
        }
        elementSuivant.nextImage.style.opacity = 1;
        elementSuivant.nextInput.checked = true;
        // element courant
        let angleRetour = angle - rotationAngle;
        console.log('angleRetour : '+angleRetour);

        if(angleRetour==0){
            e.srcElement.style.transform = "translateZ("+translateZpx+"px) scale(.8)";
        }else{            
            e.srcElement.style.transform = "rotateY("+angleRetour+"deg) translateZ("+translateZpx+"px) scale(.8)";
        }       
        e.srcElement.style.opacity = .5;

        elementSuivant.input.checked = false; 

        indiceCourant++;  
        console.log("indiceCourant : "+indiceCourant);
        indiceCourant = parseInt(indiceCourant).mod(imagesCarousel.length);
        console.log("indiceCourantApresModulo : "+indiceCourant);
    }
}
*/

/*=========================================================================== partie desktop ==========================================================*/
const carouselTaille = window.getComputedStyle(document.querySelector('.carousel')).getPropertyValue('transform');
const translateZpx = Math.abs(carouselTaille.split(',')[14]);

/*================== desktop et mobile =========================*/
document.getElementById("airGoRunScreen").style.transform = "translateZ("+translateZpx+"px) scale(1)";
document.getElementById("airGoRunScreen").style.opacity = 1;
document.getElementById("descProj1").style.display = "block";
/*=============================================================*/

function drag1(event){     
    document.getElementById("airGoRunScreen").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-60deg)"; 
            document.getElementById("contactForm").style.transform =  "rotateY(60deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("contactForm").style.opacity = 1;
            document.getElementById("descProj2").style.display = "block";
            document.getElementById("airGoRunScreen").style.transform = "translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("airGoRunScreen").style.opacity = .5;
            document.getElementById("descProj1").style.display = "none";
        }
    }
}
function drag2(event){
    document.getElementById("contactForm").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX > 20) {            
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(0deg)"; 
            document.getElementById("airGoRunScreen").style.transform =  "rotateY(0deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("airGoRunScreen").style.opacity = 1;
            document.getElementById("descProj1").style.display = "block";
            document.getElementById("contactForm").style.transform = "rotateY(60deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("contactForm").style.opacity = .5;
            document.getElementById("descProj2").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-120deg)"; 
            document.getElementById("blogAPI").style.transform =  "rotateY(120deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("blogAPI").style.opacity = 1;
            document.getElementById("descProj3").style.display = "block";
            document.getElementById("contactForm").style.transform = "rotateY(60deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("contactForm").style.opacity = .5;
            document.getElementById("descProj2").style.display = "none";
        }
    }
}
function drag3(event){
    document.getElementById("blogAPI").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-60deg)"; 
            document.getElementById("contactForm").style.transform =  "rotateY(60deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("contactForm").style.opacity = 1;
            document.getElementById("descProj2").style.display = "block";
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("blogAPI").style.opacity = .5;
            document.getElementById("descProj3").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-180deg)"; 
            document.getElementById("mielConnect").style.transform =  "rotateY(180deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("mielConnect").style.opacity = 1;
            document.getElementById("descProj4").style.display = "block";
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("blogAPI").style.opacity = .5;
            document.getElementById("descProj3").style.display = "none";
        }

    }
}
function drag4(event){
    document.getElementById("mielConnect").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-120deg)"; 
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("blogAPI").style.opacity = 1;
            document.getElementById("descProj3").style.display = "block";
            document.getElementById("mielConnect").style.transform = "rotateY(180deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("mielConnect").style.opacity = .5;
            document.getElementById("descProj4").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-240deg)"; 
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("RCMortagne").style.opacity = 1;
            document.getElementById("descProj5").style.display = "block";
            document.getElementById("mielConnect").style.transform = "rotateY(180deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("mielConnect").style.opacity = .5;
            document.getElementById("descProj4").style.display = "none";
        }
    }
}
function drag5(event){
    document.getElementById("RCMortagne").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-180deg)"; 
            document.getElementById("mielConnect").style.transform =  "rotateY(180deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("mielConnect").style.opacity = 1;
            document.getElementById("descProj4").style.display = "block";
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("RCMortagne").style.opacity = .5;
            document.getElementById("descProj5").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-300deg)"; 
            document.getElementById("naturePV").style.transform =  "rotateY(300deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("naturePV").style.opacity = 1;
            document.getElementById("descProj6").style.display = "block";
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("RCMortagne").style.opacity = .5;
            document.getElementById("descProj5").style.display = "none";
        }
    }
}
function drag6(event){
    document.getElementById("naturePV").ondragend = (e) => {
        const movedX = e.pageX - event.pageX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-240deg)"; 
            document.getElementById("RCMortagne").style.transform =  "rotateY(240deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("RCMortagne").style.opacity = 1;
            document.getElementById("descProj5").style.display = "block";
            document.getElementById("naturePV").style.transform = "rotateY(300deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("naturePV").style.opacity = .5;
            document.getElementById("descProj6").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(0deg)"; 
            document.getElementById("airGoRunScreen").style.transform =  "rotateY(0deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("airGoRunScreen").style.opacity = 1;
            document.getElementById("descProj1").style.display = "block";
            document.getElementById("naturePV").style.transform = "rotateY(300deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("naturePV").style.opacity = .5;
            document.getElementById("descProj6").style.display = "none";            
        }
    }
}
/*=========================================================================== partie mobile ==========================================================*/
function touch1(event){    
    document.getElementById("airGoRunScreen").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-60deg)"; 
            document.getElementById("contactForm").style.transform =  "rotateY(60deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("contactForm").style.opacity = 1;
            document.getElementById("descProj2").style.display = "block";
            document.getElementById("airGoRunScreen").style.transform = "translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("airGoRunScreen").style.opacity = .5;
            document.getElementById("descProj1").style.display = "none";
        }
    }
}
function touch2(event){
    document.getElementById("contactForm").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX > 20) {            
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(0deg)"; 
            document.getElementById("airGoRunScreen").style.transform =  "rotateY(0deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("airGoRunScreen").style.opacity = 1;
            document.getElementById("descProj1").style.display = "block";
            document.getElementById("contactForm").style.transform = "rotateY(60deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("contactForm").style.opacity = .5;
            document.getElementById("descProj2").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-120deg)"; 
            document.getElementById("blogAPI").style.transform =  "rotateY(120deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("blogAPI").style.opacity = 1;
            document.getElementById("descProj3").style.display = "block";
            document.getElementById("contactForm").style.transform = "rotateY(60deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("contactForm").style.opacity = .5;
            document.getElementById("descProj2").style.display = "none";
        }
    }
}
function touch3(event){
    document.getElementById("blogAPI").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-60deg)"; 
            document.getElementById("contactForm").style.transform =  "rotateY(60deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("contactForm").style.opacity = 1;
            document.getElementById("descProj2").style.display = "block";
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("blogAPI").style.opacity = .5;
            document.getElementById("descProj3").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-180deg)"; 
            document.getElementById("mielConnect").style.transform =  "rotateY(180deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("mielConnect").style.opacity = 1;
            document.getElementById("descProj4").style.display = "block";
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("blogAPI").style.opacity = .5;
            document.getElementById("descProj3").style.display = "none";
        }

    }
}
function touch4(event){
    document.getElementById("mielConnect").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-120deg)"; 
            document.getElementById("blogAPI").style.transform = "rotateY(120deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("blogAPI").style.opacity = 1;
            document.getElementById("descProj3").style.display = "block";
            document.getElementById("mielConnect").style.transform = "rotateY(180deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("mielConnect").style.opacity = .5;
            document.getElementById("descProj4").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-240deg)"; 
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("RCMortagne").style.opacity = 1;
            document.getElementById("descProj5").style.display = "block";
            document.getElementById("mielConnect").style.transform = "rotateY(180deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("mielConnect").style.opacity = .5;
            document.getElementById("descProj4").style.display = "none";
        }
    }
}
function touch5(event){
    document.getElementById("RCMortagne").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-180deg)"; 
            document.getElementById("mielConnect").style.transform =  "rotateY(180deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("mielConnect").style.opacity = 1;
            document.getElementById("descProj4").style.display = "block";
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("RCMortagne").style.opacity = .5;
            document.getElementById("descProj5").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-300deg)"; 
            document.getElementById("naturePV").style.transform =  "rotateY(300deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("naturePV").style.opacity = 1;
            document.getElementById("descProj6").style.display = "block";
            document.getElementById("RCMortagne").style.transform = "rotateY(240deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("RCMortagne").style.opacity = .5;
            document.getElementById("descProj5").style.display = "none";
        }
    }
}
function touch6(event){
    document.getElementById("naturePV").ontouchend = (e) => {
        const touches = e.changedTouches;
        const movedX = touches[0].clientX - event.touches[0].clientX;
        if(movedX > 20) {
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(-240deg)"; 
            document.getElementById("RCMortagne").style.transform =  "rotateY(240deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("RCMortagne").style.opacity = 1;
            document.getElementById("descProj5").style.display = "block";
            document.getElementById("naturePV").style.transform = "rotateY(300deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("naturePV").style.opacity = .5;
            document.getElementById("descProj6").style.display = "none";
        }else if(movedX < -20){
            document.querySelector(".carousel").style.transform = "translateZ(-"+translateZpx+"px) rotateY(0deg)"; 
            document.getElementById("airGoRunScreen").style.transform =  "rotateY(0deg) translateZ("+translateZpx+"px) scale(1)";
            document.getElementById("airGoRunScreen").style.opacity = 1;
            document.getElementById("descProj1").style.display = "block";
            document.getElementById("naturePV").style.transform = "rotateY(300deg) translateZ("+translateZpx+"px) scale(.8)";
            document.getElementById("naturePV").style.opacity = .5;
            document.getElementById("descProj6").style.display = "none";            
        }
    }
}