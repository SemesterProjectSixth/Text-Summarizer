import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #A7D7C5;
`;

const FormWrapper = styled.div`
  background-color: #F6FBF9;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 400px;
  text-align: center;
`;

const Title = styled.h1`
  color: #212B27;
  margin-bottom: 10px;
`;

const Paragraph = styled.p`
  color: #32403B;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #fff;
  color: #000000;
  font-size: 16px;

  &::placeholder {
    color: #000000;
  }
`;

const Button = styled.button`
  background-color: #A7D7C5;
  color: #FFFFFF;
  border: none;
  border-radius: 5px;
  padding: 12px;
  width: 100%;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  &:hover {
    background-color: #94C2B3;
  }
`;

const Signup = () => {
  return (
    <Container>
      <FormWrapper>
        <Title>Create An Account</Title>
        <Paragraph>
          Create an account to enjoy all the services without any ads for free!
        </Paragraph>
        <form>
          <Input type="username" placeholder="Username" />
          <Input type="email" placeholder="Email Address" />
          <Input type="password" placeholder="Password" />
          <Input type="ConfirmPassword" placeholder="Confirm Password" />
          <Button>Create Account</Button>
        </form>
        <Link to="/">Already Have An Account? Sign In</Link>
      </FormWrapper>
    </Container>
  );
};

export default Signup;
