//Set constiables
const btnJavaApp = document.querySelector('#btnJavaApp');
const javascriptApp = document.querySelectorAll('.portfolioItem:not(.javascript');
const btnTemplate = document.querySelector('#btnTemplate');
const templateSite = document.querySelectorAll('.portfolioItem:not(.template');
const btnShowAll = document.querySelector('#btnAll');
const btnRaw = document.querySelector("#btnRaw");
const rawCssSite = document.querySelectorAll('.portfolioItem:not(.rawCSS)');
const portfolioItems = document.querySelectorAll('.portfolioItem');
const btnReact = document.querySelector("#btnReactApp");

//Set functions
function showAllPortfolioItems(){
    for(i = 0; i < portfolioItems.length; i++){
        portfolioItems[i].classList.remove('hide');
    }
}

function hidePortfolioItems(portfolioItems) {
    for(i = 0; i < portfolioItems.length; i++){
        portfolioItems[i].classList.add('hide');
    }
}

// Submit form
function submitForm(e) {
    // Get values
    const contactForm = document.querySelector('#contactForm'),
            nameVal = contactForm.name.value,
            phoneVal = contactForm.phone.value,
    // Regexpressions, form validation
          phoneValidation = /^([0-9]{3}[\- ]){2}[0-9]{4}$/,
          lettersValidation = /^[a-z]{2}/gi,
          numbersValidation = /[0-9]/;

    //Validate phone #, spaces at the end will be trimmed
    if (!phoneValidation.test(phoneVal.trim()) & phoneVal !== '') {
        e.preventDefault();

        //create div
        const div = document.createElement('div');
        const contactSection = document.querySelector('#container-contact');
        const contactHeading = document.getElementById('contact-heading');
        //insert html
        div.className = 'contactAlert';
        //add text
        div.appendChild(document.createTextNode(`If you choose to fill out a number, it can only contain spaces and '-' between numbers and must be propely formatted, 555-555-5555.`));
        //insert before ul
        contactSection.insertBefore(div, contactHeading);

        setTimeout(function(){
            document.querySelector('.contactAlert').remove();
        }, 8000);  
    }
    // Name must have at least two letters, and cannot contain numbers.
    if (lettersValidation.test(nameVal) & !numbersValidation.test(nameVal) || nameVal === '') {
    } else {
        e.preventDefault();
            //create div
            const div = document.createElement('div');
            const contactSection = document.querySelector('#container-contact');
            const contactHeading = document.getElementById('contact-heading');
            //insert html
            div.className = 'contactAlert';
            //add text
            div.appendChild(document.createTextNode(`Name must start with at least two letters, and cannot contain numbers.`));
            //insert before ul
            contactSection.insertBefore(div, contactHeading);
    
            setTimeout(function(){
                document.querySelector('.contactAlert').remove();
            }, 8000); 
    }
}


//Set Event Listeners
btnShowAll.addEventListener('click', function () {
    const portfolioImagesHidden = document.querySelector('.hide');
    if (portfolioImagesHidden) {
        //create div
        const div = document.createElement('div');
        const section = document.querySelector('#portfolio');
        const btnAllContainer = document.querySelector('#btnAllContainer');
        //insert html
        div.className = 'showAllAlert';

        //add text
        div.appendChild(document.createTextNode('Success! All projects are showing.'));
        
        //insert before ul
        section.insertBefore(div, btnAllContainer);

        //only display alert for a few seconds
        setTimeout(function(){
            document.querySelector('.showAllAlert').remove();
        }, 4000);
    } else {
        //create div
        const div = document.createElement('div');
        const section = document.querySelector('#portfolio');
        const btnAllContainer = document.querySelector('#btnAllContainer');
        //insert html
        div.className = 'showAllAlertFailed';

        //add text
        div.appendChild(document.createTextNode('All projects are already showing.'));
        
        //insert before ul
        section.insertBefore(div, btnAllContainer);

        //only display alert for a few seconds
        setTimeout(function(){
            document.querySelector('.showAllAlertFailed').remove();
        }, 4000);
    }
    showAllPortfolioItems();
});

btnTemplate.addEventListener('click', function () {
    showAllPortfolioItems();
    hidePortfolioItems(templateSite);
});

btnJavaApp.addEventListener('click', function () {
    showAllPortfolioItems();
    hidePortfolioItems(javascriptApp);
});


btnRaw.addEventListener('click', function () {
    showAllPortfolioItems();
    hidePortfolioItems(rawCssSite);
});

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

    //only display alert for a few seconds
    setTimeout(function(){
        document.querySelector('.reactAlert').remove();
    }, 6000);
});

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);