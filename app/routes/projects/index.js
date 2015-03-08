import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function(model){
		var route = this;
			route.transitionTo('company', model.get('firstObject.slug'));
	}
});
