export interface ValutaObject {
    code: string;
    name: string;
}

interface ValutaFilter {
    from: ValutaObject;
    to: ValutaObject[];
}

export enum Valuta {
    BTC = 'BTC',
    ETH = 'ETH',
    USDTTRC = 'USDTTRC',
    ACRUB = 'ACRUB',
    SBERRUB = 'SBERRUB',
    TCSBRUB = 'TCSBRUB',
    CASHUSD = 'CASHUSD',
    CASHRUB = 'CASHRUB',
}

export enum Filters {
    ALL = 'Все',
    CRYPTO = 'Криптовалюты',
    BANK = 'Банки',
    CASH = 'Наличные',
}

export interface CardSchema {
    valueFrom?: string;
    valueTo?: string;
    selectFrom?: Valuta;
    selectTo?: Valuta;
    filterFrom?: Filters;
    filterTo?: Filters;
    optionsFrom?: ValutaObject[];
    optionsTo?: ValutaObject[];
    directions?: ValutaObject[];
    filter?: ValutaFilter[];
}
