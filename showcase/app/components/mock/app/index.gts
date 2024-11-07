/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

import Component from '@glimmer/component';
import { hash } from '@ember/helper';
import MockAppHeaderAppHeader from './header/app-header';
import MockAppSidebarSideNav from './sidebar/side-nav';
import MockAppMainPageHeader from './main/page-header';
import MockAppMainGenericTextContent from './main/generic-text-content';
import MockAppFooterAppFooter from './footer/app-footer';

// KDS components
import { KdsAppFrame } from '@khulnasoft/design-system-components/components';

// types
import type { ComponentLike } from '@glint/template';
import type { KdsAppFrameSignature } from '@khulnasoft/design-system-components/components/kds/app-frame/index';
import type { MockAppHeaderAppHeaderSignature } from './header/app-header';
import type { MockAppSidebarSideNavSignature } from './sidebar/side-nav';
import type { MockAppMainPageHeaderSignature } from './main/page-header';
import type { MockAppMainGenericTextContentSignature } from './main/generic-text-content';
import type { MockAppFooterAppFooterSignature } from './footer/app-footer';

export interface MockAppSignature {
  Args: {
    hasHeader?: KdsAppFrameSignature['Args']['hasHeader'];
    hasSidebar?: KdsAppFrameSignature['Args']['hasSidebar'];
    hasFooter?: KdsAppFrameSignature['Args']['hasFooter'];
  };
  Blocks: {
    header?: [
      {
        AppHeader?: ComponentLike<MockAppHeaderAppHeaderSignature>;
      },
    ];
    sidebar?: [
      {
        SideNav?: ComponentLike<MockAppSidebarSideNavSignature>;
      },
    ];
    main?: [
      {
        PageHeader?: ComponentLike<MockAppMainPageHeaderSignature>;
        GenericTextContent?: ComponentLike<MockAppMainGenericTextContentSignature>;
      },
    ];
    footer?: [
      {
        AppFooter?: ComponentLike<MockAppFooterAppFooterSignature>;
      },
    ];
  };
  Element: KdsAppFrameSignature['Element'];
}

// eslint-disable-next-line ember/no-empty-glimmer-component-classes
export default class MockApp extends Component<MockAppSignature> {
  <template>
    <KdsAppFrame
      @hasHeader={{@hasHeader}}
      @hasSidebar={{@hasSidebar}}
      @hasFooter={{@hasFooter}}
      ...attributes
      as |Frame|
    >
      <Frame.Header>
        {{#if (has-block "header")}}
          {{yield (hash AppHeader=MockAppHeaderAppHeader) to="header"}}
        {{else}}
          <MockAppHeaderAppHeader />
        {{/if}}
      </Frame.Header>
      <Frame.Sidebar>
        {{#if (has-block "sidebar")}}
          {{yield (hash SideNav=MockAppSidebarSideNav) to="sidebar"}}
        {{else}}
          <MockAppSidebarSideNav />
        {{/if}}
      </Frame.Sidebar>
      <Frame.Main>
        <div class="mock-app-layout-main-content-wrapper">
          {{yield
            (hash
              PageHeader=MockAppMainPageHeader
              GenericTextContent=MockAppMainGenericTextContent
            )
            to="main"
          }}
        </div>
      </Frame.Main>
      <Frame.Footer>
        {{#if (has-block "footer")}}
          {{yield (hash AppFooter=MockAppFooterAppFooter) to="footer"}}
        {{else}}
          <MockAppFooterAppFooter />
        {{/if}}
      </Frame.Footer>
    </KdsAppFrame>
  </template>
}
