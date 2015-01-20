import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function(model){
		this.transitionTo('company', model.get('firstObject.slug'));
	}
});
