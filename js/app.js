let $inputSearch = $('#search');	
let $pictures = $('#pictures');

const infoModal = (e) => {
	let $name = $('h4').text(e.target.dataset.name);
	let $address = $('.address').text(e.target.dataset.address);
	$('.modal-content').append($name);
	$('.moda-content').append($address);
}

const paintData = () => {
	let restaurants = data.restaurants;
	let template = 
		'<div class="col s6 col-image">' +
			'<h5 class="name"> NAME </h5>' +
			'<a class="waves-effect waves-light modal-trigger food-modal" href="#modal1" data-name="NAME">' +
				'<img class="responsive-img" data-name="NAME" data-address="ADDRESS" data-food="FOOD" src="SRC">' +
			'</a>' +
		'</div>';
	
	let templateRestaurants = "";
	
	for (item of restaurants) {
		// console.log(item)
		let $restaurantName = $('<h5 />');
		$restaurantName.text(item.name);
		templateRestaurants += template.replace("NAME", item.name)
									   .replace("NAME", item.name)
									   .replace('NAME', item.name)
									   .replace('ADDRESS', item.address)
									   .replace('FOOD', item.food)
									   .replace('SRC', item.photo);
	}

	$pictures.html(templateRestaurants);
}

const search = (e) => {
	e.preventDefault();
	$('h5').each(function() {
		let searchFood = $inputSearch.val().trim().toLowerCase();
		if ($(this).text().toLowerCase().indexOf(searchFood) !== -1) {
			$(this).closest('div').show();
		} else {
			$(this).closest('div').hide();
		}
		
	})
	
}

const loadPage = () => {
	setTimeout(() => {
		$('#splash-intro').fadeOut();
		$('div, nav').removeClass("hide");
	}, 2000)
	paintData();
	$inputSearch.keyup(search);
	$('.modal').modal();
	$(document).on('click', '.modal-trigger', infoModal);
}

window.onload = loadPage();