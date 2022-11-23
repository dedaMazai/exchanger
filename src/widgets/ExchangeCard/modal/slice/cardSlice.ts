import { createSlice } from '@reduxjs/toolkit';
import { DIRECTIONS, FILTER } from 'shared/mockValue/mockValue';
import { CardSchema, Valuta } from '../types/CardSchema';

const initialState: CardSchema = {
    directions: DIRECTIONS,
    filter: FILTER,
    selectFrom: Valuta.BTC,
    selectTo: Valuta.CASHRUB,
};

export const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
        setValueFrom: (state, action) => {
            state.valueFrom = action.payload;
        },
        setValueTo: (state, action) => {
            state.valueTo = action.payload;
        },
        setSelectFrom: (state, action) => {
            state.selectFrom = action.payload;
        },
        setSelectTo: (state, action) => {
            state.selectTo = action.payload;
        },
        setOptionsFrom: (state, action) => {
            state.optionsFrom = action.payload;
        },
        setOptionsTo: (state, action) => {
            state.optionsTo = action.payload;
        },
        setFilterFrom: (state, action) => {
            state.filterFrom = action.payload;
        },
        setFilterTo: (state, action) => {
            state.filterTo = action.payload;
        },
    },
});

export const { actions: cardActions } = cardSlice;
export const { reducer: cardReducer } = cardSlice;
