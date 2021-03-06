import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

		this.route('splash');
		
		// this.resource('work', { path: '/work'}, function(){
		// 	this.resource('company', { path: '/:company_slug'}, function(){
		// 		this.route('project', { path: '/:project_slug'})
		// 	})
			
		// 	this.route('new');
		// });


		// this.resource('play', { path: '/play'}, function(){
		// 	this.route('project', { path: '/:project_slug'});
		// 	this.route('new');
		// });

		this.resource('category', { path: '/category/:category_slug'})

		this.route('about');
		this.route('contact');
		this.route('resume');

  this.route('skills');

  
  this.resource('work', function(){
		this.resource('company', { path: '/:company_slug'}, function(){
			this.resource('project', { path: '/:project_slug'})
		})
  });

});

export default Router;
