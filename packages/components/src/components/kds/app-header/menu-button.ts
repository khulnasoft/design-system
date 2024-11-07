/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';

import type { KdsButtonSignature } from '../button/';

export interface KdsAppHeaderMenuButtonSignature {
  Args: {
    isOpen?: boolean;
    menuContentId: string;
    onClickToggle?: () => void;
  };
  Element: KdsButtonSignature['Element'];
}

export default class KdsAppHeaderMenuButton extends Component<KdsAppHeaderMenuButtonSignature> {
  get icon(): 'x' | 'menu' {
    return this.args.isOpen ? 'x' : 'menu';
  }

  @action
  onClick(): void {
    const { onClickToggle } = this.args;

    if (typeof onClickToggle === 'function') {
      onClickToggle();
    }
  }
}
