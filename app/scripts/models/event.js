App.Event = DS.Model.extend({
	title: DS.attr('string'),
	flyer: DS.attr('string'),
	description: DS.attr('string'),
	date_time: DS.attr('date')
});
