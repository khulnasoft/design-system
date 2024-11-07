/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { KdsInteractiveSignature } from '../interactive';

export enum KdsPaginationDirectionValues {
  Next = 'next',
  Prev = 'prev',
}

export type KdsPaginationDirections = `${KdsPaginationDirectionValues}`;

export type KdsPaginationPage = KdsPaginationDirections | number;

export enum KdsPaginationDirectionAriaLabelValues {
  Prev = 'Previous page',
  Next = 'Next page',
}

export type KdsPaginationDirectionAriaLabels =
  `${KdsPaginationDirectionAriaLabelValues}`;

export enum KdsPaginationDirectionLabelValues {
  Prev = 'Previous',
  Next = 'Next',
}

export type KdsPaginationDirectionLabels =
  `${KdsPaginationDirectionLabelValues}`;

export type KdsPaginationElliptizedPageArrayItem = string | number;

export type KdsPaginationElliptizedPageArray =
  KdsPaginationElliptizedPageArrayItem[];

export type KdsPaginationRoutingProps = Pick<
  KdsInteractiveSignature['Args'],
  'route' | 'model' | 'models' | 'replace'
>;
