import { MyCurrency } from "../models/myCurrency";

export const myCurrencies = 
[
    new MyCurrency("ALL",'all',"ALL"),
    new MyCurrency("RSD","dinar","РСД"), new MyCurrency('EUR','euro','€'),new MyCurrency("USD","dollar","$"),
    new MyCurrency("GBP","pound","£"), new MyCurrency("RUB","rouble","₽"),new MyCurrency('UAH','Hryvnia','₴'),
    new MyCurrency("JPY", "yen", "¥")
];
export const currencies = [
    {
        "code": "ALL",
        "name": "all",
        "symbol": "ALL"
    },
    {
        "code": "RSD",
        "name": "dinar",
        "symbol": "РСД"
    }, // din
    {
        "code": "EUR",
        "name": "euro",
        "symbol": "€"
    }, // evro
    {
        "code": "USD",
        "name": "dollar",
        "symbol": "$"
    }, // dolar
    {
        "code": "GBP",
        "name": "pound",
        "symbol": "£"
    }, // funta
    {
        "code": "RUB",
        "name": "rouble",
        "symbol": "₽"
    },
    {
        "code": "UAH",
        "name": "Hryvnia",
        "symbol": "₴"
    }, // grivna
    {
        "code": "JPY",
        "name": "yen",
        "symbol": "¥"
    } // jen
];