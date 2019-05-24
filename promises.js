function applyForVisa(documents ) {
	console.log('Обработка заявления...');
	let promise = new Promise(function(resolve, reject){
			setTimeout(function() {
				Math.random() > .5 ? resolve({}) : reject('В визе отказано, не хватило документов.');
			}, 2000);
	});
	return promise;
}

function bookHotel(){}

function buyTickets(){}

applyForVisa({})
	.then(
		function(visa) {
			console.info("Виза получена!");
	},
	function(reason) {
			console.error(reason);
		});