import Ember from 'ember';

export function questionPopularity(params/*, hash*/) {
  var popularity = params[0].get('answers');

    if(popularity.get('length') >= 5) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire"></span>');
    }
    if(popularity.get('length') >= 1 && popularity.get('length') < 5) {
      return Ember.String.htmlSafe('<span class="glyphicon glyphicon-comment"></span>');
    }
  }

export default Ember.Helper.helper(questionPopularity);
