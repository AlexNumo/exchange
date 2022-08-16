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

    if (rate != null) {
      const USDbuy = rate[25].rate;
      const EURbuy = rate[32].rate;
    return (
      <CurrencyPosition>
        <Container>
        <h2>Currency converter</h2>
        <h4>USD: {USDbuy}</h4>
        <h4>EUR: {EURbuy}</h4>
        <Convertation
          USDbuy={USDbuy}
          EURbuy={EURbuy}
          />
          </Container>
    </CurrencyPosition>
    )}

    return (null);
}
  
export default RenderCurrency;