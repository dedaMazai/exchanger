import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { cardReducer } from 'widgets/ExchangeCard';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
    const reducers: ReducersMapObject<StateSchema> = {
        card: cardReducer,
    };

    const store = configureStore({
        reducer: reducers,
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
