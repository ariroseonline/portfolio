import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function(model){
		alert('redirect index')
		this.transitionTo('company', model.get('firstObject.slug'));
	}
});
