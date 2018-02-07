import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | link to wrapper');

test('content', async function(assert) {
  await visit('/');

  assert.equal(find('#first').text().trim(), 'First');
  assert.equal(find('#second').text().trim(), 'Second');
});

test('active state', async function(assert) {
  await visit('/');

  assert.notOk(find('#first').is('.active'));
  assert.notOk(find('#second').is('.active'));

  await click('#first a');

  assert.equal(currentRouteName(), 'first');
  assert.ok(find('#first').is('.active'));
  assert.notOk(find('#second').is('.active'));

  await click('#second a');

  assert.equal(currentRouteName(), 'second');
  assert.notOk(find('#first').is('.active'));
  assert.ok(find('#second').is('.active'));

  await visit('/');

  assert.notOk(find('#first').is('.active'));
  assert.notOk(find('#second').is('.active'));
});

test('customize tag name', async function(assert) {
  await visit('/');

  assert.ok(find('#custom-tag').is('div'));
});

test('customize class names', async function(assert) {
  await visit('/');

  assert.ok(find('li#custom-class').hasClass('li-class'));
  assert.ok(find('li#custom-class > a').hasClass('a-class'));
});
