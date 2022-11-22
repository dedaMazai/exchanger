import { StateSchema } from 'app/providers/StoreProvider';
import { Valuta } from '../../types/CardSchema';

export const getValueFrom = (state: StateSchema) => state.card.valueFrom || '';
export const getValueTo = (state: StateSchema) => state.card.valueTo || '';
export const getSelectFrom = (state: StateSchema) => state.card.selectFrom || Valuta.BTC;
export const getSelectTo = (state: StateSchema) => state.card.selectTo || Valuta.CASHUSD;