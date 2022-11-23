import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { InputWithButton } from 'shared/ui/InputWithButton/InputWithButton';
import { getFilterFrom, getFilterTo } from 'widgets/ExchangeCard/modal/selectors/getValue/getValue';
import { Filters, ValutaObject } from 'widgets/ExchangeCard/modal/types/CardSchema';

import './ExchangeFiels.scss';

interface ExchangeFieldProps {
    label: string;
    text?: string;
    options: ValutaObject[];
    selectValue?: string;
    buttonSelect: string;
    onChange?: (value: string) => void;
    onChangeSelect?: (value: string) => void;
    onChangeFilter?: (value: Filters) => void;
}

export const ExchangeField = (props: ExchangeFieldProps) => {
    const {
        label,
        text,
        options,
        onChange,
        onChangeSelect,
        selectValue,
        onChangeFilter,
        buttonSelect,
    } = props;
    // @ts-ignore
    const buttonsFilter = Object.keys(Filters).map((key) => Filters[key])

    useEffect(() => {
        handleButton(Filters.ALL)
    }, [])

    const handleButton = (value: string) => {
        onChangeFilter?.(value as Filters)
    }

    return (
        <div>
            <p className="labelHeader">{label}</p>
            <div className="blockButtons">
                {buttonsFilter.map((button, index) => (
                    <button
                        className={button === buttonSelect ? "buttonLabels select" : "buttonLabels"}
                        type="button"
                        onClick={() => handleButton(button)}
                        key={index}
                    >
                        {button}
                    </button>
                ))}
            </div>
            <InputWithButton
                text={text}
                options={options}
                onChange={onChange}
                onChangeSelect={onChangeSelect}
                selectValue={selectValue}
            />
        </div>
    );
};
