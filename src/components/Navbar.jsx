import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none; 
`;

const Logo = styled.h1`
  font-weight: bold;
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  font-weight: bold;
  color: black;
`;

const Navbar = () => {
  return (
    <Container>
        <Wrapper>
           <Left>
            <Language>ENGLISH</Language>
            <SearchContainer>
                <Input/>
                <Search style={{color:"gray", fontSize:16}}/>
            </SearchContainer>
           </Left>
           <Center><Logo>SHOPIFY</Logo></Center>
           <Right>
           <Link style={{color: 'black'}} to="/register"><MenuItem>REGISTER</MenuItem></Link>
           <Link style={{color: 'black'}} to="/login"><MenuItem>SIGN IN</MenuItem></Link>
           <Link style={{color: 'black'}} to="/product"><MenuItem>PRODUCTS</MenuItem></Link>
           <Link to="/cart">
              <MenuItem>
                <Badge badgeContent={4} color="dark">
                  <ShoppingCartOutlined />
                </Badge>
              </MenuItem>
            </Link>
           </Right>
        </Wrapper>
    </Container>
  )
}

export default Navbar;