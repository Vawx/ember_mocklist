import Ember from 'ember';

export default Ember.Component.extend({
    showAddListing: false,
    actions: {
      showNewListForm( ) {
        this.set("showAddListing", true);
      },
      hideNewListing( ) {
        this.set("showAddListing", false);
      }
    }
});
