App.Router.map(function () {
	this.resource('events', function () {
		
		// Nested resource inside events route
		this.resource('event', {path: ':id'}); 
	});
	
	this.resource('acts', function () {
		
		// Nested resource inside acts route
		this.resource('act', {path: ':id'}); 
	});
});