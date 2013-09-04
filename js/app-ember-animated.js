App = Ember.Application.create();

//Define urls
App.Router.map(function () {
	this.resource('events', function () {
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

// OK TO here

App.EventsView = Ember.View.extend({
	templateName: 'events'
});

App.ApplicationRoute = Em.Route.extend({
	  actions: {
	    goToEvent: function(event) {
	    	// tmpl, transtion {target animatedOutlet name: 'fx'}, event clicked
	    	this.transitionToAnimated('event', {events: 'slideLeft'}, event);
	    }
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


/**
// ORig

App = Ember.Application.create();

App.Router.map(function() {
  this.resource('message');
  this.resource('hi');
});

App.ApplicationRoute = Ember.Route.extend({
  actions: {
    sayHi: function() {
      this.transitionToAnimated('hi', {main: 'slideLeft'});
    },
    backToNormal: function() {
      this.transitionToAnimated('index', {main: 'slideRight'});
    }
  }
});

App.IndexController = Ember.Controller.extend({
  message: 'say hi'
});

App.IndexView = Ember.View.extend();
App.HiView = Ember.View.extend();
*/