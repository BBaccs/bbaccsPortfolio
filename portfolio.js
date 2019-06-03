//Set Variables
var btnJavaApp = document.querySelector('#btnJavaApp');
var javascriptApp = document.querySelectorAll('.portfolioItem:not(.javascript');
var btnTemplate = document.querySelector('#btnTemplate');
var templateSite = document.querySelectorAll('.portfolioItem:not(.template');
var btnShowAll = document.querySelector('#btnAll');
var btnRaw = document.querySelector("#btnRaw");
var rawCssSite = document.querySelectorAll('.portfolioItem:not(.rawCSS)');
var portfolioItems = document.querySelectorAll('.portfolioItem');
var btnReact = document.querySelector("#btnReactApp");


//Set functions
function showAllPortfolioItems(){
    for(i = 0; i < portfolioItems.length; i++){
        portfolioItems[i].classList.remove('hide');
    }
}


//Set Event Listeners
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

btnReact.addEventListener('click', function (){
    //create div
    const div = document.createElement('div');
    const section = document.querySelector('#portfolio');
    const portfolioImages = document.getElementById('portfolio-images');
    //insert html
    div.className = 'reactAlert';

    //add text
    div.appendChild(document.createTextNode('React work coming soon, for now check out my Vanilla JS Work'));
    
    //insert before ul
    section.insertBefore(div, portfolioImages);

    //only display alert for 3 seconds
    setTimeout(function(){
        document.querySelector('.reactAlert').remove();
    }, 6000);
});