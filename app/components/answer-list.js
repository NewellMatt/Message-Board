import Ember from 'ember';

export default Ember.Component.extend({
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
