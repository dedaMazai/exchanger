interface ValutaObject {
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

export interface CardSchema {
    valueFrom?: string;
    valueTo?: string;
    selectFrom?: Valuta;
    selectTo?: Valuta;
    directions?: ValutaObject[];
    filter?: ValutaFilter[];
}
