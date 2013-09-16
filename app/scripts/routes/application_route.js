App.ApplicationRoute = Ember.Route.extend({
	actions : {
		toggleMenu: function () {
			this.controller.toggleProperty('menuVisible');
			this.controller.pushBody();
		},
		toggleDetails: function (id) {
			this.controller.set('previousDetailsId', this.controller.get('detailsId'));
			this.controller.set('detailsId', id);
			this.controller.toggleProperty('detailsVisible');
			this.controller.toggleDetails();
		},
		
		// Not used (were part of animated outlet)
		goToEvent: function (event) {
			// tmpl, transtion {target animatedOutlet name: 'fx'}, event clicked
			this.transitionToAnimated('event', {
				events : 'slideLeft'
			}, event);
		},
		backToPosts : function() {
			this.transitionToAnimated('events.index', {
				events : 'slideRight'
			});
		}
	}
});