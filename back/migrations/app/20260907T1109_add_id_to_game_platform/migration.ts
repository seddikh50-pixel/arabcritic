#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/6a7f386952f82adbabdb29a1ecf71f26eeb34183335208549c6f71f638058079/contract';
import startContract from '../../snapshots/6a7f386952f82adbabdb29a1ecf71f26eeb34183335208549c6f71f638058079/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/cea59db7f0c74b0b25db65b873dede008956778f3d78ac3da47e6789f6c36ca6/contract';
import endContract from '../../snapshots/cea59db7f0c74b0b25db65b873dede008956778f3d78ac3da47e6789f6c36ca6/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, fn, primaryKey } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.createTable({
        schema: 'public',
        table: 'gamePlatform',
        columns: [
          col('gameId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('platformId', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
        ],
        constraints: [primaryKey(['gameId', 'platformId'])],
      }),
      this.createTable({
        schema: 'public',
        table: 'platform',
        columns: [
          col('createdAt', 'timestamptz', {
            notNull: true,
            default: fn('now()'),
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
          col('id', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('name', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('slug', 'text', { notNull: true, codecRef: { codecId: 'pg/text@1' } }),
          col('updatedAt', 'timestamptz', {
            notNull: true,
            codecRef: { codecId: 'pg/timestamptz-string@1' },
          }),
        ],
        constraints: [primaryKey(['id'])],
      }),
      this.addUnique({
        schema: 'public',
        table: 'platform',
        constraint: 'platform_slug_key',
        columns: ['slug'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'gamePlatform',
        index: 'gamePlatform_gameId_idx_6cdb47f8',
        columns: ['gameId'],
      }),
      this.createIndex({
        schema: 'public',
        table: 'gamePlatform',
        index: 'gamePlatform_platformId_idx_79bf329b',
        columns: ['platformId'],
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'gamePlatform',
        foreignKey: {
          name: 'gamePlatform_gameId_fkey',
          columns: ['gameId'],
          references: { schema: 'public', table: 'game', columns: ['id'] },
        },
      }),
      this.addForeignKey({
        schema: 'public',
        table: 'gamePlatform',
        foreignKey: {
          name: 'gamePlatform_platformId_fkey',
          columns: ['platformId'],
          references: { schema: 'public', table: 'platform', columns: ['id'] },
        },
      }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
