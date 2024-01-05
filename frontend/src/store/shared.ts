import { Action, PayloadAction } from '@reduxjs/toolkit';

export const RESET_STORE_ACTION_TYPE = 'RESET_STORE';

export const resetStoreActionMatcher = (action: Action | PayloadAction): boolean => action.type === RESET_STORE_ACTION_TYPE;
