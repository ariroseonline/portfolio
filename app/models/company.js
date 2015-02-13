import DS from 'ember-data';

var Company =  DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  projects: DS.hasMany('projects', {async: true}),
  logo: DS.attr('string'),
  slug: DS.attr('string')
});

export default Company;
