//set vars
var btnJavaApp = document.querySelector('#btnJavaApp');
var javascriptApp = document.querySelectorAll('.portfolioItem:not(.javascript');
var btnTemplate = document.querySelector('#btnTemplate');
var templateSite = document.querySelectorAll('.portfolioItem:not(.template');
var btnShowAll = document.querySelector('#btnAll');
var btnRaw = document.querySelector("#btnRaw");
var rawCssSite = document.querySelectorAll('.portfolioItem:not(.rawCSS)');
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

btnTemplate.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < templateSite.length; i++){
        templateSite[i].classList.add('hide');
    }
})

btnJavaApp.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < javascriptApp.length; i++){
        javascriptApp[i].classList.add('hide');
    }
})


btnRaw.addEventListener('click', function () {
    showAllPortfolioItems();
    for(i = 0; i < rawCssSite.length; i++){
        rawCssSite[i].classList.add('hide');
    }
})
