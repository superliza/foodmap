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

	for (item of restaurants) {
		let photo = item.photo;
		let id = item.id;

		let $col = $('<div />', {'class': 'col s6 col-image'});
		let $ancourt = $('<a />', {'class': 'waves-effect waves-light modal-trigger food-modal'});
		let $img = $('<img />', {'class': 'responsive-img'});
		let $h5 = $('<h5 />', {'class': 'name'});

		$ancourt.attr('href', '#modal1');
		$ancourt.attr('data-name', item.name);
		$img.attr('data-name', item.name);
		$img.attr('data-address', item.address);
		$img.attr('data-food', item.food);
		$img.attr('src', photo);
		$h5.text(item.name);
		
		$col.append($h5);
		$col.append($ancourt);
		$ancourt.append($img);
		$pictures.append($col);
	}
	
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