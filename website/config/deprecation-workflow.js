/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

/* eslint-disable */

self.deprecationWorkflow = self.deprecationWorkflow || {};
self.deprecationWorkflow.config = {
  workflow: [
    { handler: "silence", matchId: "remove-owner-inject" },
    { handler: "silence", matchId: "ember-modifier.function-based-options" },
    { handler: "throw", matchId: "deprecate-auto-location" },
    { handler: "silence", matchId: "ember-string.add-package" },
    { handler: "throw", matchId: "kds.dropdown.list-item.interactive" },
    { handler: "throw", matchId: "kds.components.flyout.body" },
    { handler: "throw", matchId: "kds.components.flyout.description" },
    { handler: "throw", matchId: "kds.components.flyout.footer" },
    { handler: "throw", matchId: "kds.components.flyout.header" },
    { handler: "throw", matchId: "kds.components.modal.body" },
    { handler: "throw", matchId: "kds.components.modal.footer" },
    { handler: "throw", matchId: "kds.components.modal.header" },
    { handler: "throw", matchId: "kds.components.sidenav.header.iconbutton" },
  ]
};
