/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsAccordionTypeValues {
  Card = 'card',
  Flush = 'flush',
}
export type KdsAccordionTypes = `${KdsAccordionTypeValues}`;

export enum KdsAccordionSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}
export type KdsAccordionSizes = `${KdsAccordionSizeValues}`;

export enum KdsAccordionForceStateValues {
  Open = 'open',
  Close = 'close',
}
export type KdsAccordionForceStates = `${KdsAccordionForceStateValues}`;

export enum KdsAccordionItemTitleTagValues {
  Div = 'div',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type KdsAccordionItemTitleTags = `${KdsAccordionItemTitleTagValues}`;
