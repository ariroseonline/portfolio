import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement: function(){
		var btnPosition =this.$().parent().find('button').offset().top;
		$("html, body").animate({ scrollTop: btnPosition - 30 });
	}
});
