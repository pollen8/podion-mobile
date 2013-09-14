App.Event = DS.Model.extend({
	Event_title: DS.attr('string'),
	Flyer: DS.attr('string'),
	Event_description_short: DS.attr('string'),
	date_time: DS.attr('date')
});
