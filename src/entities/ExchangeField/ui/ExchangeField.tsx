import { useState } from 'react';
import { InputWithButton } from 'shared/ui/InputWithButton/InputWithButton';

import './ExchangeFiels.scss';

interface ExchangeFieldProps {
    label: string;
    text?: string;
    options: string[];
    buttons: string[];
    selectValue?: string;
    onChange?: (value: string) => void;
    onChangeSelect?: (value: string) => void;
}

export const ExchangeField = (props: ExchangeFieldProps) => {
    const {
        label,
        text,
        options,
        buttons,
        onChange,
        onChangeSelect,
        selectValue,
    } = props;
    const [buttonSelect, setButtonSelect] = useState<string>('');

    const handleButton = (value: string) => {
        setButtonSelect(value)
    }

    return (
        <div>
            <p className="labelHeader">{label}</p>
            <div className="blockButtons">
                {buttons.map(button => (
                    <button
                        className={button === buttonSelect ? "buttonLabels select" : "buttonLabels"}
                        type="button"
                        onClick={() => handleButton(button)}
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
