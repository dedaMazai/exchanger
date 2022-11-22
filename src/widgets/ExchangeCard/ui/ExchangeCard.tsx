import { AppDispatch } from 'app/providers/StoreProvider';
import { ExchangeField } from 'entities/ExchangeField';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getSelectFrom,
    getSelectTo,
    getValueFrom,
    getValueTo
} from '../modal/selectors/getValue/getValue';
import { cardActions } from '../modal/slice/cardSlice';
import Exchange from 'shared/icons/exchange.svg';
import { Valuta } from '../modal/types/CardSchema';

import './ExchangeCard.scss';

export const ExchangeCard = () => {
    const valueTo = useSelector(getValueTo);
    const valueFrom = useSelector(getValueFrom);
    const selectFom = useSelector(getSelectFrom);
    const selectTo = useSelector(getSelectTo);
    const dispatch = useDispatch<AppDispatch>()

    const buttonsFilter = {
        'Все': [
            Valuta.BTC,
            Valuta.ETH,
            Valuta.USDTTRC,
            Valuta.ACRUB,
            Valuta.SBERRUB,
            Valuta.TCSBRUB,
            Valuta.CASHUSD,
            Valuta.CASHRUB
        ],
        'Криптовалюты': [Valuta.BTC, Valuta.ETH, Valuta.USDTTRC],
        'Банки': [Valuta.ACRUB, Valuta.SBERRUB, Valuta.TCSBRUB],
        'Наличные': [Valuta.CASHUSD,Valuta.CASHRUB]
    }

    const onChangeValueFrom = useCallback((value?: string) => {
        if (Number(value || 0) || value === '') {
            dispatch(cardActions.setValueFrom(value || '' ));
        }
    }, [dispatch]);

    const onChangeValueTo = useCallback((value?: string) => {
        if (Number(value || 0) || value === '') {
            dispatch(cardActions.setValueTo(value || ''));
        }
    }, [dispatch]);

    const onChangeSelectFrom = useCallback((value?: string) => {
        dispatch(cardActions.setSelectFrom(value as Valuta));
    }, [dispatch]);

    const onChangeSelectTo = useCallback((value?: string) => {
        dispatch(cardActions.setSelectTo(value as Valuta));
    }, [dispatch]);

    return (
        <div className="ExchangeCard">
            <ExchangeField
                label='Отдаёте'
                text={valueFrom}
                options={buttonsFilter.Все}
                buttons={Object.keys(buttonsFilter)}
                onChange={onChangeValueFrom}
                onChangeSelect={onChangeSelectFrom}
                selectValue={selectFom}
            />
            <Exchange className="Icon" />
            <ExchangeField
                label='Получаете'
                text={valueTo}
                options={buttonsFilter.Все}
                buttons={Object.keys(buttonsFilter)}
                onChange={onChangeValueTo}
                onChangeSelect={onChangeSelectTo}
                selectValue={selectTo}
            />
        </div>
    );
};
