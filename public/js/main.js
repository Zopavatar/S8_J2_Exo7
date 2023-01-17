// Pour l'exercice 2
let theColor = "red";
let theBackground = "gold";
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

function maFonction(contenu){
    document.getElementsByTagName("section")[0].getElementsByTagName("p")[0].innerText += contenu;
}

document.getElementsByTagName("input")[0].addEventListener('click',function(){
    maFonction(pContent);
})

let h1 = document.getElementsByTagName("h1")[0];

function background(background,text){
    h1.style = `background: ${background}; color:${text}`;
}

h1.addEventListener('click',function(){
    background(theBackground,theColor);
})

