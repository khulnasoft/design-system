/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import 'ember-source/types';
export {};

import '@glint/environment-ember-loose';

import type EmberStyleModifierRegistry from 'ember-style-modifier/template-registry';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';
import type KdsComponentsRegistry from '@khulnasoft/design-system-components/template-registry';
import type PageTitle from 'ember-page-title/template-registry';
// eslint-disable-next-line ember/no-at-ember-render-modifiers
import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';
import type ShowcaseTemplateRegistry from './template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberStyleModifierRegistry,
      EmberTruthRegistry,
      KdsComponentsRegistry,
      PageTitle,
      RenderModifiersRegistry,
      ShowcaseTemplateRegistry {}
}