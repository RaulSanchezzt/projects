import React from "react";
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
  const [SelectCoins] = useSelectCoins("Currency", currencies);
  const [SelectCrypto] = useSelectCoins("Crypto", currencies);

  return (
    <form>
      <SelectCoins />
      <SelectCrypto />
      <InputSubmit type="submit" value="Convert" />
    </form>
  );
};

export default Form;
