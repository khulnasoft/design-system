/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class DocTokensListComponent extends Component {
  @tracked isExpanded = false;

  get token() {
    let { token } = this.args;
    return {
      name: token.name,
      type: token.type,
      value: token.value,
      aliases: token.aliases,
      category: token.attributes.category,
      original_value: token.original.value,
      deprecated: token.deprecated,
      comment: token?.documentation?.comment ?? token?.comment ?? undefined,
    };
  }

  get isAlias() {
    return (
      this.token.original_value !== this.token.value &&
      this.token.original_value.includes('{')
    );
  }

  get isDeprecated() {
    return this.token.deprecated;
  }

  @action
  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
