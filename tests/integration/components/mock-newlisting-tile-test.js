import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('mock-newlisting-tile', 'Integration | Component | mock newlisting tile', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{mock-newlisting-tile}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:"
  this.render(hbs`
    {{#mock-newlisting-tile}}
      template block text
    {{/mock-newlisting-tile}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
