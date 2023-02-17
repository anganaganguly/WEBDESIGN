import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 15px;
  font-weight: 550;
`;

const Deals = () => {
  return (
    <Container>
        <p>Super Deal! Free Shipping on Orders above Rs500</p>
        <p style={{float:"right"}}>Get Upto Rs500 Cashback on using CRED Pay UPI</p>
    </Container>
  )
}

export default Deals;