/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsApplicationStateAlignValues {
  Left = 'left',
  Center = 'center',
}
export type KdsApplicationStateAligns = `${KdsApplicationStateAlignValues}`;

export enum KdsApplicationStateTitleTagValues {
  Div = 'div',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type KdsApplicationStateTitleTags =
  `${KdsApplicationStateTitleTagValues}`;
