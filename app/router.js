import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('question-list');
  this.route('question');
});

export default Router;
