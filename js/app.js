App = Ember.Application.create();

App.Store = DS.Store.extend({
	url: "http://localhost/podion-mobile/fabrik4/public/api/"
});


DS.RESTAdapter.reopen({
  url: '/podion-mobile/fabrik4/public/api/'
});

App.Event = DS.Model.extend({
	Event_title: DS.attr('string'),
	Flyer: DS.attr('string'),
	Event_description_short: DS.attr('string'),
	date_time: DS.attr('date')
});

//Define urls
App.Router.map(function () {
	this.resource('events', function () {
		this.resource('event', {path: ':id'});
	});
});

// Controller - sets non-persistent parameters and events.

App.ApplicationController = Em.Controller.extend({
	menuVisible: false,
	pushBody: function () {
		if (this.get('menuVisible')) {
			return $('.ember-application').addClass('push-right');
		}
		$('body').removeClass('push-right');
	}
});

// Routes

App.ApplicationRoute = Ember.Route.extend({
	  actions: {
	    toggleMenu: function() {
	        this.controller.toggleProperty('menuVisible');
	        this.controller.pushBody();
	    },
	    goToEvent: function(event) {
	    	// tmpl, transtion {target animatedOutlet name: 'fx'}, event clicked
	    	this.transitionToAnimated('event', {events: 'slideLeft'}, event);
	    },
	    backToPosts: function() {
	    	this.transitionToAnimated('events.index', {events: 'slideRight'});
	    }
	  }
});

App.IndexRoute = Ember.Route.extend({
	  redirect: function() {
	    this.transitionTo('events.index');
	  }
});

App.EventRoute = Ember.Route.extend({

});

App.EventsIndexRoute = Ember.Route.extend({
	model: function () {
		// return this.store.findAll('event');
		return App.Event.findAll();
		return [];
		//return events;
	}
});

// Views

App.EventsView = Ember.View.extend({
	templateName: 'events'
});

App.EventView = Ember.View.extend({
	templateName: 'event'
});

App.EventsIndexView = Ember.View.extend({
	  templateName: 'events_index'
});


// Data 
var events = [];
var o;
for (var i = 0; i < 200; i ++) {
	events.push({
		id: i,
		title: 'event ' + i,
		date: new Date('12-27-2013'),
		description: 'blab bhab' + i
	});
	
}
/*var events = [{
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
];*/



