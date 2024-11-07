/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import { guidFor } from '@ember/object/internals';
import { action } from '@ember/object';
import Component from '@glimmer/component';

export interface KdsSideNavListTitleSignature {
  Args: {
    didInsertTitle?: (titleId: string) => void;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsSideNavListTitle extends Component<KdsSideNavListTitleSignature> {
  /*  Generate a unique ID for each Title */
  titleId = 'title-' + guidFor(this);

  @action
  didInsertTitle(element: HTMLElement): void {
    const { didInsertTitle } = this.args;

    if (typeof didInsertTitle === 'function') {
      didInsertTitle(element.id);
    }
  }
}