

//Traemos elementos
// var $inputSearch = $("#search");
// var $clearInput = $(".clear-input");
// var accessData = data['restaurants'];

// function loadPage() {
// 	//vista splash
// 	setTimeout(function() {
// 		$('#splash-intro').fadeOut();
// 		$('div, nav').removeClass("hide");
// 	}, 2000)
// 	//asignamos evento al input
// 	$inputSearch.keyup(filterFood);
// }

// function paintHTML(restaurant) {

// 	var $colImages = $('.col-image');
// 	//se crean elementos
// 	var $imagesFood = $('<img />', 
// 		{'class': 'waves-effect waves-light modal-trigger responsive-img food-restaurant'});

// 	//se agregan atributos y todo lo que necesite
// 	$imagesFood.attr('src', data['restaurants']['photo']);
// 	$imagesFood.attr('data-target', 'modal1');
// 	$imagesFood.attr('alt', 'food');

// 	//se agregan al padre
// 	$colImages.append($imagesFood);
// }

// //se accede a la data y se va filtrando
// function filterFood(e) {
// 	var arrFood = [];
// 	e.preventDefault();
// 	// se crea una variable y lo que ingrese el usuario en el input, convertirlo a minúsculas y elimine los espacios en blanco de extremo a extremo
// 	var $searchFood = $inputSearch.val().trim().toLowerCase();

// 	// le decimos que el valor de la longitud de la búsqueda del usuario es mayor a 0
// 	if($inputSearch.val().trim().length > 0) {
// 		var $filterRestaurant = accessData.filter(function(restaurant){ //filtrar la búsqueda de la data del array dado
// 			//console.log(restaurant['name'].toLowerCase().indexOf($searchFood) >= 0);
// 			//console.log(restaurant);
// 			/*for(var i in restaurant) { //por medio de un for in ingreso a los objetos del array
// 				console.log(restaurant[i]);*/
// 				return restaurant.name.toLowerCase().indexOf($searchFood) >= 0; //y le digo que me regrese los values de las keys por el índice que se buscó en el input
// 				//.toLowerCase().indexOf($searchFood) >= 0
						
// 		});	
// 			//console.log(allRestaurant);
		
// 		$clearInput.empty();
// 		$filterRestaurant.forEach(function(restaurant) {
// 			//console.log($filterRestaurant);
// 			//paintHTML(restaurant);
// 			for (var i in restaurant) {
// 				var allRestaurant = restaurant[i];
// 				paintHTML(allRestaurant);
// 			}
// 		});

// 	} 
// }
	
// 	//console.log(accessData);

// $(document).ready(loadPage);

var $inputSearch = $("#search");
var $clearInput = $(".clear-input");
var accessData = data['restaurants'];

function loadPage() {
	setTimeout(function() {
		$('#splash-intro').fadeOut();
		$('div, nav').removeClass("hide");
	}, 2000)
	$inputSearch.keyup(filterFood);
}

function paintHTML(restaurant) {

	var $colImages = $('.col-image');
	//se crean elementos
	var $imagesFood = $('<img />', 
		{'class': 'waves-effect waves-light modal-trigger responsive-img food-restaurant'});

	//se agregan atributos y todo lo que necesite
	$imagesFood.attr('src', restaurant['photo']);
	$imagesFood.attr('data-target', 'modal1');
	$imagesFood.attr('alt', 'food');

	//se agregan al padre
	$colImages.append($imagesFood);
}

function filterFood(e) {
	e.preventDefault();
	var $searchFood = $inputSearch.val().trim().toLowerCase();

	if($inputSearch.val().trim().length > 0) {
		var $filterRestaurant = accessData.filter(function(restaurant){
			//console.log($filterRestaurant);
			return (restaurant['name'].toLowerCase().indexOf($searchFood) >= 0);
		});

		//$clearInput.empty();
		$filterRestaurant.forEach(function(restaurant) {
			paintHTML(restaurant);
		});

	} 
}
	
	//console.log(accessData);

$(document).ready(loadPage);
