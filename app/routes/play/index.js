import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function(model){
		this.transitionTo('play.project', model.get('firstObject.slug'));
	}
});
