/**
 * Copyright (c) KhulnaSoft, Ltd.
 * SPDX-License-Identifier: MPL-2.0
 */

export enum KdsIconTileSizeValues {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export type KdsIconTileSizes = `${KdsIconTileSizeValues}`;

export enum KdsIconTileProductValues {
  Boundary = 'boundary',
  Consul = 'consul',
  HCP = 'hcp',
  Nomad = 'nomad',
  Packer = 'packer',
  Terraform = 'terraform',
  Vagrant = 'vagrant',
  Vault = 'vault',
  'Vault Secrets' = 'vault-secrets',
  'Vault Radar' = 'vault-radar',
  Waypoint = 'waypoint',
}

export type KdsIconTileProducts = `${KdsIconTileProductValues}`;

export enum KdsIconTileColorNeutral {
  Neutral = 'neutral',
}

export type KdsIconTileColors = KdsIconTileProducts | KdsIconTileColorNeutral;
