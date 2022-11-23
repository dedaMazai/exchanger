import { StateSchema } from 'app/providers/StoreProvider';
import { Filters, Valuta } from '../../types/CardSchema';

export const getValueFrom = (state: StateSchema) => state.card.valueFrom || '';
export const getValueTo = (state: StateSchema) => state.card.valueTo || '';
export const getSelectFrom = (state: StateSchema) => state.card.selectFrom || Valuta.BTC;
export const getSelectTo = (state: StateSchema) => state.card.selectTo || Valuta.CASHUSD;
export const getOptionsFrom = (state: StateSchema) => state.card.optionsFrom || [];
export const getOptionsTo = (state: StateSchema) => state.card.optionsTo || [];
export const getFilter = (state: StateSchema) => state.card.filter || [];
export const getDirections = (state: StateSchema) => state.card.directions|| [];
export const getFilterFrom = (state: StateSchema) => state.card.filterFrom || Filters.ALL;
export const getFilterTo = (state: StateSchema) => state.card.filterTo || Filters.ALL;