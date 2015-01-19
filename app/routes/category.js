import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('category', { 'slug': params.category_slug }).then(function(results){
			return results.get('firstObject');
		})
	},

	setupController: function(controller, model) {
		this._super(controller, model);
		
		model.get('projects').then(function(projects){			
			controller.set('workProjects', projects.filterBy('work'));
			controller.set('playProjects', projects.rejectBy('work'));
		})

	
	}
});
