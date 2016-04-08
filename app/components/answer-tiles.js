import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    save() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        question: this.get('question'),
        likes: parseInt(this.get('likes'))
      };
      this.sendAction('save', params);
    }
  }
});
