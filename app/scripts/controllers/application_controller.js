App.ApplicationController = Em.Controller.extend({
	
	// Toggle the menu
	menuVisible: false,
	
	// Toggle to details aside
	detailsVisible: false,
	
	// Apply classes to animate menu & details.
	pushBody: function () {
		if (this.get('menuVisible')) {
			$('aside').removeClass('push-left');
			return $('.ember-application').addClass('push-right');
		} else {
			$('body').removeClass('push-right');
			if (this.get('detailsVisible')) {
				return $('aside').addClass('push-left');
			}
			$('aside').removeClass('push-left');
		}
	}
	
});