import Ember from 'ember';

export default Ember.Route.extend({
	// model: function(){
	// 	// return this.store.find('section');
	// }
	redirect: function(){
		this.transitionTo('splash');
	}
});
