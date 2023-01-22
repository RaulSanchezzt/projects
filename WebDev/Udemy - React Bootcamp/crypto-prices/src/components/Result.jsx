import styled from "@emotion/styled";

const Container = styled.div`
  color: #fff;
  font-family: "Lato", sans-serif;
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-top: 20px;
`;

const Image = styled.img`
  display: block;
  width: 120px;
`;

const Text = styled.p`
  font-size: 17px;
  span {
    font-weight: 700;
  }
`;
const Price = styled.p`
  font-size: 30px;
  span {
    font-weight: 700;
  }
`;

const Result = ({ result }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    result;
  return (
    <Container>
      <Image src={`https://cryptocompare.com/${IMAGEURL}`} alt="Crypto Icon" />
      <div>
        <Price>
          Price: <span>{PRICE}</span>
        </Price>
        <Text>
          Highest price of the day: <span>{HIGHDAY}</span>
        </Text>
        <Text>
          Lowest price of the day:: <span>{LOWDAY}</span>
        </Text>
        <Text>
          Percentage change: <span>{CHANGEPCT24HOUR}</span>
        </Text>
        <Text>
          Last update: <span>{LASTUPDATE}</span>
        </Text>
      </div>
    </Container>
  );
};

export default Result;
