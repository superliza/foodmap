let $inputSearch = $('#search');	
let $pictures = $('#pictures');

const infoModal = (e) => {
	e.preventDefault();
	let $name = $('h4').text(e.target.dataset.name);
	let $address = $('.address').text(e.target.dataset.address);
	let $menu = $('.menu').text(e.target.dataset.menu);
	// console.log(e.target.dataset.menu);
	$name.addClass('center-align');

	$('.name-modal').prepend($name);
	$('.modal-address').append($address);
	$('modal-menu').append($menu);
}

const paintData = () => {
	let restaurants = data.restaurants;
	let template = 
		'<div class="col s6 col-image">' +
			'<h5 class="name"> NAME </h5>' +
			'<a class="waves-effect waves-light modal-trigger food-modal" href="#modal1" data-name="NAME" data-address="ADDRESS" data-menu="MENU">' +
				'<img class="responsive-img" data-name="NAME" data-address="ADDRESS" data-food="FOOD" data-menu="MENU" src="SRC">' +
			'</a>' +
		'</div>';
	
	let templateRestaurants = "";
	
	for (item of restaurants) {
		// console.log(item)
		templateRestaurants += template
		.replace("NAME", item.name)
		.replace("NAME", item.name)
		.replace('ADDRESS', item.address)
		.replace('MENU', item.menu)
		.replace('NAME', item.name)
		.replace('ADDRESS', item.address)
		.replace('FOOD', item.food)
		.replace('MENU', item.menu)
		.replace('SRC', item.photo);
	}

	$pictures.html(templateRestaurants);
}

const search = (e) => {
	e.preventDefault();
	$('h5').each(function() {
		e.preventDefault();
		let searchFood = $inputSearch.val().trim().toLowerCase();
		if ($(this).text().toLowerCase().indexOf(searchFood) !== -1) {
			$(this).closest('div').show();
		} else {
			// $('#coincidences:empty').removeClass('hide');
			$(this).closest('div').hide();
			// $('#the-restaurants').empty();
		}
		
	})
	// $('#coincidences').empty();
}

const loadPage = () => {
	setTimeout(() => {
		$('#splash-intro').fadeOut();
		$('div, nav').removeClass('hide');
	}, 4000)
	paintData();
	$inputSearch.keyup(search);
	$('.modal').modal();
	$(document).on('click', '.modal-trigger', infoModal);
}

window.onload = loadPage();