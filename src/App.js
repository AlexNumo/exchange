import RenderCurrency from './Components/RenderCurrency/RenderCurrency';
import styled from "styled-components";

const CurrencyConverter = styled.div`
  display: flex;
  justify-content: center;
`;

function App() {

  return (
    <CurrencyConverter>
      <RenderCurrency/>
    </CurrencyConverter>
  );
}

export default App;
