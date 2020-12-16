import LinkComponent from "@ember/routing/link-component";
import layout from '../templates/components/link-to-wrapper';
import { computed } from "@ember/object";

export default LinkComponent.extend({
  layout,
  tagName: 'li',
  linkComponent: 'link-to',

  _inlineFormBody: computed('params.[]', function() {
    return this.get('params')[0];
  }),

  _inlineFormParams: computed('params.[]', function() {
    return this.get('params').slice(1);
  }),

  init() {
    this._super(...arguments);

    // the click event is handled by the inner link-to,
    // otherwise we would transition twice
    this.off(this.get('eventName'), this, this._invoke);
  }
});
