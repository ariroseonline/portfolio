import Ember from 'ember';

export default Ember.Route.extend({
	redirect: function(model){
		var route = this;
		model.get('projects').then(function(projects){
			route.transitionTo('project', projects.get('firstObject.slug'));
		});
	}
});
