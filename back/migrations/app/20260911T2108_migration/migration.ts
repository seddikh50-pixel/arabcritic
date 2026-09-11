#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/3cdf3248df5d650b23cdda917b03c36cdd538ca09b070da38f65293f4d8823a0/contract';
import startContract from '../../snapshots/3cdf3248df5d650b23cdda917b03c36cdd538ca09b070da38f65293f4d8823a0/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/6bf1ca857e8894e2adba8405186ead6f41c56273576352bd90c73fdc7c83f6f8/contract';
import endContract from '../../snapshots/6bf1ca857e8894e2adba8405186ead6f41c56273576352bd90c73fdc7c83f6f8/contract.json' with { type: 'json' };
import { Migration, MigrationCLI } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [];
  }
}

MigrationCLI.run(import.meta.url, M);
