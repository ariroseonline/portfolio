import DS from 'ember-data';

var Project = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  categories: DS.hasMany('category', {async: true}),
  company: DS.belongsTo('company', {async: true}),
  images: DS.hasMany('image', {async: true}),
  isWork: DS.attr('boolean'),
  slug: DS.attr('string'),
});

export default Project;