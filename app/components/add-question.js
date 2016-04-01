import Ember from 'ember';

export default Ember.Component.extend({
   addNewQuestion: false,
   actions: {
     questionFormShow() {
       this.set('addNewQuestion', true);
     },
     newQuestionMethod() {
       var params = {
         content: this.get('content'),
         author: this.get('author'),
         additionalNotes: this.get('additionalNotes')
       };
       this.set('addNewQuestion', false);
       this.set('content', '');
       this.set('author', '');
       this.set('additionalNotes', '');
       this.sendAction('questionToSave', params);
     }
   }
 });
