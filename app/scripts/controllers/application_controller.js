App.ApplicationController = Em.Controller.extend({
	
	// Toggle the menu
	menuVisible: false,
	
	// Toggle to details aside
	detailsVisible: false,
	
	detailsId: null,
	previousDetailsId: null,
	
	// Apply classes to animate menu & details.
	pushBody: function () {
		if (this.get('menuVisible')) {
			$('aside').removeClass('push-left');
			return $('.ember-application').addClass('push-right');
		} else {
			$('body').removeClass('push-right');
			
			$('aside').removeClass('push-left');
		}
	},

	toggleDetails: function () {
		console.log(this.detailsId);
		if (this.detailsId === this.previousDetailsId) {
			//return;
		}
		if (this.get('detailsVisible')) {
			return $('aside').addClass('push-left');
		} else {
			return $('aside').removeClass('push-left');
		}
	}
	
});