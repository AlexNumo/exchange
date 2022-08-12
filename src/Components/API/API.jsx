import axios from 'axios';

const defaultPath = `https://api.privatbank.ua/p24api/`;
axios.defaults.baseURL = `${defaultPath}`;

export const getCurrency = async () =>{
    const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    return response.data;
};

export const getCurrencyEUR = async () =>{
    const response = await axios.get(`pubinfo?json&exchange&coursid=5`);
    // return response.data;
    return console.log(response.data);
};

export const getOpenExchangeRates = async () =>{
    const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    // return response.data;
    return console.log(response.data);
};

getOpenExchangeRates();