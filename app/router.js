import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('contact');
  this.route('about');
  this.route('question-list');
  this.route('question', {path: '/question/:question_id'}); //this here for commit log
  this.route('favorite-question');
});

export default Router;
