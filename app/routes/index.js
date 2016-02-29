import Ember from 'ember';

export default Ember.Route.extend({
  model( ) {
    return Ember.RSVP.hash({
      categories: this.store.findAll("mock-category"),
      listings: this.store.findAll("mock-listing"),
    });
  },
  actions: {
    
  }
});
