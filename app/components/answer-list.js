import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['likes:asc'],
  sortedLikes: Ember.computed.sort('answers', 'sortBy'),

  isLikeTrue: false,

  actions: {
    buttonLike: function() {
      this.set('isLikeTrue', true);
    },
    delete(answer) {
      if (confirm('Are you sure you want to delete this answer?')) {
        this.sendAction('destroyAnswer', answer);
      }
    }
  }
});
