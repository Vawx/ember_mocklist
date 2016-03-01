import Ember from 'ember';

export default Ember.Component.extend({
    showAddListing: false,

    category: Ember.computed('categoryIndex', function( ) {
      return this.get('categories')[this.get('categoryIndex')];
    }),
    actions: {
      showNewListForm( ) {
        this.set("showAddListing", true);
      },
      hideNewListing( ) {
        this.set("showAddListing", false);
      },
      didMakeSelection( value, component ) {
        this.sendAction('didMakeSelection', value, component );
      },
      addListing( ) {
        var params = {
          name: this.get("listing"),
          info: this.get("info"),
          category: this.get("category"),
        };
        this.sendAction('addListing', params);
        this.set("listing", "");
        this.set("info", "");
        this.set("currentCategory", "Ruby");
        this.set("showAddListing", false);
      }
    }
});
