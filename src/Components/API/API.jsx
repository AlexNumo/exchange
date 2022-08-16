import axios from 'axios';

const defaultPath = `https://api.privatbank.ua/p24api/`;
axios.defaults.baseURL = `${defaultPath}`;

export const getCurrency = async () =>{
    const response = await axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`);
    return response.data;
};