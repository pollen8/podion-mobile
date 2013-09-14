App.Store = DS.Store.extend({});

//Set the name space
App.ApplicationAdapter = DS.RESTAdapter.extend({
	host: 'http://localhost/podion-mobile',
	namespace: 'fabrik4/public/api'
});
