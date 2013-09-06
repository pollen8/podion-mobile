// Ember application
App = Ember.Application.create();

// Ember data
App.Store = DS.Store.extend({});

// Set the name space
App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost/podion-mobile',
	namespace: 'fabrik4/public/api'
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
		
		// Nested resource inside events route
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

//create Ember.ArrayController
App.EventsIndexController = Ember.ArrayController.extend({
  content: []
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
		console.log('model');
		// Query Ember data to get all events.
		var store = this.get('store');
		return store.findAll('event');
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

