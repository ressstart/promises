function applyForVisa(documents ) {
	console.log('Обработка заявления...');
	let promise = new Promise(function(resolve, reject){
			setTimeout(function() {
				Math.random() > 0 ? resolve({}) : reject('В визе отказано, не хватило документов.');
			}, 2000);
	});
	return promise;
}

function bookHotel(visa){
	console.log(visa);
	console.log("Бронируем отель!");
}

function buyTickets(){
	console.log("Покупаем билеты!");
}

applyForVisa({})
	.then(visa => {
		console.info("Виза получена!");
	return visa;
	})
	.then(bookHotel)
	.then(buyTickets)
	.catch(error => console.error(error))
	.then(() => console.log("I'm here yet!"));
/*	.then(
		function(visa) {
			console.info("Виза получена!");
	},
	function(reason) {
			console.error(reason);
		}); */
