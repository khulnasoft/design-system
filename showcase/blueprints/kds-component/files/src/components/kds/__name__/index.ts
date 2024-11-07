/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';

export interface Kds<%= classifiedModuleName %>Signature {
  // The arguments accepted by the component
  Args: {};
  // Any blocks yielded by the component
  Blocks: {
    default: [];
  };
  // The element to which `...attributes` is applied in the component template
  Element: HTMLDivElement;
}
// More info on types and signatures: https://khulnasoft.atlassian.net/wiki/spaces/KDS/pages/3245932580/Using+Typescript

export default class Kds<%= classifiedModuleName %> extends Component<Kds<%= classifiedModuleName %>Signature> {
  // UNCOMMENT THIS IF YOU NEED A CONSTRUCTOR
  // constructor() {
  //   super(...arguments);
  //   // ADD YOUR ASSERTIONS HERE
  // }

  /**
   * Get the class names to apply to the component.
   * @method classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames() {
    let classes = ['kds-<%= kebabizedModuleName %>'];

    // add a class based on the @xxx argument
    // classes.push(`kds-<%= kebabizedModuleName %>--[variant]-${this.xxx}`);

    return classes.join(' ');
  }
}
