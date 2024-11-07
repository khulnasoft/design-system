/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsFormTextInputTypeValues {
  Text = 'text',
  Email = 'email',
  Password = 'password',
  Url = 'url',
  Date = 'date',
  Time = 'time',
  DateTimeLocal = 'datetime-local',
  Search = 'search',
  Month = 'month',
  Week = 'week',
  Tel = 'tel',
}

export type KdsFormTextInputTypes = `${KdsFormTextInputTypeValues}`;
