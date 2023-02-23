import styled from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
`;

const Link = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = () => { 
    const token = 'example-token'; 
    localStorage.setItem('token', token); 
    setIsLoggedIn(true); 
  }; 
  
  const handleLogout = () => { 
    localStorage.removeItem('token'); 
    setIsLoggedIn(false); 
  };

  return (
    <Container>
      <Wrapper>
        
        <div> 
          {isLoggedIn ? ( 
            <div> 
              <p>Welcome user!</p> 
              <button onClick={handleLogout}>Logout</button> 
            </div> 
          ) : ( 
            <div> 
              <Title>SIGN IN</Title>
              <p>Please log in</p> 
              <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
              </Form>
              <button onClick={handleLogin}>Login</button> 
            </div> 
          )} 
        </div>
      </Wrapper>
    </Container>
  );
};

export default Login;