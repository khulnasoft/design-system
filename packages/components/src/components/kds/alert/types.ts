/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsAlertTypeValues {
  Page = 'page',
  Inline = 'inline',
  Compact = 'compact',
}
export type KdsAlertTypes = `${KdsAlertTypeValues}`;

export enum KdsAlertColorValues {
  Neutral = 'neutral',
  Highlight = 'highlight',
  Success = 'success',
  Warning = 'warning',
  Critical = 'critical',
}
export type KdsAlertColors = `${KdsAlertColorValues}`;

export enum KdsAlertTitleTagValues {
  Div = 'div',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type KdsAlertTitleTags = `${KdsAlertTitleTagValues}`;
