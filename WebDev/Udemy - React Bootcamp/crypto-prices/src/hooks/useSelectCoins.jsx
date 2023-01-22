import React from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  color: #fff;
  display: block;
  font-family: "Lato", sans-serif;
  font-size: 24px;
  font-weight: 700;
  margin: 15px 0;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const useSelectCoins = (label, coins) => {
  const SelectCoins = () => (
    <>
      <Label>{label}</Label>
      <Select>
        <option value="">Select</option>

        {coins.map((coin) => (
          <option key={coin.id} value={coin.id}>
            {coin.name}
          </option>
        ))}
      </Select>
    </>
  );

  return [SelectCoins];
};

export default useSelectCoins;
