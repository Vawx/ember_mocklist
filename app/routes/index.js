import Ember from 'ember';

export default Ember.Route.extend({

  model( ) {
    return Ember.RSVP.hash({
      categories: this.store.findAll("mock-category"),
      listings: this.store.findAll("mock-listing"),
    });
  },
  actions: {
    addListing( params ) {

      if(params.name.length > 0 && params.info.length > 0) {
        var newListingParams = {
          name: params.name,
          info: params.info,
        };
        var newListing = this.store.createRecord('mock-listing', newListingParams);
        this.store.find('mock-category', params.category).then( function( category ) {
          category.get("listings").addObject( newListing );
          category.save( ).then( function( ) {
            return newListing.save( );
          });
        });
        this.transitionTo('index');
      }
    }
  }
});

/**
var newListingParams = {
  name: params.name,
  info: params.info,
};
 var newListing = this.store.createRecord('mock-listing', newListingParams );
 category.get('listings').addObject( newListing );
 category.save( ).then( function( ) {
   return newListing.save( );
 });
 */
