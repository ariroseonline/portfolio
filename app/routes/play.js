import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('project', { 'work': false });
	},

	redirect: function(model){
		this.transitionTo('play.project', model.get('firstObject.slug'));
	}
});