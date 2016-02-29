import { moduleFor, test } from 'ember-qunit';

moduleFor('route:mock-admin', 'Unit | Route | mock admin', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
