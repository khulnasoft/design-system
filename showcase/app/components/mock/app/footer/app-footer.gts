/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import type { TemplateOnlyComponent } from '@ember/component/template-only';

// KDS components
import { KdsAppFooter } from '@khulnasoft/design-system-components/components';

// types
import type { KdsAppFooterSignature } from '@khulnasoft/design-system-components/components/kds/app-footer/index';

export interface MockAppFooterAppFooterSignature {
  Element: KdsAppFooterSignature['Element'];
}

const MockAppFooterAppFooter: TemplateOnlyComponent<MockAppFooterAppFooterSignature> =
  <template>
    <KdsAppFooter ...attributes as |AF|>
      <AF.LegalLinks />
    </KdsAppFooter>
  </template>;
export default MockAppFooterAppFooter;
