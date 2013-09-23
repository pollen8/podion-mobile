App.EventController = Em.ObjectController.extend({
	isEditing: false,
	
	actions: {
		edit: function () {
			this.set('isEditing', true);
		},
		
		doneEditing: function () {
			this.set('isEditing', false);
			this.save();
		}
	},
	save: function () {
		var model = this.get('model');
		console.log(model);
		model.save().then(
			function () {
				console.log('saved');
			},
			function () {
				console.log('bugggg');
			}
		);
	}
	
});
