import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  categories: DS.hasMany('category', {async: true}),
  company: DS.belongsTo('company', {async: true}),
  work: DS.attr('boolean'),
  slug: DS.attr('string'),
});

export default Project;