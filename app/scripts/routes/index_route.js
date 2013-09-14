App.IndexRoute = Ember.Route.extend({
	  redirect: function() {
		  console.log('index route');
	   // this.transitionTo('events.index');
	  }
});