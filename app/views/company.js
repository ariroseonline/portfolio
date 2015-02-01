import Ember from 'ember';

export default Ember.View.extend({
	didInsertElement: function(){
		// alert('yo')
		this.$().hide().slideDown();
	},

	willDestroyElement: function(){
		// alert('yo2')

	},

	sumthing: function(){
		this.rerender();
	}.observes('controller.model')
});
