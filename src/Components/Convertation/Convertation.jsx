import React from 'react';
import { useState, useEffect } from 'react';
import { SelectStyled } from '../Convertation/Convertation.styled';

const Convertation = ({USDbuy, EURbuy}) => {
  const [result, setResult] = useState('0');
  const [inputValueOne, setInputValueOne] = useState('');
  const [inputValueTwo, setInputValueTwo] = useState('');
  const options = [
    { value: '', text: '--Choose--' },
    { value: USDbuy, text: 'USD' },
    { value: EURbuy, text: 'EUR' },
    { value: 1, text: 'UAH' }
  ];

  const [selectedOne, setSelectedOne] = useState(options[0].value);
  const [selectedTwo, setSelectedTwo] = useState(options[0].value);
  
  const handleChangeOne = event => {
    console.log(event.target.value);
    setSelectedOne(event.target.value);
  };

    const handleChangeTwo = event => {
      console.log(event.target.value);
    setSelectedTwo(event.target.value);
  };


    useEffect(() => {
      function ExchangeCurrency() {
          const Sum = ((selectedOne * inputValueOne) + (selectedTwo * inputValueTwo));
          return setResult(Sum);
      }
      ExchangeCurrency()
    });

    return (
        <div>
          <SelectStyled value={selectedOne} onChange={handleChangeOne}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </SelectStyled>
        <input
          type="number"
          value={inputValueOne}
          onChange={(event) => setInputValueOne(event.target.value)}
        />
        <SelectStyled value={selectedTwo} onChange={handleChangeTwo}>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
        </SelectStyled>
        <input
          type="number"
          value={inputValueTwo}
          onChange={(event) => setInputValueTwo(event.target.value)}
        />
        <h2>Result in UAH: {result}</h2>
        </div>
    )
}

export default Convertation;