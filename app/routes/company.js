import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		return this.store.find('company', { 'slug': params.company_slug }).then(function(results){
			return results.get('firstObject');
		})
	}

});
