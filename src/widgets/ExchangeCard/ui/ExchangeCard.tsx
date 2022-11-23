import { AppDispatch } from 'app/providers/StoreProvider';
import { ExchangeField } from 'entities/ExchangeField';
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    getDirections,
    getFilter,
    getFilterFrom,
    getFilterTo,
    getOptionsFrom,
    getOptionsTo,
    getSelectFrom,
    getSelectTo,
    getValueFrom,
    getValueTo
} from '../modal/selectors/getValue/getValue';
import { cardActions } from '../modal/slice/cardSlice';
import Exchange from 'shared/icons/exchange.svg';
import { Filters, Valuta } from '../modal/types/CardSchema';

import './ExchangeCard.scss';

export const ExchangeCard = () => {
    const valueTo = useSelector(getValueTo);
    const valueFrom = useSelector(getValueFrom);
    const selectFom = useSelector(getSelectFrom);
    const selectTo = useSelector(getSelectTo);
    const optionsFrom = useSelector(getOptionsFrom);
    const optionsTo = useSelector(getOptionsTo);
    const filters = useSelector(getFilter);
    const directions = useSelector(getDirections);
    const filterFrom = useSelector(getFilterFrom);
    const filterTo = useSelector(getFilterTo);
    const dispatch = useDispatch<AppDispatch>()
    const buttonsFilter: Record<Filters, Valuta[]>= {
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
        dispatch(cardActions.setFilterTo(Filters.ALL));
        const selects = filters.filter(el => el.from.code === value)[0].to
        dispatch(cardActions.setOptionsTo(selects));
    }, [dispatch]);

    const onChangeSelectTo = useCallback((value?: string) => {
        dispatch(cardActions.setSelectTo(value as Valuta));
    }, [dispatch]);

    const onChangeFilterFrom = useCallback((value: Filters) => {
        dispatch(cardActions.setFilterFrom(value));
        const selects = optionsFrom.length ?
        //@ts-ignore
        optionsFrom.filter(el => buttonsFilter[value].includes(el.code)) :
        //@ts-ignore
        directions.filter(el => buttonsFilter[value].includes(el.code))
        dispatch(cardActions.setOptionsFrom(selects));
    }, [dispatch]);

    const onChangeFilterTo = useCallback((value: Filters) => {
        dispatch(cardActions.setFilterTo(value));
        const selects = optionsTo.length ?
        //@ts-ignore
        optionsTo.filter(el => buttonsFilter[value].includes(el.code)) :
        //@ts-ignore
        directions.filter(el => buttonsFilter[value].includes(el.code))
        dispatch(cardActions.setOptionsTo(selects));
    }, [dispatch]);

    return (
        <div className="ExchangeCard">
            <ExchangeField
                label='Отдаёте'
                text={valueFrom}
                options={optionsFrom}
                onChange={onChangeValueFrom}
                onChangeSelect={onChangeSelectFrom}
                selectValue={selectFom}
                onChangeFilter={onChangeFilterFrom}
                buttonSelect={filterFrom}
            />
            <Exchange className="Icon" />
            <ExchangeField
                label='Получаете'
                text={valueTo}
                options={optionsTo}
                onChange={onChangeValueTo}
                onChangeSelect={onChangeSelectTo}
                selectValue={selectTo}
                onChangeFilter={onChangeFilterTo}
                buttonSelect={filterTo}
            />
        </div>
    );
};
