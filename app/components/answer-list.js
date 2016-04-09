import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['upVotes:desc'],
  sortedLikes: Ember.computed.sort('answers', 'sortBy'),
  amountOfLikes: Ember.inject.service(),

  isLikeTrue: false,

  actions: {
    buttonLike: function() {
      this.set('isLikeTrue', true);
    },
    upVote(answer) {
      this.sendAction('upVote', answer);
    },
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
