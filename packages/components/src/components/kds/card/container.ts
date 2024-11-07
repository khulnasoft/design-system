/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { assert } from '@ember/debug';
import {
  KdsCardBackgroundValues,
  KdsCardLevelValues,
  KdsCardOverflowValues,
} from './types.ts';
import type {
  KdsCardBackground,
  KdsCardLevel,
  KdsCardOverflow,
} from './types.ts';

export const DEFAULT_LEVEL = KdsCardLevelValues.Base;
export const DEFAULT_BACKGROUND = KdsCardBackgroundValues.NeutralPrimary;
export const DEFAULT_OVERFLOW = KdsCardOverflowValues.Visible;
export const AVAILABLE_LEVELS: string[] = Object.values(KdsCardLevelValues);
export const AVAILABLE_BACKGROUNDS: string[] = Object.values(
  KdsCardBackgroundValues
);
export const AVAILABLE_OVERFLOWS: string[] = Object.values(
  KdsCardOverflowValues
);

export interface KdsCardContainerSignature {
  Args: {
    level?: KdsCardLevel;
    levelActive?: KdsCardLevel;
    levelHover?: KdsCardLevel;
    background?: KdsCardBackground;
    hasBorder?: boolean;
    overflow?: KdsCardOverflow;
  };
  Blocks: {
    default: [];
  };
  Element: HTMLDivElement;
}

export default class KdsCardContainer extends Component<KdsCardContainerSignature> {
  /**
   * Sets the "elevation" level for the component
   * Accepted values: base, mid, high
   *
   * @param level
   * @type {KdsCardLevel}
   * @default 'base'
   */
  get level(): KdsCardLevel {
    const { level = DEFAULT_LEVEL } = this.args;

    assert(
      `@level for "Kds::Card::Container" must be one of the following: ${AVAILABLE_LEVELS.join(
        ', '
      )}; received: ${level}`,
      AVAILABLE_LEVELS.includes(level)
    );

    return level;
  }

  /**
   * Sets the "elevation" level for the component on ":hover" state
   * Accepted values: base, mid, high
   *
   * @param levelHover
   * @type {KdsCardLevel}
   */
  get levelHover(): KdsCardLevel | undefined {
    const { levelHover } = this.args;

    if (levelHover) {
      assert(
        `@levelHover for "Kds::Card::Container" must be one of the following: ${AVAILABLE_LEVELS.join(
          ', '
        )}; received: ${levelHover}`,
        AVAILABLE_LEVELS.includes(levelHover)
      );
    }

    return levelHover;
  }

  /**
   * Sets the "elevation" level for the component on ":active" state
   * Accepted values: base, mid, high
   *
   * @param levelActive
   * @type {KdsCardLevel}
   */
  get levelActive(): KdsCardLevel | undefined {
    const { levelActive } = this.args;

    if (levelActive) {
      assert(
        `@levelActive for "Kds::Card::Container" must be one of the following: ${AVAILABLE_LEVELS.join(
          ', '
        )}; received: ${levelActive}`,
        AVAILABLE_LEVELS.includes(levelActive)
      );
    }

    return levelActive;
  }

  /**
   * Sets the background for the component
   * Accepted values: neutral-primary, neutral-secondary
   *
   * @param background
   * @type {KdsCardBackground}
   * @default 'base'
   */
  get background(): KdsCardBackground {
    const { background = DEFAULT_BACKGROUND } = this.args;

    assert(
      `@background for "Kds::Card::Container" must be one of the following: ${AVAILABLE_BACKGROUNDS.join(
        ', '
      )}; received: ${background}`,
      AVAILABLE_BACKGROUNDS.includes(background)
    );

    return background;
  }

  /**
   * Sets the level for the card
   * Accepted values: visible, hidden
   *
   * @param overflow
   * @type {KdsCardOverflow}
   * @default 'visible'
   */
  get overflow(): KdsCardOverflow {
    const { overflow = DEFAULT_OVERFLOW } = this.args;

    assert(
      `@overflow for "Kds::Card::Container" must be one of the following: ${AVAILABLE_OVERFLOWS.join(
        ', '
      )}; received: ${overflow}`,
      AVAILABLE_OVERFLOWS.includes(overflow)
    );

    return overflow;
  }

  /**
   * Get the class names to apply to the component.
   * @method Card#classNames
   * @return {string} The "class" attribute to apply to the component.
   */
  get classNames(): string {
    const classes = ['kds-card__container'];

    // add "elevation" classes based on the @level and @hasBorder arguments
    classes.push(
      `kds-card__container--level-${
        this.args.hasBorder ? 'surface' : 'elevation'
      }-${this.level}`
    );
    if (this.levelHover) {
      classes.push(
        `kds-card__container--hover-level-${
          this.args.hasBorder ? 'surface' : 'elevation'
        }-${this.levelHover}`
      );
    }
    if (this.levelActive) {
      classes.push(
        `kds-card__container--active-level-${
          this.args.hasBorder ? 'surface' : 'elevation'
        }-${this.levelActive}`
      );
    }

    // add a class based on the @background argument
    classes.push(`kds-card__container--background-${this.background}`);

    // add a class based on the @overflow argument
    classes.push(`kds-card__container--overflow-${this.overflow}`);

    return classes.join(' ');
  }
}
