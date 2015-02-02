import DS from 'ember-data';

var Image = DS.Model.extend({
  title: DS.attr('string'),
  url: DS.attr('string')
});

export default Image;
