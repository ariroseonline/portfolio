import Ember from 'ember';

export default Ember.ObjectController.extend({
	showProcess: false,
	mainImage: function(){
		return this.get('images').get('firstObject');
	}.property('images'),

	auxillaryImages: function(){
		return this.get('images').slice(1);
	}.property('images'),

	actions: {
		toggleProcess: function() {
			this.toggleProperty('showProcess');
		}
	}
});
