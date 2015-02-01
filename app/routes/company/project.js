import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		
		return this.store.find('project', { 'slug': params.project_slug }).then(function(results){
				debugger
				return results.get('firstObject');
		});	
	}
});
