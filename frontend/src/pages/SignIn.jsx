import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  signupsuccess,
} from "../redux/userSlice";
import { auth, provider } from "../firebase";
import { async } from "@firebase/util";
import { useNavigate } from "react-router-dom";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 56px);
  color: ${({ theme }) => theme.text};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.bgLighter};
  border: 1px solid ${({ theme }) => theme.soft};
  padding: 20px 50px;
  gap: 10px;
`;

const Title = styled.h1`
  font-size: 24px;
`;

const SubTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
`;

const Input = styled.input`
  border: 1px solid ${({ theme }) => theme.soft};
  border-radius: 3px;
  padding: 10px;
  background-color: transparent;
  width: 100%;
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  border-radius: 3px;
  border: none;
  padding: 10px 20px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.textSoft};
`;

const More = styled.div`
  display: flex;
  margin-top: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.textSoft};
`;

const Links = styled.div`
  margin-left: 50px;
`;

const Link = styled.span`
  margin-left: 30px;
`;

const SignIn = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //*FOR loggin in we dispatch login start which sets loading to true, based on result we disptach login success or failure
  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    //hit the post request with username and password and pass result to reducer to ser current user details
    try {
      const res = await axios.post("/auth/signin", { name, password });
      const auth_token = res.data.token;
      localStorage.setItem("auth_token", auth_token);
      dispatch(loginSuccess(res.data));
      navigate("/");
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  const handlesignup = async (e) => {
    e.preventDefault();
    dispatch(loginStart());
    try {
      const res = await axios.post("/auth/signup", { name, email, password });
      console.log(res.data.success);
      if (res.data.success) {
        alert("signup success, proceed to login");
        dispatch(signupsuccess());
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <SubTitle>to continue to shorts</SubTitle>
        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handleLogin}>Sign in</Button>
        <Title>or</Title>

        <Input
          placeholder="username"
          onChange={(e) => setName(e.target.value)}
        />
        <Input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <Input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={handlesignup}>Sign up</Button>
      </Wrapper>
      <More>
        English(USA)
        <Links>
          <Link>Help</Link>
          <Link>Privacy</Link>
          <Link>Terms</Link>
        </Links>
      </More>
    </Container>
  );
};

export default SignIn;
