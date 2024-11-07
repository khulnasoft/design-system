/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { action } from '@ember/object';
import { guidFor } from '@ember/object/internals';
import { tracked } from '@glimmer/tracking';
import { registerDestructor } from '@ember/destroyable';

export interface KdsAppHeaderSignature {
  Args: {
    breakpoint?: string;
    hasA11yRefocus?: boolean;
    a11yRefocusSkipTo?: string;
    a11yRefocusSkipText?: string;
    a11yRefocusNavigationText?: string;
    a11yRefocusRouteChangeValidator?: string;
    a11yRefocusExcludeAllQueryParams?: boolean;
  };
  Blocks: {
    logo?: [];
    globalActions?: [];
    utilityActions?: [];
  };
  Element: HTMLDivElement;
}

export default class KdsAppHeader extends Component<KdsAppHeaderSignature> {
  @tracked isOpen = false;
  @tracked isDesktop = true;
  @tracked hasOverflowContent = false;
  desktopMQ: MediaQueryList;
  hasA11yRefocus = this.args.hasA11yRefocus ?? true;
  a11yRefocusSkipTo = '#' + (this.args.a11yRefocusSkipTo ?? 'kds-main');

  // Generates a unique ID for the Menu Content
  menuContentId = 'kds-menu-content-' + guidFor(this);

  breakpoint = parseInt(
    getComputedStyle(document.documentElement).getPropertyValue(
      '--kds-app-desktop-breakpoint'
    )
  );

  desktopMQVal =
    this.args.breakpoint ??
    getComputedStyle(document.documentElement).getPropertyValue(
      '--kds-app-desktop-breakpoint'
    );

  constructor(owner: unknown, args: Record<string, never>) {
    super(owner, args);
    this.desktopMQ = window.matchMedia(`(min-width: ${this.desktopMQVal})`);
    this.addEventListeners();
    registerDestructor(this, (): void => {
      this.removeEventListeners();
    });
  }

  addEventListeners(): void {
    document.addEventListener('keydown', this.escapePress, true);
    this.desktopMQ.addEventListener('change', this.updateDesktopVariable, true);

    // set initial state based on viewport using a "synthetic" event
    const syntheticEvent = new MediaQueryListEvent('change', {
      matches: this.desktopMQ.matches,
      media: this.desktopMQ.media,
    });
    this.updateDesktopVariable(syntheticEvent);
  }

  removeEventListeners(): void {
    document.removeEventListener('keydown', this.escapePress, true);
    this.desktopMQ.removeEventListener(
      'change',
      this.updateDesktopVariable,
      true
    );
  }

  // In mobile view when the menu is open, trap focus within the AppHeader
  get shouldTrapFocus(): boolean {
    return !this.isDesktop && this.isOpen;
  }

  // Get the class names to apply to the component.
  get classNames(): string {
    const classes = ['kds-app-header'];

    if (this.isDesktop) {
      classes.push('kds-app-header--is-desktop');
    } else {
      classes.push('kds-app-header--is-mobile');

      // open and closed menu states are only relevant on mobile
      if (this.isOpen) {
        classes.push('kds-app-header--menu-is-open');
      } else {
        classes.push('kds-app-header--menu-is-closed');
      }
    }

    return classes.join(' ');
  }

  @action
  escapePress(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.isOpen && !this.isDesktop) {
      this.isOpen = false;
    }
  }

  @action
  onClickToggle(): void {
    this.isOpen = !this.isOpen;
  }

  @action
  updateDesktopVariable(event: MediaQueryListEvent): void {
    this.isDesktop = event.matches;

    // Close the menu when switching to desktop view
    // (prevents menu from being open when resizing which causes Skip button to not render)
    if (this.isDesktop) {
      this.isOpen = false;
    }
  }
}
