/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsCodeBlockLanguageValues {
  Bash = 'bash',
  Go = 'go',
  Hcl = 'hcl',
  Json = 'json',
  Log = 'log',
  Ruby = 'ruby',
  ShellSession = 'shell-session',
  Yaml = 'yaml',
}

export type KdsCodeBlockLanguages = `${KdsCodeBlockLanguageValues}`;

export enum KdsCodeBlockTitleTagValues {
  P = 'p',
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
  H6 = 'h6',
}

export type KdsCodeBlockTitleTags = `${KdsCodeBlockTitleTagValues}`;
