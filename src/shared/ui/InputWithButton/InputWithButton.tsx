import { ChangeEvent, useState } from 'react';
import { ValutaObject } from 'widgets/ExchangeCard/modal/types/CardSchema';
import './InputWithButton.scss';

interface InputWithButtonProps {
    text?: string;
    options: ValutaObject[];
    selectValue?: string;
    onChange?: (value: string) => void;
    onChangeSelect?: (value: string) => void;
}

export const InputWithButton = (props: InputWithButtonProps) => {
    const {
        text,
        options,
        onChange,
        onChangeSelect,
        selectValue,
    } = props;

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        onChangeSelect?.(e.target.value)
    }

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className="text-field">
            <input
                className="text-field__input"
                value={text || ''}
                onChange={onChangeHandler}
            />
            <select
                className="text-field__select"
                value={selectValue}
                onChange={handleChange}
            >
                {options.map((el, index) => (
                    <option value={el.code} key={index}>{el.name}</option>
                ))}
            </select>
        </div>
    );
};
