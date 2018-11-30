//set vars
var btnJavaApp = document.querySelector('#btnJavaApp');
var noJava = document.getElementsByClassName('noJS');
var btnTemplate = document.querySelector('#btnTemplate');
var template = document.getElementsByClassName('noTemplate');
var btnShowAll = document.querySelector('#btnAll');
var btnRaw = document.querySelector("#btnRaw");
var rawCSS = document.querySelectorAll('.portfolioItem:not(.rawCSS)');
var portfolioItems = document.querySelectorAll('.portfolioItem');

//set functionS

function showAllPortfolioItems(){
    for(i = 0; i < portfolioItems.length; i++){
        portfolioItems[i].classList.remove('hide');
    }
}


//events

btnShowAll.addEventListener('click', function () {
    showAllPortfolioItems();
})

btnJavaApp.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < noJava.length; i++){
        noJava[i].classList.add('hide');
    }
})


btnTemplate.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < template.length; i++){
        template[i].classList.add('hide');
    }
})


btnRaw.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < rawCSS.length; i++){
        rawCSS[i].classList.add('hide');
    }
})
