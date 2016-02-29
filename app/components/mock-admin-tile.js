import Ember from 'ember';

export default Ember.Component.extend({
  editCurrentCategory: false,
  currentEditCategory: "",
  actions: {
    addCategory( ) {
      var params = {
        name: this.get("category"),
      };
      this.sendAction('addCategory', params);
    },
    editCategory( category ) {
      this.set("editCurrentCategory", true);
      this.set("categoryName", category.get("name"));
      this.set("currentEditCategory", category);
    },
    submitEditCategory( ) {
      var category = {
        name: this.get("categoryName"),
      };
      var listing = {
        name: this.get("listing"),
        info: this.get("info"),
        category: this.get("currentEditCategory"),
      };
      this.sendAction("submitEditCategory", category, listing );
    },
  }
});
