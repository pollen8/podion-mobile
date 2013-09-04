App = Ember.Application.create();

// Define urls
App.Router.map(function () {
	this.resource('departements');
	this.resource('events', function () {
		
		// Child route;
		this.resource('event', {path: ':id'});
	});
	
});

App.IndexRoute = Ember.Route.extend({
	  redirect: function() {
	    this.transitionTo('events.index');
	  }
	});

App.EventsRoute = Ember.Route.extend({
	model: function () {
		return events;
	}
});



var events = [{
	id: '1',
	title: 'atomic jam',
	date: new Date('12-27-2013'),
	image: '/images/test2.png',
	description: 'blab bhab'
},
{
	id: '2',
	title: 'ultimate orange',
	date: new Date('12-17-2013'),
	image: '/images/test.png',
	description: 'blab bhab'
}   
];

