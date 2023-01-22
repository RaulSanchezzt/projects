import { useState, useEffect } from "react";
import styled from "@emotion/styled";
import Form from "./components/Form";
import Result from "./components/Result";
import CryptoImage from "./img/background-image.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: "Lato", sans-sherif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: " ";
    width: 140px;
    height: 8px;
    background-color: #66a2fe;
    display: block;
    margin: 10px auto 0 auto;
  }
`;

function App() {
  const [coins, setCoins] = useState({});
  const [result, setResult] = useState({});

  useEffect(() => {
    if (Object.keys(coins).length > 0) {
      const calcCrypto = async () => {
        const { coin, crypto } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${coin}`;
        const answer = await fetch(url);
        const result = await answer.json();

        setResult(result.DISPLAY[crypto][coin]);
      };

      calcCrypto();
    }
  }, [coins]);

  return (
    <Container>
      <Image src={CryptoImage} alt="Crypto Background" />
      <div>
        <Heading>Crypto Prices</Heading>
        <Form setCoins={setCoins} />
        {result && result.PRICE && <Result result={result}/>}
      </div>
    </Container>
  );
}

export default App;
