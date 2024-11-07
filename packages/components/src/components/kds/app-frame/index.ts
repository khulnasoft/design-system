/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import type { ComponentLike } from '@glint/template';
import type { KdsAppFrameFooterSignature } from './parts/footer.ts';
import type { KdsAppFrameHeaderSignature } from './parts/header.ts';
import type { KdsAppFrameMainSignature } from './parts/main.ts';
import type { KdsAppFrameModalsSignature } from './parts/modals.ts';
import type { KdsAppFrameSidebarSignature } from './parts/sidebar.ts';
export interface KdsAppFrameSignature {
  Args: {
    hasFooter?: boolean;
    hasHeader?: boolean;
    hasMain?: boolean;
    hasModals?: boolean;
    hasSidebar?: boolean;
  };
  Blocks: {
    default: [
      {
        Footer?: ComponentLike<KdsAppFrameFooterSignature>;
        Header?: ComponentLike<KdsAppFrameHeaderSignature>;
        Main?: ComponentLike<KdsAppFrameMainSignature>;
        Modals?: ComponentLike<KdsAppFrameModalsSignature>;
        Sidebar?: ComponentLike<KdsAppFrameSidebarSignature>;
      },
    ];
  };
  Element: HTMLDivElement;
}

export default class KdsAppFrame extends Component<KdsAppFrameSignature> {
  // Indicates if the "header" container should be displayed
  get hasHeader(): boolean {
    return this.args.hasHeader ?? true;
  }

  // Indicates if the "sidebar" container should be displayed
  get hasSidebar(): boolean {
    return this.args.hasSidebar ?? true;
  }

  // Indicates if the "footer" container should be displayed
  get hasFooter(): boolean {
    return this.args.hasFooter ?? true;
  }

  // Indicates if the "modals" container should be displayed
  get hasModals(): boolean {
    return this.args.hasModals ?? true;
  }

  // Get the class names to apply to the component.
  get classNames(): string {
    const classes = ['kds-app-frame'];

    if (this.hasHeader && this.hasSidebar) {
      classes.push('kds-app-frame--has-header-with-sidebar');
    }

    return classes.join(' ');
  }
}
