import Ember from 'ember';

export default Ember.Route.extend({
  model( ) {
    return this.store.findAll("mock-category");
  },
  actions: {
    addCategory( params ) {
      var newCategory = this.store.createRecord( 'mock-category', params );
      newCategory.save( );
      this.transitionTo('mock-admin');
    },
    submitEditCategory( category, listing ) {
      if(listing.name.length > 0 && listing.info.length > 0) {
        var newListing = this.store.createRecord('mock-listing', listing);
        newListing.save( ).then( function( ) {
          var updateCategory = this.findRecord('mock-category', category.get("id"));
          updateCategory.get('listings').addObject(newListing);
          return updateCategory.save( );
        });
        this.transitionTo('mock-admin');
      }
    },
  }
});
