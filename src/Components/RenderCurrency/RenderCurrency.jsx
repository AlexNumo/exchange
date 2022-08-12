import { useEffect, useState } from "react";
import {toast} from "react-hot-toast";
import { getCurrency } from '../API/API';  
import Convertation from '../Convertation/Convertation';
import { CurrencyPosition, Container } from '../RenderCurrency/RenderCurrency.styled';

const RenderCurrency = () => {
    const [rate, setRate] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      try {
        const item = await getCurrency();
        setRate(item);
      } catch (error) {
        toast.error('Some`s wrong')
      }
    }
    fetchItem();
  }, [setRate]);

  // const date = Date.now();
  function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
  return `${year}${separator}.${month<10?`0${month}`:`${month}`}${separator}.${date}`
  }
    if (rate != null) {
      const USDbuy = rate[25].rate;
      const EURbuy = rate[32].rate;
    return (
      <CurrencyPosition>
        <Container>
        <h2>Currency converter</h2>
        <p>Today: {getCurrentDate()}</p>
        <h4>USD: {USDbuy}</h4>
        <h4>EUR: {EURbuy}</h4>
        <Convertation
          USDbuy={USDbuy}
          EURbuy={EURbuy}
          />
          </Container>
    </CurrencyPosition>
    )}

    return (
      <div>
        <h2>Please wait...</h2>
      </div>
    );
}
  
export default RenderCurrency;