// jQuery

$('#btnJavaApp').on('click', function(){
	$('ul#portfolio-images li').removeClass('hide');
	$('ul#portfolio-images li.usedTemplate').addClass('hide');
	$('ul#portfolio-images li.rawCss').addClass('hide');
})

$('#btnTemplate').on('click', function() {
	$('ul#portfolio-images li').removeClass('hide');
	$('ul#portfolio-images li.rawCss').addClass('hide');
	$('ul#portfolio-images li.jsApp').addClass('hide');
})

$('#btnAll').on('click', function(){
	$('ul#portfolio-images li').removeClass('hide');
})

$('#rawCss').on('click', function(){
	$('ul#portfolio-images li').removeClass('hide');
	$('ul#portfolio-images li.jsApp').addClass('hide');
	$('ul#portfolio-images li.usedTemplate').addClass('hide');
})



// Vanilla JS



// addEvent();

// function addEvent(){
// 	for(var i = 0; i < noJava.length; i++){
// 		btnJavaApp.addEventListener('click', function(){
// 			noJava[i].classList.add('hide');
// 		});
// 	}
// }



// WORKING JS, CHANGE CLASSES AND HTML + CSS CLASS
// WORKING JS, CHANGE CLASSES AND HTML + CSS CLASS

// set vars
// var btnJavaApp = document.querySelector('#btnJavaApp');
// var noJava = document.getElementsByClassName('jsApp');
// var btnTemplate = document.querySelector('#btnTemplate');
// var template = document.getElementsByClassName('usedTemplate');
// var showAll = document.querySelector('#btnAll')


// CODE
// showAll.addEventListener('click', function () {
// 	showPortfolioItems();
// })

// function showPortfolioItems() {
// 	var portfolioItem = document.getElementsByClassName('portfolioItem');
// 	for (var i = 0; i < portfolioItem.length; i++) {
// 		portfolioItem[i].classList.remove('hide');
// 	}
// }

// btnJavaApp.addEventListener('click', function(){
// 	showPortfolioItems();
// 	for (var i = 0; i < noJava.length; i++) {
// 		noJava[i].classList.add('hide');
// 	}
// })

// btnTemplate.addEventListener('click', function(){
// 	showPortfolioItems();
// 	for (var i = 0; i < template.length; i++) {
// 		template[i].classList.add('hide');
// 	}
// })

// WORKING JS, CHANGE CLASSES AND HTML + CSS CLASS
// WORKING JS, CHANGE CLASSES AND HTML + CSS CLASS






// bad code
// btnJavaApp.addEventListener('click', function(){
// 	noJava.classList.add('hide');
// })


// function (){
// 	for(var i = 0; i < noJava.length; i++){
// 	btnJavaApp.addEventListener('click', function(){
// 	noJava[1].classList.add('hide');
// 	})
// 	}
// }


































// $('#templates').on('click', function() {
// 	$('#portfolio-images').removeClass('hide', '.portfolioItem', function(){
// 	});
// 	$('.noTemplateHide').addClass('hide');
// });

// $('#all').on('click', function(){
// 	$('#portfolio-images').css('width', 100%, function(){
// 	});
// });

// $('#btnJavaApp').on('click', function(){
// 	$('#portfolio-images').removeClass('hide', '.portfolioItem', function(){
// 	});
// 	$('.nonJava').addClass('hide');
// });

// $('#templates').on('click', function() {
// 	$('#portfolio-images .portfolioItem').removeClass('hide', function(){
// 	});
// 	$('.noTemplateHide').addClass('hide');
// });

// $('#all').on('click', function(){
// 	$('#portfolio-images').css('width', 100%, function(){
// 	});
// });






//check off specific Todos By Clicking  from todo project not portolfio


// $('ul').on('click', 'li', function(){
// 	$(this).toggleClass('completed');
// });

// //click on X to delete Todo
// $('ul').on('click', 'span', function(event){
// 	$(this).parent().fadeOut(500, function(){
// 		$(this).remove();
// 		});
// 	event.stopPropagation();
// });




// var btnJavaApp = document.querySelector("#btnJavaApp");
// var list = document.querySelector("img");

// btnJavaApp.addEventListener("click", function () {
// 	for (i = 0; i < list.length; i++){
// 		list.classList.toggle("display");
// 	}
// });



		// Mobile Navbar

// var button = document.querySelector("button");
// var paragraph = document.querySelector("p");

//setup
// button.addEventListener("click", function() {
// 	paragraph.classList.toggle("hide");
// })

