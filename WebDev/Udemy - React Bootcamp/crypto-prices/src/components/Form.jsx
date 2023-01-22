import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import useSelectCoins from "../hooks/useSelectCoins";
import { currencies } from "../data/currencies";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 4px;
  transition: background-color 0.4s ease;
  margin-top: 30px;
  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Form = () => {
  const [cryptos, setCryptos] = useState([]);
  const [coin, SelectCoins] = useSelectCoins("Currency", currencies);
  const [crypto, SelectCrypto] = useSelectCoins("Crypto", cryptos);

  useEffect(() => {
    const queryAPI = async () => {
      const url =
        "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD";
      const answer = await fetch(url);
      const result = await answer.json();

      const arrayCryptos = result.Data.map((crypto) => {
        const cryptocurrencies = {
          id: crypto.CoinInfo.Name,
          name: crypto.CoinInfo.FullName,
        };

        return cryptocurrencies;
      });

      setCryptos(arrayCryptos);
    };
    queryAPI();
  }, []);

  return (
    <form>
      <SelectCoins />
      {coin}
      <SelectCrypto />
      <InputSubmit type="submit" value="Convert" />
    </form>
  );
};

export default Form;
