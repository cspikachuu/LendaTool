import * as React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  FormHelperText,
  Button,
  Center,
  Square,
  Container
} from "@chakra-ui/react";
import { useSelector, useDispatch } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import * as actions from "../actions/actions"


export default function Login() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const userInfo = useSelector((state: RootState) => state.markets.userInfo);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  async function login(){
    const data = await fetch('/user/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password })
    }).then(resp => resp.json())
      .catch(err => console.log('error in /auth/login'))

    if (data === false) {
      //tell user that login credentials were wrong
      console.log('invalid credentials')
    } else {

      dispatch(actions.GetUserInfo(data));
      navigate("/profile", { replace: true }) //navigates to profile if login was successful
    }
    //  console.log(userInfo)
    //  navigate("/profile", { replace: true })
  }



  return (
    <Container id="login-container">
      <div style={{ margin: "25px 0px", padding: "auto" }}> Login </div>
      <FormControl isRequired color="black">
        <FormLabel>Username</FormLabel>
        <Input id="username" type="text" onChange={e => { setUsername(e.target.value) }} />
        <FormLabel>Password</FormLabel>
        <Input id="password" type="text" onChange={e => { setPassword(e.target.value) }} />
      </FormControl>
      <Button
        style={{ margin: "25px 0px", padding: "auto" }}
        colorScheme="orange"
        onClick={(e) => login()}
      >
        Login
      </Button>
    </Container>
  );
}
