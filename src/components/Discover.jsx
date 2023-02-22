import { Send } from '@material-ui/icons';
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import styled from 'styled-components'
const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #7da9f1;
  color: white;
`;

const Discover = () => {

  const [showAlert, setShowAlert] = useState(false)

  const send = (e) => {
    e.preventDefault();
    setShowAlert(true);
  }

  return (
    <Container>
        <Title>Discover</Title>
        <Desc>Get timely notifications from your favorite products</Desc>
        <InputContainer>
          <Input placeholder="Your email"/>
          <Button onClick={send}>
            <Send/>
          </Button>
        </InputContainer>
        {
          showAlert?<Alert key="success" variant="success" style={{ marginTop: 8}}>Congratulations! You will be the first to be notified of our latest collections.</Alert>:<></>
        }
        
    </Container>
  );
};

export default Discover;