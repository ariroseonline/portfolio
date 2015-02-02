import Ember from 'ember';

export default Ember.ObjectController.extend({
	isLogos: function(){
		return this.get('slug') === 'logos' ? true : false;
	}.property('slug')
});