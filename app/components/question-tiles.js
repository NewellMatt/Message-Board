import Ember from 'ember';

export default Ember.Component.extend({
  fullQuestionInfo: Ember.computed('question.answers.length', 'question.author', function(){
    return this.get('question.answers.length') + ' comments for ' + this.get('question.author') + "'s question";
  }),


  //most recent work

  sortBy: ['question.answers:asc'],
  sortedQuestions: Ember.computed.sort('question.answers', 'sortBy'),
});
