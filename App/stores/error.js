

import { types } from 'mobx-state-tree';

export const ErrorStore = types.union(types.string, types.undefined);
