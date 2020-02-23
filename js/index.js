

const anchorEvent = document.querySelectorAll('a');
for(let i = 0; i<anchorEvent.length; i++) {
    anchorEvent[i].addEventListener("mouseover", function(eventObject) {
        anchorEvent[i].style.color = "red";
    });
    anchorEvent[i].addEventListener("mouseleave", function(eventObject) {
        anchorEvent[i].style.color = "black";
});
}

const h1Event = document.querySelectorAll("h1");
for(let i = 0; i<h1Event.length; i++) {
    h1Event[i].addEventListener("mouseover", function(eventObject) {
    h1Event[i].style.fontSize = "800%";
    h1Event[i].style.transitionDuration = "1.2s";
    });
    h1Event[i].addEventListener("mouseleave", function(eventObject) {
    h1Event[i].style.fontSize = "400%";
    h1Event[i].style.transitionDuration = ".3s";
    });
}
const h2Event = document.querySelectorAll("h2");
for(let i = 0; i<h2Event.length; i++) {
    h2Event[i].addEventListener("mouseover", function(eventObject) {
    h2Event[i].style.fontSize = "400%";
    h2Event[i].style.transitionDuration = "1.2s";
    });
    h2Event[i].addEventListener("mouseleave", function(eventObject) {
    h2Event[i].style.fontSize = "320%";
    h2Event[i].style.transitionDuration = ".3s";
    });
}

const divEvent = document.getElementsByClassName('btn');
for(let i = 0; i<divEvent.length; i++) {
    divEvent[i].addEventListener("mouseover", function(eventObject) {
      divEvent[i].style.letterSpacing = "2px";
      divEvent[i].style.transitionDuration = ".8s";
    });
    divEvent[i].addEventListener("mouseleave", function(eventObject) {
        divEvent[i].style.letterSpacing = "1px";
        divEvent[i].style.transitionDuration = ".3s";
    });
    divEvent[i].addEventListener("click", function(eventObject) {
        divEvent[i].textContent = "Thank you!";
        eventObject.stopPropagation();
    });
    divEvent[i].addEventListener("dblclick", function(eventObject) {
        divEvent[i].textContent = "Sign Me Up!";
        eventObject.stopPropagation();
    });
    }

const bodyEvent = document.querySelector('body');
bodyEvent.addEventListener("click", function(eventObject) {
    bodyEvent.style.backgroundColor = "lightBlue";
});